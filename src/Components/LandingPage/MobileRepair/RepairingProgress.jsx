import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import End from "../End";
import mobile from "../../img/phone-img.png";
import { Link } from "react-router-dom";

function RepairingPorgress() {
   const [mobilerepairing, setMobileRepairing] = useState(null);
  
    useEffect(() => {
      const fetchMobileData = async () => {
        const tokenData = localStorage.getItem("token");
        if (!tokenData) {
          alert("Login to see your bid mobile");
          return;
        }
        try {
          const token = JSON.parse(tokenData);
          let url = `http://127.0.0.1:8000/api/mobile-repairing/get`;
          const response = await fetch(url, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
          });
          const data = await response.json();
          console.log("Fetched data:", data);
          setMobileRepairing(data);
        } catch (error) {
          console.error("Error fetching mobile data:", error);
        }
      };
  
        fetchMobileData();
    }, []);
 
  return (
    <>
      <Navbar />

      <div style={{ backgroundColor: "#f2f3f3" }}>
        {mobilerepairing && mobilerepairing.data ? (
          <>
            <h2 className="offset-1 pt-5 pb-3" style={{ color: "#233d7b" }}>
             Mobile Repairing Status
            </h2>
            {mobilerepairing.data.map((mobile) => (
            <div className="d-flex flex-row p-4 gap-2 justify-content-center py-5">
              <div
                className="card col-lg-6 col-md-6 col-sm-3 py-5 px-3"
                style={{
                  boxShadow: "0px 5px 12px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="d-flex flex-row justify-content-around pt-2 px-4 gap-3">
                  <p>
                     <strong> Email</strong> {mobile.email}
                  </p>
                  <p>
                  <strong> Mobile Name</strong> {mobile.mobile_name}
                  </p>
                </div>
                <div className="d-flex flex-row justify-content-around pt-2 px-4 gap-3">
                  <p>
                  <strong>Device Type </strong> {mobile.device_type}
                  </p>
                  <p>
                  <strong>Reparing Status </strong> {mobile.status}
                  </p>
                </div>
                <div className="d-flex flex-row justify-content-between offset-1 pt-2 px-5">
                  <p>
                  <strong>Issue </strong> {mobile.issue}
                  </p>
                </div>
              </div>
            </div>
            ))}
           </>
        ): (
          
           <h2 className="offset-1 py-5" style={{ color: "#233d7b" }}>
           Have not submit any mobile for repairing
         </h2>
        )
}
      </div>

      <End />
    </>
  );
}

export default RepairingPorgress;
