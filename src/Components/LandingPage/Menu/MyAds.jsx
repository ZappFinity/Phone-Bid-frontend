import React, {useState, useEffect} from "react";
import realme from "../../img/realme-c21.png";
import End from "../End";
import Navbar from "../Navbar";
import {Link} from 'react-router-dom'
import './Style.css'

function MyAds() {
  const [user, setUser] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const tokenData = localStorage.getItem("token");
        if (!tokenData) {
          return;
        }
        const token = JSON.parse(tokenData);

        const response = await fetch("http://127.0.0.1:8000/api/user", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        });


        if (response.ok) {
          const data = await response.json();
          setUser(data);
          const createdAtDate = data.created_at.split('T')[0]; // Get the substring before 'T'
          setUser({...data, created_at: createdAtDate});
        } else {
          console.error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);
  return (
    <>
    <Navbar />
    <div style={{ backgroundColor: "#e9ecef" }}>
        <div className="col-lg-11 pt-5 pb-5" >
          <div className="bg-white offset-1" style={{border: '1px solid lightgrey', borderRadius: '5px'}}>
            <div className="offset-1 pt-5 pb-5">
              <h4>{user.name}</h4>
              <p>Member Since {user.created_at}</p>
              <div className="d-flex flex-row gap-3">
              <Link to='/profile' style={{cursor: "pointer",color: "#52AB98", textDecoration: 'none'}}>Edite Profile</Link>
              <Link to='/changePass' style={{cursor: "pointer",color: "#52AB98", textDecoration: 'none'}}>Change Password</Link>
              </div>
            </div>
            <div
              class="btn-group col-lg-12"
              role="group"
              aria-label="Basic mixed styles example"
            >
              <Link to='/myads' type="button" 
              class="btn hov text-secondary"
              style={{border: '1px solid lightgrey', borderRadius: '0'}}
              >
                My Ads
              </Link>
              <Link to='/mysavedads' type="button" class="btn hov text-secondary" style={{border: '1px solid lightgrey'}}>
                My Saved Ads
              </Link>
              <Link to='/mymobile' type="button" class="btn hov text-secondary" style={{border: '1px solid lightgrey'}}>
                My Mobiles
              </Link>
              <Link to='/mymessage' type="button" class="btn hov text-secondary" style={{border: '1px solid lightgrey'}}>
                My Messages
              </Link>
              <Link to='/myorder' type="button" class="btn hov text-secondary" style={{border: '1px solid lightgrey', borderRadius: '0'}}>
                My Orders
              </Link>
            </div>
          </div>
        </div>
     
      <div className=" d-flex flex-row ">
        <div className="d-flex flex-column offset-1">
          <div className="bg-white mb-2">
          <button className="btn btn-outline-success" style={{borderRadius: '0', width: "13rem"}}>
            Active (1)
          </button>
          </div>
          <div className="bg-white mb-2">
          <button className="btn btn-outline-success" style={{borderRadius: '0', width: "13rem"}}>
            Pending (0)
          </button>
          </div>
        </div>
        <div className=" d-flex flex-column mb-4 pb-5">
          <div
            className=" pt-2 offset-2 pb-2 "
            style={{ width: "125%", height: "100%" }}
          >
            <div
              style={{ boxShadow: "0 5px 7px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="d-flex flex-row bg-white mb-3">
                <div>
                  <img src={realme} className="mt-3 mx-4 mb-3" style={{height: '11rem', width: '10rem'}} />
                </div>
                <div className="d-flex flex-column mt-3 mb-3">
                    <h5 className="">Realme C21 for Sale</h5>
                    <h5>24,000</h5>
                    <p className="card-text">Islamabad</p>
                    <p>2021</p>
                    <p>Last Updated: about 1 hour ago</p>
                </div>
                <div className="d-flex flex-column justify-content-between offset-2 pt-3 pb-2">
                  <h4>PKR 24,000</h4>
                  <button
                    className="btn mb-3 px-3"
                    style={{
                      cursor: "pointer",
                      backgroundColor: "#52AB98",
                      color: "white",
                      borderRadius: '0',
                       width: "9.5rem"
                    }}
                  >
                    Remove Ad
                  </button>
                </div>
              </div>
            </div>
            
          </div>

          <div
            className=" pt-2 offset-2 pb-2 "
            style={{ width: "125%", height: "100%" }}
          >
            <div
              style={{ boxShadow: "0 5px 7px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="d-flex flex-row bg-white mb-3">
                <div>
                  <img src={realme} className="mt-3 mx-4 mb-3" style={{height: '11rem', width: '10rem'}} />
                </div>
                <div className="d-flex flex-column mt-3 mb-3">
                    <h5 className="">Realme C21 for Sale</h5>
                    <h5>24,000</h5>
                    <p className="card-text">Islamabad</p>
                    <p>2021</p>
                    <p>Last Updated: about 1 hour ago</p>
                </div>
                <div className="d-flex flex-column justify-content-between offset-2 pt-3 pb-2">
                  <h4>PKR 24,000</h4>
                  <button
                    className="btn mb-3 px-3"
                    style={{
                      cursor: "pointer",
                      backgroundColor: "#52AB98",
                      color: "white",
                      borderRadius: '0',
                       width: "9.5rem"
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
