import React, {useState, useEffect} from "react";
import Navbar from "../Navbar";
import End from "../End";
import mobile from "../../img/phone-img.png";
import { useParams, useNavigate } from "react-router-dom";

function PlaceMobileBid() {
  const { bidId } = useParams();
  console.log('bid id', bidId);
  const [mobiledetail, setMobileDetail] = useState(null);
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState('')
  const [bid_price, setBidPrice] = useState('')
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMobileData = async () => {
      try {
        let url = `http://127.0.0.1:8000/api/bid/mobile/${bidId}`;
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        const data = await response.json();
        console.log("Fetched data:", data);
        setMobileDetail(data);
      } catch (error) {
        console.error("Error fetching mobile data:", error);
      }
    };

    if (bidId) {
      fetchMobileData();
    } else {
      setMobileDetail(null);
    }
  }, [bidId]);


  const handleSubmit = async (e) => {
    e.preventDefault();

    // if(!mobile_name || !issue || !phone || !email){
    //   setWarning("Field Required");
    //   return;
    // }

    try {
      let item = { phone, email, bid_price };
      const tokenData = localStorage.getItem("token");
      if (!tokenData) {
        return;
      }
      const token = JSON.parse(tokenData);
      let url = `http://127.0.0.1:8000/api/bid/place/${bidId}`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(item),
      });

      const result = await response.json();
      if (result.success === true) {
        console.log(result);
        alert("Booking Successfully");
        window.location.reload();
        navigate('/bidsuccess')
      } else {
        alert("Booking Failed");
      }
      console.log("Post successful:", result);

      setPhone("");
      setEmail("");
      setBidPrice("");
    } catch (error) {
      console.error("Error fetching booking data:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: "#f2f3f3" }}>
      {mobiledetail && mobiledetail.data ? (
        <>
        <h2 className="offset-1 pt-5 pb-3" style={{ color: "#233d7b" }}>
        {mobiledetail.data.name}
        </h2>
        <div className="d-flex flex-lg-row flex-md-column   justify-content-center align-items-center mb-5 gap-4">
          <div>
            <img src={mobiledetail.data.image} style={{ width: "auto", height: "auto" }} />
          </div>

          <div className="px-4">
            <div
              className="card col-lg-auto col-sm-12"
              style={{
                boxShadow: "0px 5px 12px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="d-flex flex-column p-5 ">
                <div className="d-flex flex-column justify-content-center px-5">
                  <h3 className="px-5">Current Bid</h3>
                  <h1 className="px-5">Rs {mobiledetail.data.bid_starting_price}</h1>
                </div>
                <div className="d-flex flex-column py-3 px-5">
                  <p className="px-5">
                    Seller <b>Waqar</b>
                  </p>
                  <p className="px-5">
                    Ending <b>June 27 10:00 PM </b>
                  </p>
                  <p className="px-5">
                    Bids <b>16</b>
                  </p>
                  <p className="px-5">
                    Views <b>1200</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
      ) : (
          <p>Mobile not found</p>
        )}

        <div className="d-flex flex-row justify-content-center pb-5">
          <div
            className="card col-lg-6 col-md-6 col-sm-12"
            style={{
              boxShadow: "0px 5px 12px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="d-flex flex-column p-5 gap-3">
              <div className="col-lg-8 col-sm-12 mx-auto mb-3">
                <label className="pb-2">Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="03316735449"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                {/* {warning && !mobile_name && <p style={{ color: 'red' }}>Mobile Name Required </p>} */}
              </div>
              <div className="col-lg-8 col-sm-12 mx-auto mb-3">
                <label className="pb-2">Email</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="name@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {/* {warning && !mobile_name && <p style={{ color: 'red' }}>Mobile Name Required </p>} */}
              </div>
              <div className="col-lg-8 col-sm-12 mx-auto mb-3">
                <label className="pb-2">Bid Price</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="46,900"
                    value={bid_price}
                    onChange={(e) => setBidPrice(e.target.value)}
                />
                {/* {warning && !mobile_name && <p style={{ color: 'red' }}>Mobile Name Required </p>} */}
              </div>
              <div className="mx-auto mb-3">
                <button
                type='submit'
                  className="btn px-5"
                  style={{
                    backgroundColor: "#52AB98",
                    color: "white",
                  }}
                  onClick={handleSubmit}
                >
                  Place Bid
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <End />
    </>
  );
}

export default PlaceMobileBid;
