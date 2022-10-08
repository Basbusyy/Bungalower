import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import AboutUs from '../pages/AboutUs';
import Home from '../pages/Home';
import HomeWithLogin from '../pages/HomeWithLogin';
import Login from '../pages/Login';
import Payment from '../pages/Payment';
import Register from '../pages/Register';
import Room from '../pages/Room';

function Router() {
  const { user } = useAuth();

  return (
    <Routes>
      {user ? (
        <>
          <Route path="/" element={<HomeWithLogin />}>
            <Route path="room" element={<Room />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="payment" element={<Payment />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </>
      ) : (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/room" element={<Room />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="*" element={<Navigate to="/" />} />
        </>
      )}
    </Routes>
  );
}

export default Router;
