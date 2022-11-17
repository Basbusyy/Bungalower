import React, { useEffect, useState } from 'react';
import AdminBookingList from './AdminBookingList';
import { getAllBooking } from '../../../api/adminApi';
function AdminBookingBody() {
  const [books, setBooks] = useState('');
  const bookings = async () => {
    try {
      const res = await getAllBooking();
      setBooks(res.data.allBooking);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    bookings();
  }, []);

  return (
    <>
      {books &&
        books?.map((item, index) => (
          <AdminBookingList item={item} key={index} setBooks={setBooks} />
        ))}
    </>
  );
}

export default AdminBookingBody;
