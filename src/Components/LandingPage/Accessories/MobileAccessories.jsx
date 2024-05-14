import React, { useState, useEffect, useRef } from "react";
import End from "../End";
import Navbar from "../Navbar";
import airbuds from "../../img/airbuds.jpeg";
import { IoMdArrowDropdown } from "react-icons/io";

function NewMobiles() {
  const [price, setPrice] = useState(false);
  const [brand, setBrand] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [sorting, setSorting] = useState(false);
  const [accessories, setAccessories] = useState(false);
  const [newDropdown, setNewDropdown] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSorting(false);
        setAccessories(false);
        setPrice(false);
        setBrand(false);
        setNewDropdown(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleItemClick = (e) => {
    e.stopPropagation();
    setNewDropdown(!newDropdown);
  };
  const handleSorting = () => {
    setSorting(!sorting);
  };
  const handleAccessories = () => {
    setAccessories(!accessories);
  };
  const handleprice = (e) => {
    setPrice(!price);
  };
  const handleBrand = () => {
    setBrand(!brand);
  };

  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: "#f2f3f3" }}>
        <h2 className="offset-1 pt-5 pb-3" style={{ color: "#233d7b" }}>
          Buy Accessories In Pakistan
        </h2>
        <div className="d-flex flex-row gap-4">
          <div className="d-flex flex-column offset-1 mt-3">
            <h5
              className="p-3 text-white"
              style={{ backgroundColor: "#518ecb" }}
            >
              SHOW RESULT BY
            </h5>
            <p class="nav-item">
              <div
                style={{
                  position: "rerlative",
                  cursor: "pointer",
                  display: "inline-block",
                }}
                onClick={handleItemClick}
              >
                <h6
                  className="p-2 d-flex justify-content-between align-items-center text-decoration-none text-black bg-white"
                  style={{ width: "17.5rem" }}
                >
                  Search By Keywords
                  <IoMdArrowDropdown />
                </h6>

                {newDropdown && (
                  <div
                    style={{
                      position: "relative",
                      color: "black",
                      backgroundColor: "#fff",
                      boxShadow: "0 5px 7px rgba(0, 0, 0, 0.1)",
                      borderRadius: "4px",
                      paddingLeft: "15px ",
                      paddingRight: "15px",
                      paddingTop: "5px",
                      paddingBottom: "5px",
                    }}
                  >
                    <div class="input-group w-100">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="search ..."
                        onClick={(e) => e.stopPropagation()}
                      />
                      <button
                        class="btn btn-outline-secondary text-white"
                        type="button"
                        style={{ backgroundColor: "#233d7b" }}
                      >
                        Go
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </p>
            <p class="nav-item">
              <div
                style={{
                  position: "relative",
                  cursor: "pointer",
                  display: "inline-block",
                }}
                onClick={handleSorting}
              >
                <h6
                  className="p-2 d-flex justify-content-between align-items-center text-decoration-none text-black bg-white"
                  style={{ width: "17.5rem" }}
                >
                  Sorting
                  <IoMdArrowDropdown />
                </h6>

                {sorting && (
                  <div
                    style={{
                      position: "relative",
                      color: "black",
                      backgroundColor: "#fff",
                      boxShadow: "0 5px 7px rgba(0, 0, 0, 0.1)",
                      borderRadius: "4px",
                      paddingLeft: "15px ",
                      paddingRight: "15px",
                      paddingTop: "5px",
                      paddingBottom: "5px",
                      width: "17.5rem",
                    }}
                  >
                    <div className="d-flex flex-column">
                      <span>Popularity</span>
                      <span>Price (Low to High)</span>
                      <span>Price (High to Low)</span>
                    </div>
                  </div>
                )}
              </div>
            </p>
            <p class="nav-item">
              <div
                style={{
                  position: "relative",
                  cursor: "pointer",
                  display: "inline-block",
                }}
                onClick={handleAccessories}
              >
                <h6
                  className="p-2 d-flex justify-content-between align-items-center text-decoration-none text-black bg-white"
                  style={{ width: "17.5rem" }}
                >
                  Accessories
                  <IoMdArrowDropdown />
                </h6>

                {accessories && (
                  <div
                    style={{
                      position: "relative",
                      color: "black",
                      backgroundColor: "#fff",
                      boxShadow: "0 5px 7px rgba(0, 0, 0, 0.1)",
                      borderRadius: "4px",
                      paddingLeft: "15px ",
                      paddingRight: "15px",
                      paddingTop: "5px",
                      paddingBottom: "5px",
                      width: "17.5rem",
                    }}
                  >
                    <div className="d-flex flex-column">
                      <span>Headphones</span>
                      <span>Cables</span>
                      <span>Chargers</span>
                      <sapn>Earpods</sapn>
                      <span>Covers</span>
                      <span>Screen Protector</span>
                    </div>
                  </div>
                )}
              </div>
            </p>
            <p class="nav-item">
              <div
                style={{
                  position: "relative",
                  cursor: "pointer",
                  display: "inline-block",
                }}
                onClick={handleprice}
              >
                <h6
                  className="p-2 d-flex justify-content-between align-items-center text-decoration-none text-black bg-white"
                  style={{ width: "17.5rem" }}
                >
                  Price Range
                  <IoMdArrowDropdown />
                </h6>

                {price && (
                  <div
                    style={{
                      position: "relative",
                      color: "black",
                      backgroundColor: "#fff",
                      boxShadow: "0 5px 7px rgba(0, 0, 0, 0.1)",
                      borderRadius: "4px",
                      paddingLeft: "15px ",
                      paddingRight: "15px",
                      paddingTop: "5px",
                      paddingBottom: "5px",
                      width: "17.5rem",
                    }}
                  >
                    <div className="d-flex flex-column">
                      <span>Below Rs. 2,000</span>
                      <span>Rs. 2,000 - Rs. 4,000</span>
                      <span>Rs. 4,000 - Rs. 6,000</span>
                      <span>Rs. 6,000 - Rs. 8,000</span>
                      <span>Above Rs. 8,000</span>
                    </div>
                  </div>
                )}
              </div>
            </p>
            <p class="nav-item">
              <div
                style={{
                  position: "relative",
                  cursor: "pointer",
                  display: "inline-block",
                }}
                onClick={handleBrand}
              >
                <h6
                  className="p-2 d-flex justify-content-between align-items-center text-decoration-none text-black bg-white"
                  style={{ width: "17.5rem" }}
                >
                  BRANDS
                  <IoMdArrowDropdown />
                </h6>

                {brand && (
                  <div
                    style={{
                      position: "relative",
                      color: "black",
                      backgroundColor: "#fff",
                      boxShadow: "0 5px 7px rgba(0, 0, 0, 0.1)",
                      borderRadius: "4px",
                      paddingLeft: "15px ",
                      paddingRight: "15px",
                      paddingTop: "5px",
                      paddingBottom: "5px",
                      width: "17.5rem",
                    }}
                  >
                    <div className="d-flex flex-column">
                      <span>Audionic</span>
                      <span>Remax </span>
                      <span>Romoss</span>
                      <span>Anker</span>
                      <span>Mi</span>
                      <span>JBL</span>
                      <span>Airox</span>
                      <span>Amezfit</span>
                      <span>Oppo</span>
                      <span>Tronsmart</span>
                    </div>
                  </div>
                )}
              </div>
            </p>
          </div>

          <div className="container mt-3 pb-5 d-sm-flex d-none">
            <div className="row row-cols-3 row-cols-md-1 mx-0">
              <div className="col" style={{ width: "18rem", height: "18rem" }}>
                <div
                  className="card"
                  style={{
                    boxShadow: "0px 5px 12px 8px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <div className="card-body d-flex flex-column justify-content-center align-item-center">
                    <img
                      src={airbuds}
                      style={{ width: "4.5rem", height: "8rem" }}
                    />
                    <p className="card-title mt-2 mb-2">Audionic Airbuds 500</p>
                    <p>
                      <b>Rs. 3,999</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <End />
    </>
  );
}

export default NewMobiles;
