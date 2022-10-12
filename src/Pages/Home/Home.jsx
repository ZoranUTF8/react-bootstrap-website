import React from "react";
import { Slider } from "../../Components";

const Home = () => {
  return (
    <div className="container">
      <div className="card mt-3">
        <div className="card-body">
          <div className="card-title">
            <h1>Home page</h1>
            <Slider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
