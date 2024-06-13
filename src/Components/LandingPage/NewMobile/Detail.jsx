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
        let url = `http://127.0.0.1:8000/api/mobile/new/show/${detailId}`;
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
    navigate('/newmobilecheckout', {
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
            <div className="d-flex flex-row gap-5 bg-white pb-4">
              <div className="offset-4">
                <img src={mobiledetail.data.image} />
              </div>
              <div className="col mt-5">
                <h5>{mobiledetail.data.name}</h5>
                <p1>PhoneBid Price</p1>
                <p>
                  <b>{mobiledetail.data.price}</b>
                </p>
                <p1>Storage</p1>
                <p>
                  <b>{mobiledetail.data.internal_memory}</b>
                </p>
                <div  className="d-flex flex-row gap-3">
                    <button className="btn greenColor text-white px-4" onClick={handleCheckout}>
                      Checkout
                    </button>
                  <button className="btn text-white" style={{backgroundColor: "#518ecb",}} onClick={handleWhatsAppClick}>Contact on WhatsApp</button>
                </div>
              </div>
            </div>
            <div className="d-flex flex-row mt-5 pb-4">
              <div className="col offset-2">
                <div className="col-lg-8 bg-white p-4">
                  <h5>General Features</h5>
                  <table className="custom-table pt-2">
                    <tbody>
                      <tr>
                        <td>Release Date</td>
                        <td>{mobiledetail.data.release_date} </td>
                      </tr>
                      <tr>
                        <td>SIM Support</td>
                        <td>{mobiledetail.data.sim_support} </td>
                      </tr>
                      <tr>
                        <td>Phone Dimensions</td>
                        <td>{mobiledetail.data.phone_dimensions} </td>
                      </tr>
                      <tr>
                        <td>Phone Weight</td>
                        <td>{mobiledetail.data.phone_weight} </td>
                      </tr>
                      <tr>
                        <td>Operating System</td>
                        <td>{mobiledetail.data.operating_system} </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-lg-8 bg-white p-4 mt-3">
                  <h5>Display</h5>
                  <table className="custom-table pt-2">
                    <tbody>
                      <tr>
                        <td>Screen Size</td>
                        <td>{mobiledetail.data.screen_size} </td>
                      </tr>
                      <tr>
                        <td>Screen resolution</td>
                        <td>{mobiledetail.data.screen_resolution} </td>
                      </tr>
                      <tr>
                        <td>Screen Type</td>
                        <td>{mobiledetail.data.screen_type} </td>
                      </tr>
                      <tr>
                        <td>Screen Portection</td>
                        <td>{mobiledetail.data.screen_protection} </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-lg-8 bg-white p-4 mt-3">
                  <h5>Memory</h5>
                  <table className="custom-table pt-2">
                    <tbody>
                      <tr>
                        <td>Internal Memory</td>
                        <td>{mobiledetail.data.internal_memory} </td>
                      </tr>
                      <tr>
                        <td>RAM </td>
                        <td>{mobiledetail.data.ram} </td>
                      </tr>
                      <tr>
                        <td>Card Slot</td>
                        <td>{mobiledetail.data.card_slot} </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-lg-8 bg-white p-4 mt-3">
                  <h5>Performance</h5>
                  <table className="custom-table pt-2">
                    <tbody>
                      <tr>
                        <td>Processor</td>
                        <td>{mobiledetail.data.processor} </td>
                      </tr>
                      <tr>
                        <td>GPU</td>
                        <td>{mobiledetail.data.gpu} </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col">
              <div className="col-lg-9 bg-white p-4">
                  <h5>Battery</h5>
                  <table className="custom-table pt-2">
                    <tbody>
                      <tr>
                        <td>Battery</td>
                        <td>{mobiledetail.data.battery} </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-lg-9 bg-white p-4 mt-3">
                  <h5>Camera</h5>
                  <table className="custom-table pt-2">
                    <tbody>
                      <tr>
                        <td>Front Camera</td>
                        <td>{mobiledetail.data.front_camera} </td>
                      </tr>
                      <tr>
                        <td>Front Flash Light</td>
                        <td>{mobiledetail.data.front_flash} </td>
                      </tr>
                      <tr>
                        <td>Front Video Recording</td>
                        <td>{mobiledetail.data.front_video_recording} </td>
                      </tr>
                      <tr>
                        <td>Back Camera</td>
                        <td>{mobiledetail.data.back_camera} </td>
                      </tr>
                      <tr>
                        <td>Back Flash Light</td>
                        <td>{mobiledetail.data.back_flash} </td>
                      </tr>
                      <tr>
                        <td>Back Video Recording</td>
                        <td>{mobiledetail.data.back_video_recording} </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-lg-9 bg-white p-4 mt-3">
                  <h5>Connectivity</h5>
                  <table className="custom-table pt-2">
                    <tbody>
                      <tr>
                        <td>BlueTooth</td>
                        <td>{mobiledetail.data.bluetooth} </td>
                      </tr>
                      <tr>
                        <td>3G</td>
                        <td>{mobiledetail.data.three_G} </td>
                      </tr>
                      <tr>
                        <td>4G/LTE</td>
                        <td>{mobiledetail.data.four_G_LTE} </td>
                      </tr>
                      <tr>
                        <td>5G</td>
                        <td>{mobiledetail.data.five_G}</td>
                      </tr>
                      <tr>
                        <td>Radio</td>
                        <td>{mobiledetail.data.radio} </td>
                      </tr>
                      <tr>
                        <td>WiFi</td>
                        <td>{mobiledetail.data.wifi} </td>
                      </tr>
                      <tr>
                        <td>NFC</td>
                        <td>{mobiledetail.data.nfc} </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </>
        ) : (
          <p>Mobile not found</p>
        )}
      </div>
      <End />
    </>
  );
}

export default Detail;
