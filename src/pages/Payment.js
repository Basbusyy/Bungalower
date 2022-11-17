import React from 'react';
import PaymentContainer from '../features/booking/PaymentContainer';

// import Footer from '../layout/footer/footer';
// import Header from '../layout/header/Header';
function Payment({ closeModal }) {
  return (
    <>
      {/* <Header /> */}
      <PaymentContainer closeModal={closeModal} />
      {/* <Footer />; */}
    </>
  );
}

export default Payment;
