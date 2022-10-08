import axios from '../config/axios';

export const register = (input) => axios.post('/auth/register', input);
export const login = ({ userName, password }) =>
  axios.post('auth/login', { userName, password });
export const getMe = () => axios.get('auth/');
