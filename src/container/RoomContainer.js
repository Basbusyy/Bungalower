import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Roomimage from '../asset/image/beachfront-bugalow-slider-1-992x661.jpg';
import BookingForm from '../features/BookingForm';
import Modal from '../modal/Modal';
import PaymentContainer from './PaymentContainer';

function RoomContainer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mx-auto py-4 max-w-152 bg-light">
      <div className="mx-5 d-flex bg-light  ">
        <img
          src={Roomimage}
          alt="Room"
          className="rounded mx-auto d-block "
        ></img>
        <div className=" w-50 align-self-center d-flex flex-column gap-3 bg-light">
          <div className="w-25 align-self-center  d-flex flex-column gap-1 bg-light">
            <h4>
              Property overview Airport <br />
            </h4>
            Transfer <br />
            Sauna <br />
            Blackout curtains
            <br />
            Balcony/terrace <br />
            <div>
              <br />
              <h4>
                Nearby Attraction <br />
              </h4>
              Diamond Muay Thai 1.48 km <br />
              Salad Beach 9 km <br />
              Ao Chaloklum Bay 9.35 km <br />
              Thong Nai Pan Yai Beach 10.13 km <br />
            </div>
            <br />
            <div>
              <h4>
                Dining, drinking and snacking <br />
              </h4>
              Coffee/tea maker <br />
              Free bottled water <br />
              Mini bar <br />
              Refrigerator
              <br />
            </div>
            <div>
              <br />
              <h4>
                Price = 2,500 Bath
                <br />
              </h4>
            </div>
            <br />
            <Link to="/payment">
              <button className="btn btn-dark me-md-2" type="button">
                Booking
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomContainer;
