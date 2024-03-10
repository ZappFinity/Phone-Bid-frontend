import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import './Components/LandingPage/Style.css'
import './index.css'

//images
// import mbl1 from './Components/img/mbl2.jpeg'
import realme50 from "./Components/img/realme50.jpeg";
import samsung from "./Components/img/samsung.jpeg";
import xiaomi from "./Components/img/xaiomi.jpeg";
import infinity from "./Components/img/infinity.jpeg";
import c13 from "./Components/img/C13.jpeg";
import c15 from "./Components/img/C15.jpeg";
import c51 from "./Components/img/C51Y.jpeg";
import c21 from "./Components/img/C21.jpeg";
import carad from "./Components/img/carAd.avif";
import game from "./Components/img/game.jpeg";
import apple from "./Components/img/apple.png";
import lg from "./Components/img/lg.png";
import huawei from "./Components/img/huawei.png";
import realme from "./Components/img/realme.png";
import infinix from "./Components/img/infinix.png";
import samsunglogo from "./Components/img/samsunglogo.png";
import oneplus from "./Components/img/oneplus.png";
import oppologo from "./Components/img/oppologo.png";
import techno from "./Components/img/techno.png";
import xiaomilogo from "./Components/img/xiaomilogo.png";
import review1 from "./Components/img/review1.png";
import review2 from "./Components/img/review2.png";
import comparison from "./Components/img/comparison.png";
//  videos 
import vd1 from './Components/img/vd1.mp4'
import vd2 from './Components/img/vd2.mp4'
import vd3 from './Components/img/vd3.mp4'

