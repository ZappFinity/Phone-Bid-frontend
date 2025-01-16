import React, { useState, useRef, useEffect } from "react";
import Welcome from "./Welcome";
import logo from "../img/logo.png";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdCheckBox } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { MdRateReview } from "react-icons/md";
import { FaRegThumbsUp } from "react-icons/fa";
import { BsFillTagFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowForward } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineDifference } from "react-icons/md";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [newDropdown, setNewDropdown] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [accessDropdown, setAccessDropdown] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setNewDropdown(false);
        setShowDropdown(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleItemClick = () => {
    setNewDropdown(!newDropdown);
  };
  const handledropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const handleClick = () => {
    setAccessDropdown(!accessDropdown);
  };
  return (
    <>
      
      <div className="col-12 mt-2 d-flex flex-row justify-content-between align-items-center">
        {/* Logo for larger screens */}
        <Link to="/" className="nav-link active text-dark" aria-current="page">
          <img
            src={logo}
            className="img-fluid col-sm-1 d-none d-sm-block ms-3"
            alt="Logo"
          />
        </Link>
        <div className="col-sm-2 d-none d-sm-block mt-1">
          <Welcome />
        </div>
      </div>
      <div className="col-12 mt-2 d-flex flex-row justify-content-between align-items-center">
        <Link
          to="/"
          class="nav-link active text-dark"
          aria-current="page"
          href="#"
        >
          <img
            src={logo}
            className="img-fluid col-md-4 mb-3 d-sm-none"
            alt="Icon"
            style={{ width: "100px" }}
          />
        </Link>

        <div className="me-3 d-sm-none">
          <Welcome />
        </div>
        </div>
      {/* Navbar */}
      {/* On Small screen  */}
      <button
        className="navbar-toggler d-lg-none ms-2"
        type="button"
        onClick={toggleMenu}
      >
        <span className="navbar-toggler-icon" style={{ fontSize: "23px" }}>
          <RxHamburgerMenu />
        </span>
      </button>
      <div
        className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
        d-lg-none
      >
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-3">
          <li class="nav-item">
            <div
              style={{
                position: "rerlative",
                cursor: "pointer",
                display: "inline-block",
              }}
              onClick={handledropdown}
            >
              <Link
                to="/usedmobile"
                className="mt-2 d-flex align-items-center text-black text-decoration-none"
              >
                Used Mobiles
                <IoMdArrowDropdown />
              </Link>

              {showDropdown && (
                <div
                  style={{
                    position: "absolute",
                    top: "5.5rem",
                    left: "7rem",
                    zIndex: "3",
                    color: "black",
                    backgroundColor: "#fff",
                    boxShadow: "0 5px 7px rgba(0, 0, 0, 0.1)",
                    borderRadius: "4px",
                    paddingLeft: "13px ",
                    paddingRight: "13px",
                    width: "55%",
                  }}
                >
                  <div className="d-flex flex-row">
                    <div className="col pt-3">
                      <Link className="d-block mb-2 text-decoration-none text-dark">
                        Featured Used Mobiles
                        <IoIosArrowForward />
                      </Link>
                      <Link className="d-block mb-2 text-decoration-none text-dark">
                        Sell Your Mobile
                        <IoIosArrowForward />
                      </Link>
                      <Link className="d-block mb-2 text-decoration-none text-dark">
                        Phonebid Certified Mobiles
                        <IoIosArrowForward />
                      </Link>
                      <Link className="d-block mb-2 text-decoration-none text-dark">
                        Phonebid Sell It For Me
                        <IoIosArrowForward />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </li>
          <li class="nav-item">
            <div
              style={{
                position: "rerlative",
                cursor: "pointer",
                display: "inline-block",
              }}
              onClick={handleItemClick}
            >
              <Link
                to="/newmobile"
                className="mt-2 d-flex align-items-center text-decoration-none text-black"
              >
                New Mobiles
                <IoMdArrowDropdown />
              </Link>

              {newDropdown && (
                <div
                  style={{
                    position: "absolute",
                    top: "9rem",
                    left: "7rem",
                    zIndex: "1",
                    color: "black",
                    backgroundColor: "#fff",
                    boxShadow: "0 5px 7px rgba(0, 0, 0, 0.1)",
                    borderRadius: "4px",
                    paddingLeft: "13px ",
                    paddingRight: "13px",
                    width: "50%",
                  }}
                >
                  <div className="d-flex flex-row">
                    <div className="col pt-3">
                      <Link className="d-block mb-2 text-decoration-none text-dark">
                        Find Mobiles
                        <IoIosArrowForward />
                      </Link>
                      <Link className="d-block mb-2 text-decoration-none text-dark">
                        Mobile Comparison
                        <IoIosArrowForward />
                      </Link>
                      <Link className="d-block mb-2 text-decoration-none text-dark">
                        Reviews
                        <IoIosArrowForward />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </li>
          <li class="nav-item">
            <div
              style={{
                position: "rerlative",
                cursor: "pointer",
                display: "inline-block",
              }}
              onClick={handleClick}
            >
              <Link
                to="/accessories"
                className="mt-2 d-flex align-items-center text-black text-decoration-none"
              >
                Accessories
                <IoMdArrowDropdown />
              </Link>

              {accessDropdown && (
                <div
                  style={{
                    position: "absolute",
                    top: "12rem",
                    left: "7rem",
                    zIndex: "1",
                    color: "black",
                    backgroundColor: "#fff",
                    boxShadow: "0 5px 7px rgba(0, 0, 0, 0.1)",
                    borderRadius: "4px",
                    paddingLeft: "13px ",
                    paddingRight: "13px",
                    width: "55%",
                  }}
                >
                  <div className="d-flex flex-row">
                    <div className="col pt-3">
                      <Link className="d-block mb-2 text-decoration-none text-dark">
                        PhoneBid Store
                        <IoIosArrowForward />
                      </Link>
                      <Link className="d-block mb-2 text-decoration-none text-dark">
                        Featured Accessories
                        <IoIosArrowForward />
                      </Link>
                      <Link className="d-block mb-2 text-decoration-none text-dark">
                        Sell Your Accessories
                        <IoIosArrowForward />
                      </Link>
                      <Link className="d-block mb-2 text-decoration-none text-dark">
                        Mobile Parts
                        <IoIosArrowForward />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </li>
          <li class="nav-item">
            <Link
              to="/mobilerepair"
              class="nav-link active text-dark"
              aria-current="page"
              href="#"
            >
              Mobile Repair
            </Link>
          </li>
          <li class="nav-item">
            <Link
              class="nav-link active text-dark"
              aria-current="page"
              href="#"
            >
              Bidding
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link text-dark" to="/comparisan">
              Comparison
            </Link>
          </li>
          
          <li class="nav-item">
            <Link class="nav-link text-dark" to="/blog">
              Blogs
            </Link>
          </li>
          <li class="nav-item">
            <button
              className="btn"
              style={{ backgroundColor: "#52AB98", color: "white" }}
            >
              Sell Your Mobile
            </button>
          </li>
        </ul>
      </div>

      {/* On Large screen  */}
      <ul class="nav justify-content-end mt-2 mx-5 mb-2 d-none d-lg-flex">
        <li class="nav-item">
          <div
            style={{
              position: "rerlative",
              cursor: "pointer",
              display: "inline-block",
            }}
            onClick={handledropdown}
          >
            <Link
              to="/usedmobile"
              className="mt-2 d-flex align-items-center text-decoration-none text-black"
            >
              Used Mobiles
              <IoMdArrowDropdown />
            </Link>

            {showDropdown && (
              <div
                style={{
                  position: "absolute",
                  top: "5.25rem",
                  left: "10rem",
                  zIndex: "3",
                  color: "black",
                  backgroundColor: "#fff",
                  boxShadow: "0 5px 7px rgba(0, 0, 0, 0.1)",
                  borderRadius: "4px",
                  paddingLeft: "13px ",
                  paddingRight: "13px",
                  width: "80%",
                }}
              >
                <div className="d-flex flex-row">
                  <div className="col pt-3">
                    <Link className="d-block mb-2 text-decoration-none text-dark">
                      <h6 className="text-secondary">
                        <FaStar className="mx-1" />
                        <b>Featured Used Mobiles</b>
                      </h6>
                      <p className="mx-4"> View featured mobiles</p>
                    </Link>
                    <Link className="d-block mb-2 text-decoration-none text-dark">
                      <h6 className="text-secondary">
                        <BsFillTagFill className="mx-1" />
                        <b>Sell Yor Mobiles</b>
                      </h6>
                      <p className="mx-4">post free ads to sell your mobiles</p>
                    </Link>
                  </div>
                  <div
                    style={{
                      width: "2px",
                      height: "10rem",
                      backgroundColor: "lightGrey",
                      marginTop: "1rem",
                    }}
                  />
                  <div className="col px-3 pt-3">
                    <Link className="d-block mb-2 text-decoration-none text-dark">
                      <h6 className="text-secondary">
                        <MdCheckBox className="mx-1" />
                        <b>Phonebid Certified Mobiles</b>
                      </h6>
                      <p className="mx-4">
                        Cars with the Parkwheels seal of approval
                      </p>
                    </Link>
                    <Link className="d-block mb-2 text-decoration-none text-dark">
                      <h6 className="text-secondary">
                        <FaRegThumbsUp className="mx-1" />
                        <b>Phonebid Sell it for me</b>
                      </h6>
                      <p className="mx-4">
                        Let Phonebid sell your mobile hassle free fro you
                      </p>
                    </Link>
                  </div>
                  <div
                    style={{
                      width: "2px",
                      height: "10rem",
                      backgroundColor: "lightGrey",
                      marginTop: "1rem",
                    }}
                  />
                  <div className="col-sm-2 mx-1">
                    <div className="mx-4 pt-3">
                      <h6 className="text-secondary">
                        <FaLocationDot className="mx-1" />
                        <b>Cities</b>
                      </h6>
                      <Link className="d-block mb-2 mx-4 text-decoration-none text-secondary">
                        Karachi
                      </Link>
                      <Link className="d-block mb-2 mx-4 text-decoration-none text-secondary">
                        Lahore
                      </Link>
                      <Link className="d-block mb-2 mx-4 text-decoration-none text-secondary">
                        Islamabad
                      </Link>
                      <Link className="d-block mb-2 mx-4 text-decoration-none text-secondary">
                        Faisalabad
                      </Link>
                    </div>
                  </div>
                  <div
                    style={{
                      width: "2px",
                      height: "10rem",
                      backgroundColor: "lightGrey",
                      marginTop: "1rem",
                    }}
                  />
                  <div className="col-sm-3">
                    <div className="mx-3 pt-3">
                      <h6 className="text-secondary">
                        <FaMobileAlt className="mx-1" />
                        <b>Popular Mobile</b>
                      </h6>
                      <Link className="d-block mb-2 mx-4 text-decoration-none text-secondary">
                        IPhone 15 Pro
                      </Link>
                      <Link className="d-block mb-2 mx-4 text-decoration-none text-secondary">
                        Samsung Galaxy S22
                      </Link>
                      <Link className="d-block mb-2 mx-4 text-decoration-none text-secondary">
                        Xiaomi Redmi Note 13
                      </Link>
                      <Link className="d-block mb-2 mx-4 text-decoration-none text-secondary">
                        Samsung Galaxy S23
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </li>
        <li class="nav-item">
          <div
            style={{
              position: "rerlative",
              cursor: "pointer",
              display: "inline-block",
            }}
            onClick={handleItemClick}
          >
            <Link
              to="/newmobile"
              className="mt-2 mx-3 d-flex align-items-center text-decoration-none text-black"
            >
              New Mobiles
              <IoMdArrowDropdown />
            </Link>

            {newDropdown && (
              <div
                style={{
                  position: "absolute",
                  top: "5.29rem",
                  left: "22rem",
                  zIndex: "1",
                  color: "black",
                  backgroundColor: "#fff",
                  boxShadow: "0 5px 7px rgba(0, 0, 0, 0.1)",
                  borderRadius: "4px",
                  paddingLeft: "13px ",
                  paddingRight: "13px",
                  width: "65%",
                }}
              >
                <div className="d-flex flex-row">
                  <div className="col pt-3">
                    <Link className="d-block mb-2 text-decoration-none text-dark">
                      <h6 className="text-secondary">
                        <IoSearchOutline className="mx-1" />
                        <b>Find New Mobiles</b>
                      </h6>
                      <p className="mx-4">See new mobiles in Pakistan</p>
                    </Link>
                    <Link className="d-block mb-2 text-decoration-none text-dark">
                      <h6 className="text-secondary">
                        <MdOutlineDifference className="mx-1" />
                        <b>Mobile Comparison</b>
                      </h6>
                      <p className="mx-4">
                        Compare mobiles and find their differences
                      </p>
                    </Link>
                    <Link className="d-block mb-2 text-decoration-none text-dark">
                      <h6 className="text-secondary">
                        <MdRateReview className="mx-1" />
                        <b>Reviews</b>
                      </h6>
                      <p className="mx-4">
                        Read reviews of all mobiles in Pakistan
                      </p>
                    </Link>
                  </div>
                  <div
                    style={{
                      width: "2px",
                      height: "10rem",
                      backgroundColor: "lightGrey",
                      marginTop: "2rem",
                    }}
                  />
                  <div className="col-sm-3 mx-1 mt-2">
                    <div className="mx-4 pt-3">
                      <h6 className="text-secondary">
                        <FaMobileAlt className="mx-1" />
                        <b>Popular Brands</b>
                      </h6>
                      <Link className="d-block mb-2 mx-4 text-decoration-none text-secondary">
                        Apple
                      </Link>
                      <Link className="d-block mb-2 mx-4 text-decoration-none text-secondary">
                        Samsung
                      </Link>
                      <Link className="d-block mb-2 mx-4 text-decoration-none text-secondary">
                        Xiaomi
                      </Link>
                      <Link className="d-block mb-2 mx-4 text-decoration-none text-secondary">
                        Realme
                      </Link>
                      <Link className="d-block mb-2 mx-4 text-decoration-none text-secondary">
                        Infinix
                      </Link>
                    </div>
                  </div>
                  <div
                    style={{
                      width: "2px",
                      height: "10rem",
                      backgroundColor: "lightGrey",
                      marginTop: "2rem",
                    }}
                  />
                  <div className="col-sm-4 mt-2">
                    <div className="mx-3 pt-3">
                      <h6 className="text-secondary">
                        <FaMobileAlt className="mx-1" />
                        <b>Popular Mobile</b>
                      </h6>
                      <Link className="d-block mb-2 mx-4 text-decoration-none text-secondary">
                        IPhone 15 Pro
                      </Link>
                      <Link className="d-block mb-2 mx-4 text-decoration-none text-secondary">
                        Samsung Galaxy S22
                      </Link>
                      <Link className="d-block mb-2 mx-4 text-decoration-none text-secondary">
                        Xiaomi Redmi Note 13
                      </Link>
                      <Link className="d-block mb-2 mx-4 text-decoration-none text-secondary">
                        Samsung Galaxy S23
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </li>
        <li class="nav-item">
          <div
            style={{
              position: "rerlative",
              cursor: "pointer",
              display: "inline-block",
            }}
            onClick={handleClick}
          >
            <Link
              to="/accessories"
              className="mt-2 mx-3 d-flex align-items-center text-decoration-none text-black"
            >
              Accessories
              <IoMdArrowDropdown />
            </Link>

            {accessDropdown && (
              <div
                style={{
                  position: "absolute",
                  top: "5.29rem",
                  left: "32rem",
                  zIndex: "1",
                  color: "black",
                  backgroundColor: "#fff",
                  boxShadow: "0 5px 7px rgba(0, 0, 0, 0.1)",
                  borderRadius: "4px",
                  paddingLeft: "13px ",
                  paddingRight: "13px",
                  width: "65%",
                }}
              >
                <div className="d-flex flex-row">
                  <div className="col pt-3">
                    <Link className="d-block mb-2 text-decoration-none text-dark">
                      <h6 className="text-secondary">
                        <IoSearchOutline className="mx-1" />
                        <b>Find New Mobiles</b>
                      </h6>
                      <p className="mx-4">See new mobiles in Pakistan</p>
                    </Link>
                    <Link className="d-block mb-2 text-decoration-none text-dark">
                      <h6 className="text-secondary">
                        <MdOutlineDifference className="mx-1" />
                        <b>Mobile Comparison</b>
                      </h6>
                      <p className="mx-4">
                        Compare mobiles and find their differences
                      </p>
                    </Link>
                    <Link className="d-block mb-2 text-decoration-none text-dark">
                      <h6 className="text-secondary">
                        <MdRateReview className="mx-1" />
                        <b>Reviews</b>
                      </h6>
                      <p className="mx-4">
                        Read reviews of all mobiles in Pakistan
                      </p>
                    </Link>
                  </div>
                  <div
                    style={{
                      width: "2px",
                      height: "10rem",
                      backgroundColor: "lightGrey",
                      marginTop: "2rem",
                    }}
                  />
                  <div className="col-sm-3 mx-1 mt-2">
                    <div className="mx-4 pt-3">
                      <h6 className="text-secondary">
                        <FaMobileAlt className="mx-1" />
                        <b>Popular Brands</b>
                      </h6>
                      <Link className="d-block mb-2 mx-4 text-decoration-none text-secondary">
                        Apple
                      </Link>
                      <Link className="d-block mb-2 mx-4 text-decoration-none text-secondary">
                        Samsung
                      </Link>
                      <Link className="d-block mb-2 mx-4 text-decoration-none text-secondary">
                        Xiaomi
                      </Link>
                      <Link className="d-block mb-2 mx-4 text-decoration-none text-secondary">
                        Realme
                      </Link>
                      <Link className="d-block mb-2 mx-4 text-decoration-none text-secondary">
                        Infinix
                      </Link>
                    </div>
                  </div>
                  <div
                    style={{
                      width: "2px",
                      height: "10rem",
                      backgroundColor: "lightGrey",
                      marginTop: "2rem",
                    }}
                  />
                  <div className="col-sm-4 mt-2">
                    <div className="mx-3 pt-3">
                      <h6 className="text-secondary">
                        <FaMobileAlt className="mx-1" />
                        <b>Popular Mobile</b>
                      </h6>
                      <Link className="d-block mb-2 mx-4 text-decoration-none text-secondary">
                        IPhone 15 Pro
                      </Link>
                      <Link className="d-block mb-2 mx-4 text-decoration-none text-secondary">
                        Samsung Galaxy S22
                      </Link>
                      <Link className="d-block mb-2 mx-4 text-decoration-none text-secondary">
                        Xiaomi Redmi Note 13
                      </Link>
                      <Link className="d-block mb-2 mx-4 text-decoration-none text-secondary">
                        Samsung Galaxy S23
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </li>
        <li class="nav-item">
          <Link
            to="/mobilerepair"
            class="nav-link active text-dark"
            aria-current="page"
          >
            Mobile Repair
          </Link>
        </li>
        <li class="nav-item">
          <Link
            to="/bidingmobile"
            class="nav-link active text-dark"
            aria-current="page"
            href="#"
          >
            Bidding
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-dark" to="/comparisan">
            Comparison
          </Link>
        </li>
        
        <li class="nav-item">
          <Link class="nav-link text-dark" to="/blog">
            Blogs
          </Link>
        </li>
        <li class="nav-item">
          <Link to="/postmobilead">
            <button
              className="btn"
              style={{ backgroundColor: "#52AB98", color: "white" }}
            >
              Sell Your Mobile
            </button>
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
