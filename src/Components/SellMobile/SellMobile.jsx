import React from "react";
import End from '../LandingPage/End'
import icon from "../img/youtube.png"
import { TiTick } from "react-icons/ti"
import Navbar from "../LandingPage/Navbar"
import { FaRegUser } from "react-icons/fa6"
import { HiOutlineLightBulb } from "react-icons/hi"
import { MdOutlinePhoneIphone } from "react-icons/md"
import { MdOutlinePhoneAndroid } from "react-icons/md"

function SellMobile() {
  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: "#f2f3f3" }}>
        <h3 className="text-center pt-5" style={{ color: "#52ab98" }}>
          Sell Your Mobile Online in Pakistan Instantly!
        </h3>
        <p className="text-center">Choose How To Sell Your Mobile</p>
        <div class="d-flex flex-column pb-5 mt-4">
          {/* on Large screen  */}
          <div class="d-flex flex-row justify-content-center gap-4 mt-2 d-none d-sm-flex">
            <div class="col-sm-4">
              <div class="card">
                <div class="card-body mt-3 mx-4 mb-4">
                  <h6 class="card-title mb-3 fw-bold">
                    Post your Ad on PhoneBid
                  </h6>
                  <p3 class="card-text text-secondary">
                    <TiTick className="tex-success" />
                    Post your Ad for Free in 3 Easy Steps
                  </p3>
                  <br />
                  <p3 class="card-text text-secondary">
                    <TiTick className="text-success" />
                    Get Genuine offers from Verified Buyers
                  </p3>
                  <br />
                  <p3 class="card-text text-secondary">
                    <TiTick className="text-success" />
                    Sell your mobile Fast at the Best Price
                  </p3>
                  <br />
                  <button
                    type="button"
                    class="btn mt-4 text-white"
                    style={{ backgroundColor: "#52AB98" }}
                  >
                    Post Your Ad
                  </button>
                </div>
              </div>
            </div>

            <div class="col-sm-4">
              <div class="card">
                <div class="card-body mt-3 mx-4 mb-4">
                  <h6 class="card-title mb-3 fw-bold">
                    Try PhoneBid Sell it For Me
                  </h6>
                  <p3 class="card-text text-secondary">
                    <TiTick className="text-success" />
                    Dedicate Sales Expert to Sell your Mobile
                  </p3>
                  <br />
                  <p3 class="card-text text-secondary">
                    <TiTick className="text-success" />
                    We Bargain for you and Share the Best Offer
                  </p3>
                  <br />
                  <p3 class="card-text text-secondary">
                    <TiTick className="text-success" />
                    We ensure Safe & Secure Transection
                  </p3>
                  <br />
                  <button
                    type="button"
                    class="btn mt-4 text-white"
                    style={{ backgroundColor: "#2B6777" }}
                  >
                    Register Your Mobile
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* on small screen */}
          <div class="d-flex flex-column  justify-content-center gap-4 mt-2  d-sm-none">
            <div class="col-sm-3 mb-3 mx-4">
              <div class="card ">
                <div class="card-body mt-3 mx-4 mb-4">
                  <h6 class="card-title mb-3 fw-bold">
                    Post your Ad on PhoneBid
                  </h6>
                  <p3 class="card-text text-secondary">
                    <TiTick className="tex-success" />
                    Post your Ad for Free in 3 Easy Steps
                  </p3>
                  <br />
                  <p3 class="card-text text-secondary">
                    <TiTick className="text-success" />
                    Get Genuine offers from Verified Buyers
                  </p3>
                  <br />
                  <p3 class="card-text text-secondary">
                    <TiTick className="text-success" />
                    Sell your mobile Fast at the Best Price
                  </p3>
                  <br />
                  <button
                    type="button"
                    class="btn mt-4 text-white"
                    style={{ backgroundColor: "#52AB98" }}
                  >
                    Post Your Ad
                  </button>
                </div>
              </div>
            </div>

            <div class="col-sm-3 mb-3 mx-4">
              <div class="card">
                <div class="card-body mt-3 mx-4 mb-4">
                  <h6 class="card-title mb-3 fw-bold">
                    Try PhoneBid Sell it For Me
                  </h6>
                  <p3 class="card-text text-secondary">
                    <TiTick className="text-success" />
                    Dedicate Sales Expert to Sell your Mobile
                  </p3>
                  <br />
                  <p3 class="card-text text-secondary">
                    <TiTick className="text-success" />
                    We Bargain for you and Share the Best Offer
                  </p3>
                  <br />
                  <p3 class="card-text text-secondary">
                    <TiTick className="text-success" />
                    We ensure Safe & Secure Transection
                  </p3>
                  <br />
                  <button
                    type="button"
                    class="btn mt-4 text-white"
                    style={{ backgroundColor: "#2B6777" }}
                  >
                    Register Your Mobile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="offset-1">
        <h4 className="offset-1 py-3">Why Sell Your Mobile On PhoneBid?</h4>
        <span
          style={{
            position: "relative",
            top: "5px",
            left: " 12rem",
            zIndex: "1",
            backgroundColor: "white",
            borderRadius: "50%",
            boxShadow: "0px 5px 12px 8px rgba(0, 0, 0, 0.1)",
          }}
          className="p-2"
        >
          #1
        </span>
        <span
          style={{
            position: "relative",
            top: "5px",
            left: " 35rem",
            zIndex: "1",
            backgroundColor: "white",
            borderRadius: "50%",
            boxShadow: "0px 5px 12px 8px rgba(0, 0, 0, 0.1)",
          }}
          className="py-2 px-1"
        >
          5Lac
        </span>
        <span
          style={{
            position: "relative",
            top: "5px",
            left: " 57rem",
            zIndex: "1",
            backgroundColor: "white",
            borderRadius: "50%",
            boxShadow: "0px 5px 12px 8px rgba(0, 0, 0, 0.1)",
          }}
          className="p-2"
        >
          3M
        </span>
        <div className="d-flex flex-row justify-content-around pb-4">
          <span
            className="rounded px-4 py-2 text-center"
            style={{ backgroundColor: "#C9D8E5" }}
          >
            Pakistan's # 1 mobile <br /> marketplace
          </span>
          <span className="rounded p-3" style={{ backgroundColor: "#C9D8E5" }}>
            5 lac + visitors daily
          </span>
          <span className="rounded p-3" style={{ backgroundColor: "#C9D8E5" }}>
            3 million + cars sold
          </span>
        </div>
      </div>
      <div style={{ backgroundColor: "#f2f3f3" }}>
        <h4 className="offset-2 py-4">3 Simple Steps To Sell Your Mobile</h4>
        <div className="d-flex flex-row justify-content-around offset-1">
          <div className="d-flex flex-column col-sm-2" align="center">
            <FaRegUser
              style={{ width: "3.5rem", height: "3.5rem", color: "#233d7b" }}
              className="offset-4"
            />
            <h4 className="pt-2">Sign Up</h4>
            <p>Register yorself on phonebid.com to post an ad.</p>
          </div>
          <div className="d-flex flex-column col-sm-2" align="center">
            <MdOutlinePhoneAndroid
              style={{ width: "3.5rem", height: "3.5rem", color: "#233d7b" }}
              className="offset-4"
            />
            <h4 className="pt-2">Create Your Ad</h4>
            <p>Provide necessary details and upload clear photos.</p>
          </div>
          <div className="d-flex flex-column col-sm-2" align="center">
            <MdOutlinePhoneIphone
              style={{ width: "3.5rem", height: "3.5rem", color: "#233d7b" }}
              className="offset-4"
            />
            <h4 className="pt-2">Create Your Ad</h4>
            <p>Provide necessary details and upload clear photos.</p>
          </div>
        </div>
      </div>
      <div>
        <h4 className="pt-3 offset-2">Interesting Tips</h4>
        <span
          style={{
            position: "relative",
            top: "2rem",
            left: " 68rem",
            zIndex: "1",
            backgroundColor: "white",
            borderRadius: "50%",
            boxShadow: "0px 5px 12px 8px rgba(0, 0, 0, 0.1)",
            width: "2.5rem",
            height: "2.5rem",
          }}
          className="p-2"
        >
          <HiOutlineLightBulb
            style={{ width: "1.5rem", height: "1.5rem", color: "#233d7b" }}
          />
        </span>
        <span
          style={{
            position: "relative",
            top: "2rem",
            left: "40rem",
            zIndex: "1",
            backgroundColor: "white",
            borderRadius: "50%",
            boxShadow: "0px 5px 12px 8px rgba(0, 0, 0, 0.1)",
            width: "2.5rem",
            height: "2.5rem",
          }}
          className="p-2"
        >
          <HiOutlineLightBulb
            style={{ width: "1.5rem", height: "1.5rem", color: "#233d7b" }}
          />
        </span>
        <span
          style={{
            position: "relative",
            top: "2rem",
            left: "13rem",
            zIndex: "1",
            backgroundColor: "white",
            borderRadius: "50%",
            boxShadow: "0px 5px 12px 8px rgba(0, 0, 0, 0.1)",
            width: "2.5rem",
            height: "2.5rem",
          }}
          className="p-2"
        >
          <HiOutlineLightBulb
            style={{ width: "1.5rem", height: "1.5rem", color: "#233d7b" }}
          />
        </span>
        <div className="d-flex flex-row offset-1 justify-content-around pb-3">
          <div
            className="d-flex flex-column col-sm-2 my-4 px-3 rounded text-center"
            style={{
              boxShadow: "0px 5px 12px 8px rgba(0, 0, 0, 0.1)",
              paddingTop: "1.5rem",
            }}
          >
            <p>
              Get your mobile repaired and fix any minor defects to increase its
              resale value
            </p>
          </div>

          <div
            className="d-flex flex-column col-sm-2 my-4 px-3 rounded text-center"
            style={{
              boxShadow: "0px 5px 12px 8px rgba(0, 0, 0, 0.1)",
              paddingTop: "1rem",
            }}
          >
            <p>
              Set up a reasonable price as it will determine how long it will
              take for your mobile to sell
            </p>
          </div>
          <div
            className="d-flex flex-column col-sm-2 my-4 px-3 rounded text-center"
            style={{
              boxShadow: "0px 5px 12px 8px rgba(0, 0, 0, 0.1)",
              paddingTop: "1.5rem",
            }}
          >
            <p>
              Beware of unrealistic offers and carry out safe transactions to
              avoid being defrauded
            </p>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#f2f3f3" }} className="pb-5">
        <h4 className="py-3 offset-2">
          Watch Our Guide For Selling A Mobile In Pakistan
        </h4>
        <div
          class="card offset-4"
          style={{
            width: "27rem",
            boxShadow: "0px 5px 12px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div class="card-body">
            <iframe
              class="embed-responsive-item mb-5"
              style={{ width: "400px", height: "200px" }}
              src="https://www.youtube.com/watch?v=suryyCPOgIc"
              allowFullscreen
            ></iframe>
            <p class="card-text">
              How to Master Phone Sales with Grant Cardone
            </p>
            <div className="d-flex flex-row">
              <img src={icon} className="m-3" />
              <p className="mt-2 text-secondary">YouTube</p>
            </div>
          </div>
        </div>
      </div>
      <div>

      </div>
      <End/>
    </>
  );
}

export default SellMobile;
