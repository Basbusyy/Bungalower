import { createContext, useContext, useEffect, useState } from 'react';
import * as authService from '../api/authApi';
import {
  addAccessToken,
  getAccessToken,
  removeAccessToken
} from '../ultils/localStorage';

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const fetchMe = async () => {
      try {
        if (getAccessToken()) {
          await getMe();
        }
      } catch (err) {
        console.log(err);
      } finally {
        setInitialLoading(false);
      }
    };
    fetchMe();
  }, []);
  const getMe = async () => {
    const res = await authService.getMe();
    setUser(res.data.user);
  console.log(user)
  };

  const register = async (input) => {
    const res = await authService.register(input);
    addAccessToken(res.data.token);
  };

  const login = async (input) => {
    const res = await authService.login(input);
    addAccessToken(res.data.token);
    console.log(user);
    setUser(true);
  };
  
  const logout = () => {
    setUser(null);
    removeAccessToken();
  };

  return (
    <AuthContext.Provider
      value={{ register, user, logout, login, initialLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContextProvider;
