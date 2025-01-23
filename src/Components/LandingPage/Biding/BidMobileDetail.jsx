import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import End from "../End";
import mobile from "../../img/phone-img.png";
import BidMobileTable from "./BidMobileTable";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function BidMobileDetail() {
  const { bidMobileDetailId } = useParams();
  console.log("bid id", bidMobileDetailId);
  const [mobiledetail, setMobileDetail] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMobileData = async () => {
      try {
        let url = `http://127.0.0.1:8000/api/bid/mobile/${bidMobileDetailId}`;
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

    if (bidMobileDetailId) {
      fetchMobileData();
    } else {
      setMobileDetail(null);
    }
  }, [bidMobileDetailId]);

  return (
    <>
      <Navbar />

      <div style={{ backgroundColor: "#f2f3f3" }}>
        {mobiledetail && mobiledetail.data ? (
          <>
            <h2 className="offset-1 pt-5 pb-3" style={{ color: "#233d7b" }}>
              {mobiledetail.data.name}
            </h2>
            <div className="d-flex flex-row justify-content-center">
              <img
                src={mobiledetail.data.image}
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
                    Time <b>Left 1 Day</b>
                  </p>
                  <p>
                    High Bid <b>49,600</b>
                  </p>
                  <p>
                    Bids <b>16</b>
                  </p>
                </div>
              </div>
              <Link
                to={`/placemobilebid/${mobiledetail.data.id}`}
                className="text-decoration-none text-black"
              >
                <button
                  className="btn px-4 "
                  style={{
                    backgroundColor: "#52AB98",
                    color: "white",
                    paddingBottom: ".75rem",
                    paddingTop: ".70rem",
                  }}
                >
                  Place Bid
                </button>
              </Link>
            </div>
            {/* <BidMobileTable/> */}
            <div className="d-flex flex-row mt-5 pb-4">
              <div className="col offset-lg-2">
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

            <div className="d-flex flex-row p-4 gap-2 justify-content-center">
              <div
                className="card col-lg-8 col-md-8 col-sm-4  p-4"
                style={{
                  boxShadow: "0px 5px 12px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                <h5>PhoneBid's Take</h5>
                <p>
                  PhoneBid’s Take The {mobiledetail.data.name} is a well-rounded
                  mid-range smartphone offering excellent value with its sleek
                  design, vibrant {mobiledetail.data.screen_size} display, and
                  capable performance powered by a MediaTek processor and{" "}
                  {mobiledetail.data.ram} of RAM. Its{" "}
                  {mobiledetail.data.back_camera} main camera, accompanied by
                  ultra-wide and macro lenses, captures detailed photos, while
                  the {mobiledetail.data.front_camera} front camera excels in
                  selfies. Battery life is impressive, with a{" "}
                  {mobiledetail.data.battery} capacity and 33W fast charging.
                  Running on HiOS based on Android 12, it provides a
                  customizable user experience, though with some pre-installed
                  bloatware. Overall, the {mobiledetail.data.name} stands out
                  for its display, camera versatility, performance, and battery
                  life, making it a compelling choice in the mid-range segment.
                </p>
              </div>
            </div>

            <div className="d-flex flex-row p-4 gap-2 justify-content-center">
              <div
                className="card col-lg-8 col-md-8 col-sm-4"
                style={{
                  boxShadow: "0px 5px 12px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="d-flex flex-row justify-content-between px-5 gap-3">
                  <div className="d-flex flex-column justify-content-center">
                    <h3>Current Bid</h3>
                    <h2>Rs {mobiledetail.data.bid_starting_price}</h2>
                  </div>
                  <div className="d-flex flex-column py-3">
                    <p>
                      Seller <b>Waqar</b>
                    </p>
                    <p>
                      Ending <b>June 27 10:00 PM </b>
                    </p>
                    <p>
                      Bids <b>16</b>
                    </p>
                    <p>
                      Views <b>1200</b>
                    </p>
                  </div>
                  <div className="d-flex flex-column justify-content-center">
                    <p>Place your bid and make this device yours</p>
                    <Link
                      to={`/placemobilebid/${mobiledetail.data.id}`}
                      className="text-decoration-none text-black"
                    >
                      <button
                        className="btn px-4"
                        style={{
                          backgroundColor: "#52AB98",
                          color: "white",
                        }}
                      >
                        Place Bid
                      </button>
                    </Link>
                  </div>
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

export default BidMobileDetail;
