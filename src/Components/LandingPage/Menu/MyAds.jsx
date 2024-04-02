import React from "react";
import realme from "../../img/realme-c21.png";
import End from "../End";
import Navbar from "../Navbar";
import {Link} from 'react-router-dom'
function MyAds() {
  return (
    <>
    <Navbar />
    <div style={{ backgroundColor: "#e9ecef" }}>
        <div className="col-lg-11 pt-5 pb-5">
          <div className="bg-white offset-1">
            <div className="offset-1 pt-5 pb-5">
              <h4>johndoe81</h4>
              <p>Member Since Mar 12, 2024</p>
              <p>Edite Profile</p>
              <p>Change Password</p>
            </div>
            <div
              class="btn-group col-lg-12"
              role="group"
              aria-label="Basic mixed styles example"
            >
              <Link to='/myads' type="button" class="btn text-secondary" style={{border: '1px solid lightgrey', borderRadius: '0'}}>
                My Ads
              </Link>
              <Link to='/mysavedads' type="button" class="btn text-secondary" style={{border: '1px solid lightgrey'}}>
                My Saved Ads
              </Link>
              <Link to='/mymobile' type="button" class="btn text-secondary" style={{border: '1px solid lightgrey'}}>
                My Mobiles
              </Link>
              <Link to='/mymessage' type="button" class="btn text-secondary" style={{border: '1px solid lightgrey'}}>
                My Messages
              </Link>
              <Link to='/myorder' type="button" class="btn text-secondary" style={{border: '1px solid lightgrey', borderRadius: '0'}}>
                My Orders
              </Link>
            </div>
          </div>
        </div>
     
      <div className=" d-flex flex-row mx-5">
        <div className="d-flex flex-column offset-1">
          <button className="btn btn-outline-success bg-white mb-2">
            Active (1)
          </button>
          <button className="btn btn-outline-success bg-white">
            Pending (0)
          </button>
        </div>
        <div className=" d-flex flex-column mb-4 pb-5">
          <div
            className="bg-white pt-3 offset-3 pb-2"
            style={{ width: "100%", height: "100%" }}
          >
            <div
              className=" mx-4 "
              style={{ boxShadow: "0 5px 7px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="d-flex flex-row justify-content-center card mb-3">
                <div>
                  <img src={realme} className="col-sm-12" />
                </div>
                <div className="col-sm-9">
                  <div className="card-body">
                    <h5 className="card-title">Realme C21 for Sale</h5>
                    <h5>24,000</h5>
                    <p className="card-text">Islamabad</p>
                    <p>2021</p>
                    <p>Last Updated: about 1 hour ago</p>
                  </div>

                  <button
                    className="btn mb-3"
                    style={{
                      cursor: "pointer",
                      backgroundColor: "#52AB98",
                      color: "white",
                    }}
                  >
                    Remove Ad
                  </button>
                </div>
              </div>
            </div>
            
          </div>

          <div
            className="bg-white pt-3 offset-3 pb-2"
            style={{ width: "100%", height: "100%" }}
          >
            <div
              className=" mx-4 "
              style={{ boxShadow: "0 5px 7px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="d-flex flex-row justify-content-center card mb-3">
                <div>
                  <img src={realme} className="col-sm-12" />
                </div>
                <div className="col-sm-9">
                  <div className="card-body">
                    <h5 className="card-title">Realme C21 for Sale</h5>
                    <h5>24,000</h5>
                    <p className="card-text">Islamabad</p>
                    <p>2021</p>
                    <p>Last Updated: about 1 hour ago</p>
                  </div>

                  <button
                    className="btn mb-3"
                    style={{
                      cursor: "pointer",
                      backgroundColor: "#52AB98",
                      color: "white",
                    }}
                  >
                    Remove Ad
                  </button>
                </div>
              </div>
            </div>
            
          </div>
          
        </div>
      </div>
      </div>
      <End/>
    </>
  );
}

export default MyAds;
