import React from "react";
import { Slider, Vmv, CompanyServices } from "../../Components";
import { Link } from "react-router-dom";
import ourCompany from "../../assets/images/ourCompany.svg";

const Home = () => {
  return (
    <div>
      <Slider />

      <section className="border-top section mb-5 section-page-height d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center">
              <div className="main-heading">
                <h1>Our Company</h1>
                <div className="underline mx-auto mb-3"></div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda cum aliquam, in non libero dicta pariatur quas
                  dolore temporibus nihil dolores incidunt neque, consequatur
                  aspernatur molestias expedita ratione possimus! Aspernatur.
                </p>
                <Link to="about" className="btn btn-info shadow">
                  Read more
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src={ourCompany}
                alt="our company"
                loading="lazy"
                className="w-100"
              />
            </div>
          </div>
        </div>
      </section>

      {/* VMV */}
      <Vmv />

      {/* SERVICES */}
      <CompanyServices />
    </div>
  );
};

export default Home;
