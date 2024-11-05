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
          className="d-flex flex-row card col-sm-8"
          style={{
            boxShadow: "0px 5px 12px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "1.5rem",
          }}
        >
          <div className="col-sm-7" style={{ paddingTop: "8rem" }}>
            <h1
              style={{
                color: "#2b6777",
                paddingLeft: "3rem",
                paddingRight: "3rem",
              }}
            >
              Fast, Affordable an reliable repairs
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
                marginTop: "4rem",
              }}
              
              >
              Book a Repair
            </button>
            </Link>
                </div>
          </div>
          <div>
            <img
              src={mobileimg}
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
        <div className="d-flex flex-row justify-content-center gap-5">
          <div
            className="card card-custom"
            style={{
              boxShadow: "0px 5px 12px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "1.5rem",
            }}
          >
            <div className="card-body d-flex flex-column ">
              <div className="d-flex flex-row justify-content-center ">
                <img
                  className="mb-2 "
                  src={mobileimg}
                  style={{ width: "4.5rem", height: "8rem" }}
                />
              </div>
              <p className="fw-bold text-center grey">Trusted Professionals</p>
              <p className="text-secondary">
                Rely on our team of professional technicians,. We have a vast
                network of experts ready to assist you
              </p>
            </div>
          </div>
          <div
            className="card card-custom"
            style={{
              boxShadow: "0px 5px 12px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "1.5rem",
            }}
          >
            <div className="card-body d-flex flex-column justify-content-center align-item-center">
              <div className="d-flex flex-row justify-content-center ">
                <img
                  className="mb-2 "
                  src={mobileimg}
                  style={{ width: "4.5rem", height: "8rem" }}
                />
              </div>
              <p className="fw-bold text-center grey">Quick Turnaround</p>
              <p className="text-secondary">
                We aim to return your device as swiftly as possible, often
                completing repairs in 30 minutes or less.
              </p>
            </div>
          </div>
          <div
            className="card card-custom"
            style={{
              boxShadow: "0px 5px 12px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "1.5rem",
            }}
          >
            <div className="card-body d-flex flex-column justify-content-center align-item-center">
              <div className="d-flex flex-row justify-content-center ">
                <img
                  className="mb-2 "
                  src={mobileimg}
                  style={{ width: "4.5rem", height: "8rem" }}
                />
              </div>
              <p className="fw-bold text-center grey">Free Diagnostics</p>
              <p className="text-secondary" >
                Unsure about the issue with your device? Don't worry, we offer a
                complimentary diagnosis.
              </p>
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
        <div className="d-flex flex-row justify-content-center gap-5">
          <div
            className="card card-custom"
            style={{
              boxShadow: "0px 5px 12px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "1.5rem",
            }}
          >
            <div className="card-body d-flex flex-column ps-4">
              <div >
                <img
                  className="mb-2 "
                  src={mobileimg}
                  style={{ width: "4.5rem", height: "8rem" }}
                />
              </div>
              <p className="fw-bold grey">iPhone</p>
              <p className="text-secondary">Cracked screens, water damaged, battery problems,and more.</p>
            </div>
          </div>
          <div
            className="card card-custom"
            style={{
              boxShadow: "0px 5px 12px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "1.5rem",
            }}
          >
            <div className="card-body d-flex flex-column ps-4">
              <div >
                <img
                  className="mb-2 "
                  src={mobileimg}
                  style={{ width: "4.5rem", height: "8rem" }}
                />
              </div>
              <p className="fw-bold grey">iPad</p>
              <p className="text-secondary">Cracked screens, battery problems and software issues.</p>
            </div>
          </div>
          <div
            className="card card-custom"
            style={{
              boxShadow: "0px 5px 12px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "1.5rem",
            }}
          >
            <div className="card-body d-flex flex-column ps-4">
              <div>
                <img
                  className="mb-2 "
                  src={mobileimg}
                  style={{ width: "4.5rem", height: "8rem" }}
                />
              </div>
              <p className="fw-bold grey">Android</p>
              <p className="text-secondary">We can do complex repairs like motherboard replacements.</p>
            </div>
          </div>
          <div
            className="card card-custom"
            style={{
              boxShadow: "0px 5px 12px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "1.5rem",
            }}
          >
            <div className="card-body d-flex flex-column ps-4">
              <div >
                <img
                  className="mb-2 "
                  src={mobileimg}
                  style={{ width: "4.5rem", height: "8rem" }}
                />
              </div>
              <p className="fw-bold grey">Tablets</p>
              <p className="text-secondary">Fast and cost effective solutions for all kinds of tablets.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex flex-row justify-content-center p-5">
        <div
          className="card col-7"
          style={{
            boxShadow: "0px 5px 12px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "1.5rem",
          }}
        >
          <div className="text-center p-5" >
            <h1
              style={{
                color: "#555555",
                paddingLeft: "3rem",
                paddingRight: "3rem",
              }}
            >
              Get Your Mobile Device Repair Today!
            </h1>
            <p className="text-secondary pt-3" style={{ paddingLeft: "3rem" }}>
              We use only the highest quality parts and offer a wide range of services, from simple screen replacements
              to complex motherboard repairs. We also offer same-day repairs in most cases.
            </p>
            <Link to="/mobiletype">
            <button
              className="btn px-5 mt-3"
              style={{
                backgroundColor: "#52AB98",
                color: "white",
                // marginLeft: "6rem",
                // marginTop: "6rem",
              }}
            >
              Book a Repair
            </button>
            </Link>
          </div>
        </div>
      </div>
      </div>
      <End />
    </>
  );
}

export default MobileRepair;
