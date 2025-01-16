import React from "react";
import Navbar from "../Navbar";
import End from "../End";
import mobileimg from "../../img/phone-img2.png";
import "./Style.css";
import { Link } from "react-router-dom";

function MobileRepair() {
  return (
    <>
      <Navbar />
      <div className="greyColor">
        <div className="d-flex flex-row justify-content-center p-5">
          <div
            className="d-flex flex-row card col-12 col-md-8"
            style={{
              boxShadow: "0px 5px 12px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "1.5rem",
            }}
          >
            {/* Left Content */}
            <div className="col-12 col-md-8" style={{ paddingTop: "5rem" }}>
              <h1
                style={{
                  color: "#2b6777",
                  paddingLeft: "3rem",
                  paddingRight: "3rem",
                }}
              >
                Fast, Affordable and Reliable Repairs
              </h1>
              <p className="text-secondary" style={{ paddingLeft: "3rem" }}>
                for your mobile devices
              </p>
              <div className="d-flex flex-row justify-content-center">
                <Link to="/mobiletype">
                  <button
                    className="btn px-5"
                    style={{
                      backgroundColor: "#52AB98",
                      color: "white",
                      marginTop: "3rem",
                      marginBottom: "2rem",
                    }}
                  >
                    Book a Repair
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="d-none d-md-block col-md-5">
              <img
                src={mobileimg}
                alt="Mobile repair"
                style={{
                  width: "100%",
                  height: "100%",
                  borderTopRightRadius: "1.5rem",
                  borderBottomRightRadius: "1.5rem",
                }}
              />
            </div>
          </div>
        </div>

        <div className="container my-5">
          <div className="row justify-content-center g-5">
            {/* Card 1 */}
            <div className="col-8 col-md-6 col-lg-4 ">
              <div
                className="card card-custom"
                style={{
                  boxShadow: "0px 5px 12px 8px rgba(0, 0, 0, 0.1)",
                  borderRadius: "1.5rem",
                }}
              >
                <div className="card-body d-flex flex-column">
                  <div className="d-flex flex-row justify-content-center">
                    <img
                      className="mb-2"
                      src={mobileimg}
                      style={{ width: "4.5rem", height: "8rem" }}
                      alt="Trusted Professionals"
                    />
                  </div>
                  <p className="fw-bold text-center grey">
                    Trusted Professionals
                  </p>
                  <p className="text-secondary text-center">
                    Rely on our team of professional technicians. We have a vast
                    network of experts ready to assist you.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-8 col-md-6 col-lg-4">
              <div
                className="card card-custom"
                style={{
                  boxShadow: "0px 5px 12px 8px rgba(0, 0, 0, 0.1)",
                  borderRadius: "1.5rem",
                }}
              >
                <div className="card-body d-flex flex-column">
                  <div className="d-flex flex-row justify-content-center">
                    <img
                      className="mb-2"
                      src={mobileimg}
                      style={{ width: "4.5rem", height: "8rem" }}
                      alt="Quick Turnaround"
                    />
                  </div>
                  <p className="fw-bold text-center grey">Quick Turnaround</p>
                  <p className="text-secondary text-center">
                    We aim to return your device as swiftly as possible, often
                    completing repairs in 30 minutes or less.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-8 col-md-6 col-lg-4">
              <div
                className="card card-custom"
                style={{
                  boxShadow: "0px 5px 12px 8px rgba(0, 0, 0, 0.1)",
                  borderRadius: "1.5rem",
                }}
              >
                <div className="card-body d-flex flex-column">
                  <div className="d-flex flex-row justify-content-center">
                    <img
                      className="mb-2"
                      src={mobileimg}
                      style={{ width: "4.5rem", height: "8rem" }}
                      alt="Free Diagnostics"
                    />
                  </div>
                  <p className="fw-bold text-center grey">Free Diagnostics</p>
                  <p className="text-secondary text-center">
                    Unsure about the issue with your device? Don't worry, we
                    offer a complimentary diagnosis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1
            className="text-center"
            style={{
              color: "#2b6777",
            }}
          >
            All Kind Of Repairs. For Real
          </h1>
        </div>

        <div className="container my-5">
          <div className="row justify-content-center g-4">
            {/* Card 1 */}
            <div className="col-8 col-sm-8 col-md-6 col-lg-4">
              <div
                className="card card-custom h-100"
                style={{
                  boxShadow: "0px 5px 12px 8px rgba(0, 0, 0, 0.1)",
                  borderRadius: "1.5rem",
                }}
              >
                <div className="card-body d-flex flex-column">
                  <div className="d-flex flex-row justify-content-center">
                    <img
                      className="mb-3"
                      src={mobileimg}
                      style={{ width: "4.5rem", height: "8rem" }}
                      alt="iPhone"
                    />
                  </div>
                  <p className="fw-bold grey text-center">iPhone</p>
                  <p className="text-secondary text-center">
                    Cracked screens, water damage, battery problems, and more.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-8 col-sm-8 col-md-6 col-lg-4">
              <div
                className="card card-custom h-100"
                style={{
                  boxShadow: "0px 5px 12px 8px rgba(0, 0, 0, 0.1)",
                  borderRadius: "1.5rem",
                }}
              >
                <div className="card-body d-flex flex-column">
                  <div className="d-flex flex-row justify-content-center">
                    <img
                      className="mb-3"
                      src={mobileimg}
                      style={{ width: "4.5rem", height: "8rem" }}
                      alt="Quick Turnaround"
                    />
                  </div>
                  <p className="fw-bold grey text-center">Quick Turnaround</p>
                  <p className="text-secondary text-center">
                    We aim to return your device as swiftly as possible, often
                    completing repairs in 30 minutes or less.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-8 col-sm-8 col-md-6 col-lg-4">
              <div
                className="card card-custom h-100"
                style={{
                  boxShadow: "0px 5px 12px 8px rgba(0, 0, 0, 0.1)",
                  borderRadius: "1.5rem",
                }}
              >
                <div className="card-body d-flex flex-column">
                  <div className="d-flex flex-row justify-content-center">
                    <img
                      className="mb-3"
                      src={mobileimg}
                      style={{ width: "4.5rem", height: "8rem" }}
                      alt="iPad"
                    />
                  </div>
                  <p className="fw-bold grey text-center">iPad</p>
                  <p className="text-secondary text-center">
                    Cracked screens, battery problems, and software issues.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-8 col-sm-8 col-md-6 col-lg-4">
              <div
                className="card card-custom h-100"
                style={{
                  boxShadow: "0px 5px 12px 8px rgba(0, 0, 0, 0.1)",
                  borderRadius: "1.5rem",
                }}
              >
                <div className="card-body d-flex flex-column">
                  <div className="d-flex flex-row justify-content-center">
                    <img
                      className="mb-3"
                      src={mobileimg}
                      style={{ width: "4.5rem", height: "8rem" }}
                      alt="Android"
                    />
                  </div>
                  <p className="fw-bold grey text-center">Android</p>
                  <p className="text-secondary text-center">
                    We can do complex repairs like motherboard replacements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-5">
          <div className="row justify-content-center">
            <div
              className="card col-11 col-md-8 col-lg-7"
              style={{
                boxShadow: "0px 5px 12px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "1.5rem",
              }}
            >
              <div className="text-center p-4 p-md-5">
                <h1
                  style={{
                    color: "#555555",
                    paddingLeft: "1.5rem",
                    paddingRight: "1.5rem",
                  }}
                >
                  Get Your Mobile Device Repair Today!
                </h1>
                <p className="fw-bold grey mt-3">Android</p>
                <p className="text-secondary">
                  We can do complex repairs like motherboard replacements.
                </p>
                <Link to="/mobiletype">
                  <button
                    className="btn px-5 mt-3"
                    style={{
                      backgroundColor: "#52AB98",
                      color: "white",
                    }}
                  >
                    Book a Repair
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <End />
    </>
  );
}

export default MobileRepair;
