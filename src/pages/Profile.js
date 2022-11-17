// import React, { useEffect, useState } from 'react';
// import Header from '../layout/header/Header';
// import { useAuth } from '../context/AuthContext';
// import { useLoading } from '../context/LoadingContext';
// import * as roomService from '../api/roomApi';

function Profile() {
  // const [profile, setProfile] = useState([]);
  // const {
  //   user: { id }
  // } = useAuth();
  // const [startLoading, stopLoading] = useLoading();

  // useEffect(() => {
  //   const fetchPost = async () => {
  //     try {
  //       startLoading();
  //       const res = await roomService.getRoomById(id);
  //       setProfile(res.data.profile);
  //     } catch (err) {
  //       console.log(err);
  //     } finally {
  //       stopLoading();
  //     }
  //   };
  //   fetchPost();
  // }, [id]);

  return (
    <>
      <div className="mt-3 ml-3 mr-3">
        <h1 className="text-center" style={{ fontSize: '50px' }}>
          User Page
        </h1>
      </div>
      <div className="w-full flex justify-start">
        <div className="font-extrabold">
          Booking
          <div>Info</div>
        </div>
      </div>
    </>
  );
}

export default Profile;
