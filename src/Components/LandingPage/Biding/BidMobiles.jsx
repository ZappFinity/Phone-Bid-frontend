import React, { useState, useEffect } from "react";
import mobile from "../../img/xiaomi-14.svg";
import Navbar from "../Navbar";
import End from "../End";
import { Link } from "react-router-dom";
import { Button } from "bootstrap";

function BidMobiles() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/bid/mobile/list",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );

        if (response.ok) {
          const responseData = await response.json();
          console.log(responseData);
          setData(responseData.data || []);
        } else {
          console.error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const user = localStorage.getItem("user");
  const parsedUser = JSON.parse(user);

  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: "#f2f3f3" }}>
        <div className="d-flex flex-row justify-content-between">
          <h2 className="offset-1 mt-4 mb-3" style={{ color: "#233d7b" }}>
            Bid On Mobiles From Anywhere In Pakistan
          </h2>
          <Link to="/userbidmobile" className="text-decoration-none text-black">
            <button
              className="btn px-4 me-5 mt-4 mb-3"
              style={{
                backgroundColor: "#52AB98",
                color: "white",
              }}
            >
              Bid Mobile
            </button>
          </Link>
        </div>

        <div className="container mt-3 pb-5">
          <div className="row row-cols-2 row-cols-md-3 mx-0 py-auto">
            {data.map((bidMobile) => (
              <div
                className="col mb-4"
                key={bidMobile.id}
                // onClick={() => handleMobileDetail(mobile)}
              >
                <div
                  className="card"
                  style={{
                    boxShadow: "0px 5px 12px 8px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <div className="card-body d-flex flex-column justify-content-center align-item-center">
                    <div className="d-flex flex-row justify-content-center">
                      <img
                        src={bidMobile.image}
                        // src={bidMobile}
                        style={{ width: "4.5rem", height: "8rem" }}
                      />
                    </div>
                    {/* <Link to={`/newmobiledetail/${mobile.id}`} className="text-decoration-none text-black"> */}
                    <p className="card-title mt-2 mb-2">{bidMobile.name}</p>
                    <p className="card-title mt-2 mb-2">No Faults</p>
                    <p className="card-title mt-2 mb-2">Islamabad</p>
                    <div className="d-flex flex-row justify-content-between">
                      <p className="card-title mt-2 mb-2">
                        Total Bid <b>{bidMobile.bid_starting_price}</b>
                      </p>

                      <p className="card-title mt-2 mb-2">Highest Bid</p>
                    </div>
                    {bidMobile.ad_poster_id === parsedUser.user.id ? (
                      <p></p>
                    ) : (
                      <Link
                        to={`/bidmobiledetail/${bidMobile.id}`}
                        className="text-decoration-none text-black"
                      >
                        <button
                          className="btn px-4"
                          style={{
                            backgroundColor: "#52AB98",
                            color: "white",
                          }}
                        >
                          View Bid
                        </button>
                      </Link>
                    )}
                    {/* </Link> */}
                    <p>{/* <b>{mobile.price}</b> */}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <End />
    </>
  );
}

export default BidMobiles;
