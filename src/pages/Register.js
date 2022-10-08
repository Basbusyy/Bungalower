import { toast } from 'react-toastify';
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import Header from '../layout/header/Header';
import { validateRegister } from '../validator/userValidate';
import { useLoading } from '../context/LoadingContext';

function Register() {
  const { register } = useAuth();
  const { startLoading, stopLoading } = useLoading();

  const [input, setInput] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleOnSubmitform = async (e) => {
    e.preventDefault();
    const { error } = validateRegister(input);
    if (error) {
      return toast.error(error.message);
    }
    try {
      startLoading();
      await register(input);
      toast.success('Register Success');
    } catch (error) {
    } finally {
      stopLoading();
    }
  };
  return (
    <>
      <Header />
      <form className="d-flex flex-column" onSubmit={handleOnSubmitform}>
        <div className="d-flex justify-content-center mt-2 text fs-1 fw-bold">
          Register Form
        </div>
        <div className="d-flex flex-column ">
          <div className="d-flex justify-content-center mt-2">
            <div className="form-floating mb-2">
              <input
                name="firstName"
                type="text"
                className="form-control"
                id="firstName"
                placeholder="firstName"
                value={input.firstName}
                onChange={handleChangeInput}
              />
              <label htmlFor="firstName">First name</label>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-2">
            <div className="form-floating mb-2">
              <input
                name="lastName"
                type="text"
                className="form-control"
                id="lastName"
                placeholder="lastName"
                value={input.lastName}
                onChange={handleChangeInput}
              />
              <label htmlFor="lastName">Last name</label>
            </div>
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
              <label htmlFor="userName">Username</label>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-2">
            <div className="form-floating mb-2">
              <input
                name="email"
                type="text"
                className="form-control"
                id="email"
                placeholder="email"
                value={input.email}
                onChange={handleChangeInput}
              />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-2">
            <div className="form-floating mb-2">
              <input
                name="password"
                type="text"
                className="form-control"
                id="password"
                placeholder="password"
                value={input.password}
                onChange={handleChangeInput}
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-2">
            <div className="form-floating mb-2">
              <input
                name="confirmPassword"
                type="text"
                className="form-control"
                id="confirmPassword"
                placeholder="confirmPassword"
                value={input.confirmPassword}
                onChange={handleChangeInput}
              />
              <label htmlFor="confirmPassword">Confirm Password</label>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <button type="submit" className="btn btn-primary btn-lg">
              Create Account
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Register;
