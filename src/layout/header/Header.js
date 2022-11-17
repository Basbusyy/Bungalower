import React from 'react';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <>
      <div className="bg-black h-[100px] w-full flex items-center justify-between ">
        <Link to="/">
          <div className=" text-white font-bold ">
            BUNGALOWER
          </div>
        </Link>
        <div className=" flex justify-around w-[600px]">
          <div className="text-white font-bold">HOME</div>
          <div className="text-white font-bold">ROOMS</div>
          <div className="text-white font-bold">ABOUT US</div>
        </div>
        <div className="flex justify-end items-center gap-2 ">
          <Link to="/login">
            <button
              className="bg-white w-[100px] p-[15px] rounded-xl gap-3"
              type="button"
            >
              Login
            </button>
          </Link>
          <Link to="/register">
            <button
              className="bg-white w-[100px] p-[15px] rounded-xl gap-3"
              type="button"
            >
              Register
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
