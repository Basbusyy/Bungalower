import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
function HomeWithLogin() {
  const { logout } = useAuth();
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <nav className="navbar navbar-expand-lg bg-dark">
          <div className="container-fluid d-flex flex-row">
            <Link className="navbar-brand text-white" to="/">
              Bungalower
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            ></button>
          </div>
        </nav>
        <div
          className="d-flex justify-content-between"
          style={{ width: '300px' }}
        >
          <div>
            <Link
              className="nav-link active text-white "
              aria-current="page"
              to="/"
            >
              Home
            </Link>
          </div>
          <div>
            <Link className="nav-link text-white" to="/room">
              Room
            </Link>
          </div>
          <Link className="nav-link text-white" to="/aboutus">
            About Us
          </Link>
        </div>
        <div className="  d-flex justify-content-end">
          <Link to="/">
            <button className="btn btn-light me-md-2" type="button" onClick={logout}>
              Log Out
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default HomeWithLogin;
