import React from 'react';
import PaymentContainer from '../container/PaymentContainer';
import Footer from '../layout/footer/footer';
import Header from '../layout/header/Header';
function Payment() {
  return (
    <>
      <Header />
      <PaymentContainer />
      <Footer />;
    </>
  );
}

export default Payment;
