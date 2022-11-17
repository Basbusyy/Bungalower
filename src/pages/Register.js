import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { validateRegister } from '../validator/userValidate';
import { useLoading } from '../context/LoadingContext';
import { Label, TextInput } from 'flowbite-react';
import Header from '../layout/header/Header';

function Register() {
  const { register } = useAuth();
  const { startLoading, stopLoading } = useLoading();
  const navigate = useNavigate();
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
      navigate('/home');
    } catch (error) {
    } finally {
      stopLoading();
    }
  };
  return (
    <>
      <Header />
      <div className="flex items-center justify-center font-black text-5xl mt-5 mb-5">
        REGISTER FORM
      </div>
      <div className="flex items-center justify-center">
        <form className="flex flex-col gap-4" onSubmit={handleOnSubmitform}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="firstName" value="Firstname" />
            </div>
            <TextInput
              name="firstName"
              type="text"
              className="form-control"
              id="firstName"
              placeholder="Firstname"
              value={input.firstName}
              onChange={handleChangeInput}
              required={true}
              shadow={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="lastName" value="Lastname" />
            </div>
            <TextInput
              name="lastName"
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Lastname"
              value={input.lastName}
              onChange={handleChangeInput}
              required={true}
              shadow={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="userName" value="Username" />
            </div>
            <TextInput
              name="userName"
              type="text"
              className="form-control"
              id="userName"
              placeholder="Username"
              value={input.userName}
              onChange={handleChangeInput}
              required={true}
              shadow={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Password" />
            </div>
            <TextInput
              name="password"
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              value={input.password}
              onChange={handleChangeInput}
              required={true}
              shadow={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="confirmPassword" value="Confirm Password" />
            </div>
            <TextInput
              name="confirmPassword"
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="Confirm Password"
              value={input.confirmPassword}
              onChange={handleChangeInput}
              required={true}
              shadow={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Email" />
            </div>
            <TextInput
              name="email"
              type="email"
              className="form-control"
              id="email"
              placeholder="email"
              value={input.email}
              onChange={handleChangeInput}
              required={true}
              shadow={true}
            />
          </div>
          <div className="flex items-center rounded-lg mx-4 justify-center bg-black text-white w-[200px] h-[50px] text-xl">
            <button type="submit">Register Account</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
