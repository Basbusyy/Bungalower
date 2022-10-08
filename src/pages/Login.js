import React, { useState } from 'react';
import Header from '../layout/header/Header';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useLoading } from '../context/LoadingContext';
import { toast } from 'react-toastify';

function Login() {
  const { login } = useAuth();
  const { startLoading, stopLoading } = useLoading();

  const [input, setInput] = useState({
    userName: '',
    password: ''
  });

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      startLoading();
      await login(input);
      toast.success('Login success');
    } catch (err) {
      toast.error(err.response.data.message);
    } finally {
      stopLoading();
    }
  };
  return (
    <>
      <Header />
      <form onSubmit={handleSubmitForm}>
        <div className="d-flex flex-column ">
          <div className="d-flex justify-content-center mt-2 text fs-1 fw-bold">
            Login Form
          </div>
          <div className="d-flex justify-content-center mt-2">
            <div className="form-floating mb-2">
              <input
                name="userName"
                type="text"
                className="form-control"
                id="userName"
                placeholder="userName"
                value={input.userName}
                onChange={handleChangeInput}
              />
              <label htmlFor="username">Username</label>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-2">
            <div className="form-floating mb-2">
              <input
                name="password"
                type="password"
                className="form-control"
                id="password"
                placeholder="password"
                value={input.password}
                onChange={handleChangeInput}
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-2 gap-2">
            Do You have Account ?<Link to="/register">Register</Link>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <button type="submit" className="btn btn-primary btn-lg">
              Login
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Login;
