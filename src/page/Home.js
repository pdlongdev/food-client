import React from "react";
import Welcome from "../components/Welcome";
import Food from "../components/Food";

const Home = () => {
  return (
    <div className="container-fruid">
      <div className="container">
        <Welcome />
      </div>
      {/* Show */}
      <div className="introduce mt-5 p-5">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-6">
              <div className="card">
                <div className="card-header">
                  <h5>Món Ngon</h5>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-6">sahjj</div>
                    <div className="col-6  d-flex justify-content-center  align-items-center">
                      <button className="btn btn-primary mx-auto">
                        Xem them
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Show List Recipe */}
      <div className="container">
        <Food />
      </div>
    </div>
  );
};
export default Home;
