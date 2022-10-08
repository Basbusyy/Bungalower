import React from 'react';

function PaymentContainer() {
  return (
    <>
      <div id="booking" className="section">
        <div className="section-center">
          <div className="container">
            <div className="row">
              <div className="booking-form">
                <form>
                  <div className="row no-margin">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <span className="form-label">Check In</span>
                        <input className="form-control" type="date" required />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <span className="form-label">Check Out</span>
                        <input className="form-control" type="date" required />
                      </div>
                    </div>
                  </div>
                  <div className="row no-margin">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <span className="form-label">Adults (18+)</span>
                        <select className="form-control">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                        </select>
                        <span className="select-arrow"></span>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <span className="form-label">Children (0-17)</span>
                        <select className="form-control">
                          <option>0</option>
                          <option>1</option>
                          <option>2</option>
                        </select>
                        <span className="select-arrow"></span>
                      </div>
                    </div>
                  </div>
                  {/* <div className="form-group">
                    <span className="form-label">Room Type</span>
                    <select className="form-control" required>
                      <option value="" selected hidden>
                        Select room type
                      </option>
                      <option>Private Room (1 to 2 People)</option>
                      <option>Family Room (1 to 4 People)</option>
                    </select>
                    <span className="select-arrow"></span>
                  </div> */}
                  <div className="form-group">
                    <span className="form-label">Email</span>
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="form-group">
                    <span className="form-label">Phone</span>
                    <input
                      className="form-control"
                      type="tel"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="form-btn">
                    <button className="submit-btn">Book Now</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentContainer;
