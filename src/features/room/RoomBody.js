import React from 'react';
import { Link } from 'react-router-dom';
function RoomBody({ item }) {
  return (
    <div className="flex border border-dark px-[100px]">
      <img
        src={item?.roomImage}
        alt="Room"
        className=" mx-1 block w-[600px] m-5 ms-5 pe-5"
      />
      <div className="flex flex-col gap-5 font-bold text-2xl my-20 mx-10 ">
        <div>ROOM NO : {item?.id}</div>
        <div>PRICE : {item?.currentPrice} Baht</div>
        <Link to={`/book/${item.id}`}>
          <button
            className="my-10 bg-black text-white w-[200px] h-[80px] rounded-xl align-center items-center"
            type="button"
          >
            Booking
          </button>
        </Link>
      </div>
    </div>
  );
}

export default RoomBody;
