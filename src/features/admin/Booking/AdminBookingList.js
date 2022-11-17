import React from 'react';
import { deleteBooking } from '../../../api/adminApi';
import dateFormat from 'dateformat';
function AdminBookingList({ item, setBooks }) {
  console.log(item);

  const handleDeleteBooking = async () => {
    try {
      const res = await deleteBooking(item.id);
      console.log(res.data.allBookings);
      setBooks(res.data.allBookings);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex border border-dark px-[100px]">
      <img
        src={item?.Room?.roomImage}
        alt="Room"
        className=" mx-1 block w-[600px] m-5 ms-5 pe-5"
      />
      <div className="flex flex-col gap-5 font-bold text-2xl my-20 mx-10 ">
        <div>UserBooking : {item?.User?.userName}</div>
        <div>ROOM NO : {item?.Room?.id}</div>
        <div>PRICE : {item?.Room?.currentPrice} Baht</div>
        <button
          className="my-10 bg-black text-white w-[200px] h-[80px] rounded-xl align-center items-center"
          type="button"
          onClick={handleDeleteBooking}
        >
          CANCEL BOOKING
        </button>
      </div>
    </div>
  );
}

export default AdminBookingList;
