import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import End from "../End";
import { useParams, useNavigate } from "react-router-dom";

function Detail() {
  const { detailId } = useParams();
  const [mobiledetail, setMobileDetail] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMobileData = async () => {
      try {
        let url = `http://127.0.0.1:8000/api/accessories/show/${detailId}`;
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

    if (detailId) {
      fetchMobileData();
    } else {
      setMobileDetail(null);
    }
  }, [detailId]);

  const handleWhatsAppClick = () => {
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleCheckout = () => {
    navigate('/accessoriescheckout', {
      state: {
        name: mobiledetail.data.name,
        image: mobiledetail.data.image,
        price: mobiledetail.data.price,
      },
    });
  };

  return (
    <>
      <Navbar />
      <div className="greyColor">
        {mobiledetail && mobiledetail.data ? (
          <>
            <div className="d-flex flex-row bg-white pb-4">
              <div className="offset-3 pt-4">
                <img src={mobiledetail.data.image} className="col-sm-5"/>
              </div>
              <div className="col mt-5">
                <h5>{mobiledetail.data.name}</h5>
                <p1>PhoneBid Price</p1>
                <p>
                  <b>{mobiledetail.data.price}</b>
                </p>
                <p1>Brand</p1>
                <p>
                  <b>{mobiledetail.data.brand}</b>
                </p>
                <p>{mobiledetail.data.type}</p>
                <p>{mobiledetail.data.descrition}</p>
                <div  className="d-flex flex-row gap-3">
                    <button className="btn greenColor text-white px-4" onClick={handleCheckout}>
                      Checkout
                    </button>
                  <button className="btn text-white" style={{backgroundColor: "#518ecb",}} onClick={handleWhatsAppClick}>Contact on WhatsApp</button>
                </div>
              </div>
            </div>
           
          </>
        ) : (
          <p></p>
        )}
      </div>
      <End />
    </>
  );
}

export default Detail;