import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import AdminBooking from '../features/admin/AdminBooking';
import AdminRoom from '../features/admin/AdminRoom';
import BookingForm from '../features/booking/BookingForm';
import AboutUs from '../pages/AboutUs';
import AdminLogin from '../pages/AdminLogin';
import Home from '../pages/Home';
import HomeWithLogin from '../pages/HomeWithLogin';
import Login from '../pages/Login';
import Payment from '../pages/Payment';
import Profiletest from '../pages/Profiletest';
import Register from '../pages/Register';
import Room from '../pages/Room';

function Router() {
  const { user } = useAuth();
  if (user?.role === 'member') {
    return (
      <Routes>
        <Route path="/" element={<HomeWithLogin />}>
          <Route path="/room" element={<Room />} />
          <Route path="/profile/:id" element={<Profiletest />} />
          <Route path="/book/:id" element={<BookingForm />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    );
  }

  if (user?.role === 'admin') {
    return (
      <Routes>
        <Route path="/" element={<AdminLogin />}>
          <Route path="/admin/room" element={<AdminRoom />} />
          <Route path="/admin/book" element={<AdminBooking />} />
        </Route>
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/room" element={<Room />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
  }
}

export default Router;
