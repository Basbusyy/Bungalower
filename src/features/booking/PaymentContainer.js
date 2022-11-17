import { toast } from 'react-toastify';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as bookingService from '../../api/bookApi';
import dateFormat from 'dateformat';
import { useAuth } from '../../context/AuthContext';

function PaymentContainer() {
  const [paymentImage, setPaymentImage] = useState(null);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const { user } = useAuth();
  const { id } = useParams();

  const navigate = useNavigate();
  const createBook = async (e) => {
    e.preventDefault();
    const newBook = new FormData();
    checkIn && newBook.append('checkIn', checkIn);
    checkOut && newBook.append('checkOut', checkOut);
    email && newBook.append('email', email);
    phone && newBook.append('phone', phone);
    paymentImage && newBook.append('paymentImage', paymentImage);
    id && newBook.append('roomId', id);
    newBook.append('userId', user.id);

    try {
      const res = await bookingService.createBooking(newBook);
      // axios.post('http://localhost:9999/book/1', newBook);
      navigate(`/profile/${user.id}`);
      toast.success('Booking Success');
    } catch (err) {
      toast.error(err.response.data.message);
      console.log(err);
    }
  };

  const currentDate = dateFormat(new Date(), 'yyyy-mm-dd');

  return (
    <>
      <div id="booking" className="section">
        <div className="container">
          <div className="row">
            <div className="booking-form">
              <form onSubmit={createBook}>
                <div className="row no-margin">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <span className="form-label">Check In</span>
                      <input
                        className="form-control"
                        type="date"
                        defaultValue={currentDate}
                        min={currentDate}
                        required={true}
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <span className="form-label">Check Out</span>
                      <input
                        className="form-control"
                        type="date"
                        min={checkIn}
                        required={true}
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <span className="form-label">Email</span>
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <span className="form-label">Phone</span>
                  <input
                    className="form-control"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <input
                  type="file"
                  onChange={(e) => {
                    if (e.target.files[0]) {
                      setPaymentImage(e.target.files[0]);
                    }
                  }}
                />
                <div className="form-btn">
                  <button className="submit-btn" type="submit">
                    Book Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentContainer;
