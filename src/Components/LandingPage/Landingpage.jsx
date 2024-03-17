import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Style.css'
import Accessories from '../LandingPage/Accessories'
import Categories from '../LandingPage/Categories'
import FeaturedMobile from "./FeaturedMobile";
import UsedMobile from "./UsedMobile";
import Brands from "./Brands";
import PhoneBidOffers from "./PhoneBidOffers";

//images
import review1 from "../img/review1.png";
import review2 from "../img/review2.png";
import comparison from "../img/comparison.png";
import slider from '../img/Slider.svg'
// icons 
import { IoSearch } from "react-icons/io5";
// router
import Navbar from "./Navbar";
// router
import { Link } from "react-router-dom";
import End from "./End";




function App() {
  return (
    <>
    <div>
        <Navbar/>
        {/* video  */}
      <div className="d-flex flex-column ">
      <div class="slideshow-container">
    <div class="mySlides fade">
      <img src={slider}/>
    </div>

    <div class="mySlides fade">
      <img src={slider}/>
    </div>

    <div class="mySlides fade">
      <img src={slider}/>
    </div>
  </div>

        {/* search  */}
        
        <div className="d-flex flex-column align-items-center justify-content-end" style={{ backgroundColor: "#e9ecef" }}>
          <h1 className="text- mt-5">Find Used Mobiles in Pakistan</h1>
          <p1 className="text-dark">
            With thousands of mobiles, we have just the right one for you
          </p1>

          <div
            class="btn-group mt-3"
            role="group"
            aria-label="Basic outlined example"
          >
            <button type="button" class="btn btn-light btn-outline-dark">
              Mobile Make or Model
            </button>

            <div class="btn-group" role="group">
              <button
                id="btnGroupDrop1"
                type="button"
                class="btn btn-light btn-outline-dark dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                All Cities
              </button>
              <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                <li>
                  <a class="dropdown-item" href="#">
                    Islamabad
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Lahore
                  </a>
                </li>
              </ul>
            </div>
            <div class="btn-group" role="group">
              <button
                id="btnGroupDrop1"
                type="button"
                class="btn btn-light btn-outline-dark dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Price Range
              </button>
              <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                <li>
                  <a class="dropdown-item" href="#">
                    130k
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    125k
                  </a>
                </li>
              </ul>
            </div>
            <button type="button" class="btn btn-success ">
            <IoSearch />
            </button>
          </div>
          <button type="button" class="btn btn-outline-dark mt-4 mb-4">
            Advanced Filter
          </button>
        </div>

      </div>
      {/* Cards */}
      <div class="d-flex flex-column mb-5 mt-4">
        <h4 className="d-flex justify-content-center">
          Sell Your Mobile on PhoneBid and Get the Best Price
        </h4>
        <div class="d-flex flex-row justify-content-center gap-4 mt-2">
          <div class="col-sm-4">
            <div class="card">
              <div class="card-body mt-3 mx-4 mb-4">
                <h6 class="card-title mb-3 fw-bold">
                  Post your Ad on PhoneBid
                </h6>
                <p3 class="card-text text-secondary">
                  Post your Ad for Free in 3 Easy Steps
                </p3>
                <br />
                <p3 class="card-text text-secondary">
                  Get Genuine offers from Verified Buyers
                </p3>
                <br />
                <p3 class="card-text text-secondary">
                  Sell your mobile Fast at the Best Price
                </p3>
                <br />
                <button type="button" class="btn mt-4 text-white" style={{backgroundColor:"#52AB98"}}>
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
                  Dedicate Sales Expert to Sell your Mobile
                </p3>
                <br />
                <p3 class="card-text text-secondary">
                  We Bargain for you and Share the Best Offer
                </p3>
                <br />
                <p3 class="card-text text-secondary">
                  We ensure Safe & Secure Transection
                </p3>
                <br />
                <button type="button" class="btn mt-4 text-white" style={{backgroundColor:"#2B6777"}}>
                  Register Your Mobile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Used mobiles */}
      <UsedMobile/>

      {/* Featured mobiles */}
     <FeaturedMobile/>

      {/* brands */}
      <div style={{ backgroundColor: "#e9ecef" }}>
        {/* Categories  */}
        <Categories/>
        {/* browsed used mobile  */}
        <div className="d-flex flex-row justify-content-center">
          <h4 className="mt-5">Browsed Used Mobiles</h4>
        </div>
        <div className="mt-3 d-flex flex-row justify-content-evenly">
          <div class="row row-cols-1 row-cols-md-4 g-4">
            <div class="col">
              <div class="card">
                <div class="card-body d-flex flex-row justify-content-center align-item-center">
                  <h5 class="card-title mt-2 mb-2">Apple</h5>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-body d-flex flex-row justify-content-center align-item-center">
                  <h5 class="card-title mt-2 mb-2">Realme</h5>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-body d-flex flex-row justify-content-center align-item-center">
                  <h5 class="card-title mt-2 mb-2">Xiaomi</h5>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-body d-flex flex-row justify-content-center align-item-center">
                  <h5 class="card-title mt-2 mb-2">Huawei</h5>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-body d-flex flex-row justify-content-center align-item-center">
                  <h5 class="card-title mt-2 mb-2">Samsung</h5>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-body d-flex flex-row justify-content-center align-item-center">
                  <h5 class="card-title mt-2 mb-2">Infinix</h5>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-body d-flex flex-row justify-content-center align-item-center">
                  <h5 class="card-title mt-2 mb-2">Oppo</h5>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-body d-flex flex-row justify-content-center align-item-center">
                  <h5 class="card-title mt-2 mb-2">Vivo</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Accessories  */}
        <Accessories/>
      </div>

      {/* PhoneBid Offers  */}
     <PhoneBidOffers/>

      {/* Mobile Comparison  */}
      <div style={{ backgroundColor: "#e9ecef" }}>
        <div className="d-flex flex-row justify-content-center ">
          <h4 className="mt-4 mx-5 mb-3"> Mobile Comparison</h4>
        </div>
        <div className="d-flex flex-row justify-content-center pb-5">
          <div className="d-flex flex-column">
            <img src={comparison} />
            <p className="mx-4">
              Samsung Galaxy S21 <b>Vs </b> iPhone 12
            </p>
          </div>
          <div className="d-flex flex-column text-center mx-4">
            <h6>Realme Note 50</h6>
            <h3>VS</h3>
            <h6>Samsung Galaxy A25</h6>
            <hr style={{ border: "2px solid #000" }} />
            <h6>Realme C21</h6>
            <h3>VS</h3>
            <h6>Realme C51Y</h6>
          </div>
          <div className="mt-5 mx-3">
          <Link to='/comparisan'><button type="button" class="btn mt-5 mx-4 text-white" style={{backgroundColor:"#52AB98"}}>
              View Comparison
            </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile brands  */}
     <Brands/>


      {/* videos  */}
      <div style={{ backgroundColor: "#e9ecef" }}>
      <div>
        <div className="d-flex flex-row justify-content-around">
          <h4 className="mb-4 mt-4">Browse Our Videos</h4>
          <p className="text-primary mb-4 mt-4">View All Videos</p>
        </div>
        <div class="embed-responsive embed-responsive-4by3 d-flex flex-row justify-content-evenly ">
          <iframe
            class="embed-responsive-item mb-5"
            style={{ width: "400px", height: "200px" }}
            src="https://www.youtube.com/embed/keYat4iSYAQ"
            allowFullscreen
          ></iframe>
          <iframe
            class="embed-responsive-item mb-5"
            style={{ width: "400px", height: "200px" }}
            src="https://www.youtube.com/embed/ztqM-JZl7Eg"
            allowFullscreen
          ></iframe>
        </div>
      </div>
      </div>

      {/* Mobile Reviews  */}
        <div className="offset-2">
          <h4 className="mt-5 mb-4">Mobile Reviews</h4>
        </div>
      
      <div class="row mt-2 mb-5 mx-5 d-flex flex-row align-item-center justify-content-center">
          <div class="col-sm-5">
            <div class="card d-flex flex-row">
                <img src={review1} className="img-fluid col-sm-2 mt-2" style={{ width: "6rem", height: "10rem" }}/>
              <div class="card-body d-flex flex-column">
              <h5 className="text-primary">
                  Why Should Buy Infinix Zero X Pro
                </h5>
                <p>
                  The Infinix Zero X Pro is an affordable phone that give you a
                  120HZ OLED display and an impressively rounded the triple
                  camers system,display and an impressively rounded.
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-5">
            <div class="card d-flex flex-row">
            <img src={review2} className="img-fluid col-sm-2 mt-2" style={{ width: "6rem", height: "10rem" }}/>
              <div class="card-body d-flex flex-column">
              <h5 className="text-primary">Why Should Buy Xiaomi 14</h5>
                <p>
                  the Xiaomi 14 is compatible with 50W wireless charging, which
                  is quite impressive.The display of the Xiaomi 14 is
                  impressive, display and an impressively rounded the triple
                  camers system
                </p>
              </div>
            </div>
          </div>
        </div>

      {/* end  */}
      <End/>
    </div>
    </>
  );
}

export default App;
