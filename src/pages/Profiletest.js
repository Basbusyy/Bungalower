import React from 'react';
import BookingContainer from '../features/booking/BookingContainer';

export default function Profiletest() {
  return (
    <>
      <div className="flex items-center justify-center font-black text-5xl mt-10 my-5">
        <div>Booking</div>
      </div>
      <div className="border-t-4 font-black text-3xl"> ROOM BOOKING</div>
      <div>
        <BookingContainer />
      </div>
    </>
  );
}
