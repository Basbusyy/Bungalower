import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import profileImage from '../asset/image/default_profile_pic.jpg';
function AdminLogin() {
  const { logout } = useAuth();
  return (
    <div>
      <div className="bg-black h-[100px] w-full flex items-center justify-around ">
        <Link to="/">
          <div className=" text-white font-bold ">BUNGALOWER</div>
        </Link>
        <div className=" flex justify-around w-[600px]">
          <Link to="/">
            <div className="text-white font-bold">HOME</div>
          </Link>
          <Link to="/admin/room">
            <div className="text-white font-bold">ROOMS</div>
          </Link>
          <Link to="/admin/book">
            <div className="text-white font-bold">BOOKING</div>
          </Link>
        </div>
        <div className=" w-[150px] flex justify-between items-center ">
          <img
            style={{ width: '50px', height: '50px' }}
            src={profileImage}
            alt="profile"
          />
          <Link to="/">
            <button
              className="text-white font-bold dme-md-2 flex items-center"
              type="button"
              onClick={logout}
            >
              Log Out
            </button>
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default AdminLogin;
