import React from "react";

const ContactUs = () => {
  return (
    <div>
      <section className=" p-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h4>Contact Us</h4>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container my-5 ">
          <div className="card shadow">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <h6>Contact us</h6>
                  <hr />

                  <div className="form-group">
                    <label htmlFor="fullName" className="mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full name"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phoneNumber" className="mb-1">
                      Phone Number
                    </label>
                    <input
                      type="number"
                      name="phoneNumber"
                      placeholder="Phone Number"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message" className="mb-1">
                      Message
                    </label>
                    <textarea
                      type="textare"
                      name="message"
                      placeholder="Enter your message"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group py-3">
                    <button
                      type="button"
                      className="btn btn-warning shadow w-100"
                    >
                      Send
                    </button>
                  </div>
                </div>

                <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center">
                  <h5 className="main-heading">Address Information</h5>
                  <div className="underline mt-3 mb-3"></div>
                  <p>#412 ,Charleston, United States - 42115, USA</p>
                  <p>Phone: +01 4213 3123 12</p>
                  <p>Email: email@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
