import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import End from "../End";
import mobile from "../../img/phone-img.png";
import BidMobileTable from "./BidMobileTable";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function UserBidMobile() {
  const [mobiledetail, setMobileDetail] = useState(null);

  useEffect(() => {
    const fetchMobileData = async () => {
      const tokenData = localStorage.getItem("token");
      if (!tokenData) {
        alert("Login to see your bid mobile");
        return;
      }
      try {
        const token = JSON.parse(tokenData);
        let url = `http://127.0.0.1:8000/api/bid/users_mobile`;
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        console.log("Fetched data:", data);
        setMobileDetail(data);
      } catch (error) {
        console.error("Error fetching mobile data:", error);
      }
    };

      fetchMobileData();
  }, []);
   
  

  const handleDelete = async (id) => {
    const tokenData = localStorage.getItem("token");
    if (!tokenData) {
      alert("Please login to delete a mobile bid.");
      return;
    }
  
    try {
      const url = `http://127.0.0.1:8000/api/mobile/destroy/${id}`;
      const response = await fetch(url, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.info(response.status == true);
      // Check if response is empty or not
      if (response.status == true) {
        console.log("Mobile deleted successfully!");
        setMobileDetail((prev) => ({
          ...prev,
          data: prev.data.filter((mobile) => mobile.id !== id),
        }));
        alert(response.message);
        return;
      }else {
        alert(response.message);
      }
  
    } catch (error) {
      alert("An error occurred while deleting the mobile.", error);
    }
  };
 

  return (
    <>
      <Navbar />

      <div style={{ backgroundColor: "#f2f3f3" }}>
        {mobiledetail && mobiledetail.data  && mobiledetail.data.length > 0 ? (
          <div>
          {mobiledetail.data.map((mobile) => (
            <div key={mobile.id}>
            <div className="d-flex flex-row justify-content-center pt-5">
              <img
                src={mobile.image}
                style={{ width: "auto", height: "auto" }}
              />
            </div>
            <div className="d-flex flex-row p-4 gap-2 justify-content-center">
              <div
                className="card col-lg-5 col-md-6 col-sm-3"
                style={{
                  boxShadow: "0px 5px 12px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="d-flex flex-row justify-content-between pt-2 px-4 gap-3">
                  <p>
                  {mobile.name} 
                  </p>
                  <p>
                  {mobile.bid_starting_price} 
                  </p>
                  
                </div>
              </div>
                <button
                  className="btn px-4 "
                  style={{
                    backgroundColor: "#52AB98",
                    color: "white",
                    paddingBottom: ".75rem",
                    paddingTop: ".70rem",
                  }}
                  onClick={() => handleDelete(mobile.id)}
                >
                   Delete Bid
                </button>
            </div>
        <div className="d-flex flex-row p-4 gap-2 justify-content-center">
          <div className="col-lg-9 bg-white p-5">
            <h5 className="mb-4">Bids Placed Till Now</h5>
                {mobile.bids && mobile.bids.length > 0 ? (
            <table className="custom-table pt-2">
              <tbody>
                <tr>
                  <td className="fw-bold">Email</td>
                  <td className="fw-bold">Contact Number</td>
                  <td className="fw-bold">Bid Price</td>
                </tr>
                  {mobile.bids.map((mobile) => (
                <tr>
                  <td>{mobile.email}</td>
                  <td>{mobile.phone} </td>
                  <td>{mobile.bid_price} </td>
                </tr>
                  ))}
              </tbody>
            </table>
                ): (
                  <div>No mobile placed for bid </div>
                )
}
          </div>
        </div>
        </div>
         ))}
         </div>
        ) : (
          <p> No mobile placed for bid</p>
        )}

      </div>

      <End />
    </>
  );
}

export default UserBidMobile;
