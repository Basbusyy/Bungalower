import React, { useEffect, useState } from 'react';
import { getAllBooking } from '../../api/authApi';
import BookingList from './BookingList';
import { useParams } from 'react-router-dom';

function BookingBody() {
  const { id } = useParams();

  const [books, setBooks] = useState('');
  const bookings = async () => {
    try {
      const res = await getAllBooking(id);
      setBooks(res.data.booking);
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
          <BookingList item={item} setBooks={setBooks} />
        ))}
    </>
  );
}

export default BookingBody;