function App() {
  return (
    <div>
      {/* <div id="video-container" className="d-flex flex-column bd-highlight">
        <video id="video1" autoPlay muted loop>
          <source src={vd2} type="video/mp4" />
        </video>

        <video id="video2" muted loop>
          <source src={vd1} type="video/mp4" />
        </video>

        <video id="video3" muted loop>
          <source src={vd3} type="video/mp4" />
        </video> */}

<div
        className="d-flex flex-column bd-highlight">
          <video id="video1" autoPlay muted loop>
          <source src={vd3} type="video/mp4" />
        </video>

        <video id="video2" muted loop>
          <source src={vd2} type="video/mp4" />
        </video>

        <video id="video3" muted loop>
          <source src={vd1} type="video/mp4" />
        </video>

        {/* Navbar */}
        <ul class="nav justify-content-end mt-4 mx-5">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle text-dark"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
            >
              New Mobiles
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Separated link
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle text-dark"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
            >
              Used Mobiles
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Separated link
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle text-dark"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
            >
              Accessories
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Separated link
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link active text-dark" aria-current="page" href="#">
              Mobile Repair
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active text-dark" aria-current="page" href="#">
              Bidding
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark" href="#">
              Reviews
            </a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle text-dark"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
            >
              More
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Separated link
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <button className="btn btn-danger">Sell Your Mobile</button>
          </li>
        </ul>
        <div className="d-flex flex-column align-items-center justify-content-center mt-5 vh-100">
          <h1 className="text-dark">Find Used Mobiles in Pakistan</h1>
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
              Search
            </button>
          </div>
          <button type="button" class="btn btn-outline-dark mt-4">
            Advanced Filter
          </button>
        </div>

      </div>

      {/* Cards */}
      <div class="d-flex flex-column mb-5">
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
                <button type="button" class="btn btn-danger mt-4">
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
                <button type="button" class="btn btn-primary mt-4">
                  Register Your Mobile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Used mobiles */}
      <div style={{ backgroundColor: "#e9ecef" }}>
        <div className="d-flex flex-row justify-content-around ">
          <h4 className="mt-5">Used Mobiles For Sales</h4>
          <p className="mt-5 text-primary">View All Mobiles For Sales</p>
        </div>
        <div class="mt-3 d-flex flex-row justify-content-evenly ">
          <div class="card mb-5">
            <img src={c13} class="card-img-top " />
            <div class="card-body">
              <h6 class="card-title">Realme C13</h6>
              <p5 class="card-text text-success">PKR 19,700</p5>
              <p className="text-secondary">Islamabad</p>
            </div>
          </div>
          <div class="card mb-5">
            <img src={c15} class="card-img-top" />
            <div class="card-body">
              <h6 class="card-title">Realme C15</h6>
              <p5 class="card-text text-success">PKR 23,000</p5>
              <p className="text-secondary">Lahore</p>
            </div>
          </div>
          <div class="card mb-5">
            <img src={c51} class="card-img-top" />
            <div class="card-body">
              <h6 class="card-title">Realme C51Y</h6>
              <p5 class="card-text text-success">PKR 29,500</p5>
              <p className="text-secondaary">Rawalpindi</p>
            </div>
          </div>
          <div class="card mb-5">
            <img src={c21} class="card-img-top" />
            <div class="card-body">
              <h6 class="card-title">Realme C21</h6>
              <p5 class="card-text text-success">PKR 24,500</p5>
              <p className="text-seconday">Multan</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured mobiles */}
      <div>
        <div className="d-flex flex-row justify-content-around ">
          <h4 className="mt-5">Featured New Mobiles</h4>
          <p className="mt-5 text-primary">View All Featured Mobiles</p>
        </div>
        <div class="mt-3 d-flex flex-row justify-content-evenly ">
          <div class="card mb-5">
            <img src={realme50} class="card-img-top mt-5 mb-4" />
            <div class="card-body">
              <h6 class="card-title">Realme Note 50</h6>
              <p5 class="card-text text-success">PKR 55,000</p5>
              <p className="text-secondary">Islamabad</p>
            </div>
          </div>
          <div class="card mb-5">
            <img src={samsung} class="card-img-top mt-4" />
            <div class="card-body">
              <h6 class="card-title">Samsung Galaxy A25</h6>
              <p5 class="card-text text-success">PKR 75,000</p5>
              <p className="text-secondary">Islamabad</p>
            </div>
          </div>
          <div class="card mb-5">
            <img src={xiaomi} class="card-img-top mt-4" />
            <div class="card-body">
              <h6 class="card-title">Xiaomi 14</h6>
              <p5 class="card-text text-success">PKR 49,500</p5>
              <p className="text-secondaary">Islamabad</p>
            </div>
          </div>
          <div class="card mb-5">
            <img src={infinity} class="card-img-top mt-4 mb-4" />
            <div class="card-body">
              <h6 class="card-title">Infinity Zero X Pro</h6>
              <p5 class="card-text text-success">PKR 52,500</p5>
              <p className="text-seconday">islamabad</p>
            </div>
          </div>
        </div>
      </div>

      {/* brands */}
      <div style={{ backgroundColor: "#e9ecef" }}>
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
        <div className="d-flex flex-row justify-content-center">
          <h4 className="mt-5">Accessories</h4>
        </div>
        <div className="mt-3 d-flex flex-row justify-content-evenly">
          <div class="row row-cols-1 row-cols-md-4 g-4 mb-5">
            <div class="col">
              <div class="card">
                <div class="card-body d-flex flex-row justify-content-center align-item-center">
                  <h5 class="card-title mt-2 mb-2">Earpods</h5>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-body d-flex flex-row justify-content-center align-item-center">
                  <h5 class="card-title mt-2 mb-2">Handsfree</h5>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-body d-flex flex-row justify-content-center align-item-center">
                  <h5 class="card-title mt-2 mb-2">Cables</h5>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-body d-flex flex-row justify-content-center align-item-center">
                  <h5 class="card-title mt-2 mb-2">Chargers</h5>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-body d-flex flex-row justify-content-center align-item-center">
                  <h5 class="card-title mt-2 mb-2">Mobile Covers</h5>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-body d-flex flex-row justify-content-center align-item-center">
                  <h5 class="card-title mt-2 mb-2">Handphone</h5>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-body d-flex flex-row justify-content-center align-item-center">
                  <h5 class="card-title mt-2 mb-2">Protecters</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PhoneBid Offers  */}
      <div>
        <div className="d-flex flex-row justify-content-center">
          <h4 className="mt-5">PhoneBid Offerings</h4>
        </div>

        <div class="row mt-3 mx-5 d-flex flex-row align-item-center justify-content-center">
          <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                <p2 class="card-title mt-2 mb-2 text-primary">PhoneBids</p2>
                <p>INSURANCE</p>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                <p2 class="card-title mt-2 mb-2 text-primary">PhoneBids</p2>
                <p>PHONEBID SELL IT FOR ME</p>
              </div>
            </div>
          </div>
        </div>

        <div class="row mt-3 mx-5 d-flex flex-row align-item-center justify-content-center">
          <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                <p2 class="card-title mt-2 mb-2 text-primary">PhoneBids</p2>
                <p>BUY NEW MOBILES</p>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                <p2 class="card-title mt-2 mb-2 text-primary">PhoneBids</p2>
                <p>PTA APPROVAL</p>
              </div>
            </div>
          </div>
        </div>

        <div class="row mt-3 mx-5 mb-5 d-flex flex-row align-item-center justify-content-center">
          <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                <p2 class="card-title mt-2 mb-2 text-primary">PhoneBids</p2>
                <p>PHONEBID PARTNER</p>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                <p2 class="card-title mt-2 mb-2 text-primary">PhoneBids</p2>
                <p>MOBILE INSPECTION</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sponserd  */}
      <div
        className="d-flex flex-row justify-content-evenly"
        style={{ backgroundColor: "#e9ecef" }}
      >
        <img src={carad} className="mt-4 mb-4" />
        <img src={game} className="mb-4 mt-4" />
      </div>

      {/* Mobile brands  */}
      <div>
        <div className="mt-4 d-flex justify-content-center">
          <h4>New Mobiles By Make</h4>
        </div>
        <div className=" d-flex flex-row align-item-center justify-content-evenly">
          <img src={apple} style={{ width: "10%", height: "10%" }} />
          <img src={lg} style={{ width: "20%", height: "20%" }} />
          <img src={huawei} style={{ width: "10%", height: "10%" }} />
          <img src={realme} style={{ width: "15%", height: "20%" }} />
          <img src={techno} style={{ width: "13%", height: "10%" }} />
        </div>
        <div className="d-flex flex-row align-item-start justify-content-evenly">
          <img src={infinix} style={{ width: "8%", height: "10%" }} />
          <img src={samsunglogo} style={{ width: "13%", height: "13%" }} />
          <img src={oneplus} style={{ width: "13%", height: "12%" }} />
          <img src={xiaomilogo} style={{ width: "8%", height: "10%" }} />
          <img src={oppologo} style={{ width: "10%", height: "10%" }} />
        </div>
      </div>

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
            <button type="button" class="btn btn-outline-primary">
              View Comparison
            </button>
          </div>
          <vr style={{ border: "2px solid #808080" }} className="mx-5" />
          <div className="d-flex flex-column text-center">
            <h6>Realme Note 50</h6>
            <h3>VS</h3>
            <h6>Samsung Galaxy A25</h6>
            <hr style={{ border: "2px solid #000" }} />
            <h6>Realme C21</h6>
            <h3>VS</h3>
            <h6>Realme C51Y</h6>
          </div>
        </div>
      </div>

      {/* videos  */}
      <div>
        <div className="d-flex flex-row justify-content-around">
          <h4 className="mb-5 mt-4">Browse Our Videos</h4>
          <p className="text-primary mb-5 mt-4">View All Videos</p>
        </div>
        <div class="embed-responsive embed-responsive-4by3 d-flex flex-row justify-content-evenly mb-5">
          <iframe
            class="embed-responsive-item"
            style={{ width: "500px", height: "300px" }}
            src="https://www.youtube.com/embed/keYat4iSYAQ"
            allowfullscreen
          ></iframe>
          <iframe
            class="embed-responsive-item"
            style={{ width: "500px", height: "300px" }}
            src="https://www.youtube.com/embed/ztqM-JZl7Eg"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      {/* Mobile Reviews  */}
      <div style={{ backgroundColor: "#e9ecef" }}>
        <div className="d-flex justify-content-start mx-5">
          <h4 className="mt-5 mb-4">Mobile Reviews</h4>
        </div>
        <div className="container d-flex flex-row align-items-center">
          <div className="d-flex flex-column">
            <div className=" container  d-flex flex-row ">
              <img src={review1} style={{ width: "15%", height: "100%" }} />
              <div className=" container text-vertical">
                <h5 className="text-primary">
                  Why Should Buy Infinix Zero X Pro
                </h5>
                <p>
                  The Infinix Zero X Pro is an affordable phone that give you a
                  120HZ OLED display and an impressively rounded the triple
                  camers system,display and an impressively rounded the triple
                  camers system
                </p>
              </div>
            </div>

            <div className="container  d-flex flex-row mt-3">
              <img src={review2} style={{ width: "15%", height: "100%" }} />
              <div className=" container">
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
          <img
            src={game}
            className="mb-4 mt-4 mx-5 d-flex justify-content-start"
            style={{ width: "40%", height: "100%" }}
          />
        </div>
      </div>

      {/* end  */}
      <div style={{ backgroundColor: "#15363F" }}>
        <div className="d-flex flex-row justify-content-around">
          <div className="d-flex flex-row">
            <div className=" mt-5 mx-5">
              <h5 className="text-light">Popular Mobiles</h5>
              <p className="text-light">iPhone 15 Pro</p>
              <p className="text-light">Samsung Galaxy S22</p>
              <p className="text-light">OnePlus12R</p>
              <p className="text-light">Realme C67</p>
              <p className="text-light">Oppo A18</p>
              <p className="text-light">Xiaomi Redmi Note 13</p>
              <p className="text-light">Samsung Galaxy S23</p>
              <p className="text-light">Infinix 40 Pro</p>
            </div>
            <div className=" mt-5 mx-5">
              <h5 className="text-light">Popular Brands</h5>
              <p className="text-light">Apple</p>
              <p className="text-light">Samsung</p>
              <p className="text-light">OnePlus</p>
              <p className="text-light">Realme</p>
              <p className="text-light">Oppo</p>
              <p className="text-light">Xiaomi</p>
              <p className="text-light">Huawei</p>
              <p className="text-light">Infinix</p>
            </div>
          </div>
          <div className=" mt-5 mx-5">
            <h5 className="text-light">Sell on PhoneBid</h5>
            <p className="text-light mt-4">Sell Your Mobile</p>
            <p className="text-light">Bid Your Mobile</p>
            <h4 className="text-light mt-5">Subscribe to our newsletter</h4>
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                placeholder="name@email.com"
                aria-label="Input group example"
                aria-describedby="btnGroupAddon"
              />
              <div class="input-group-text btn btn-success" id="btnGroupAddon">
                Subscribe
              </div>
            </div>
            <h5 className="text-light mt-4">Follow Us</h5>
          </div>
        </div>

        <div className="text-center">
          <hr style={{ color: "#fff" }} />
          <p2 className="text-light">
            Copyright @ 2023-2024 PhoneBid(Pvt)Ltd. All Rights Reserved{" "}
          </p2>
          <p className="text-light pb-4">
            Reproduction of matrial from any PhoneBid.com pages without
            permission is strictly prohibited.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
