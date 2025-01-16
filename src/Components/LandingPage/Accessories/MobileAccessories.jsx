import React, { useState, useEffect, useRef } from "react";
import End from "../End";
import Navbar from "../Navbar";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoFilter } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./Style.css";

function NewMobiles({ accessories }) {
  const [data, setData] = useState([]);
  const [price, setPrice] = useState(false);
  const [brand, setBrand] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [sorting, setSorting] = useState(false);
  const [name, setName] = useState(false);
  const [newDropdown, setNewDropdown] = useState(false);
  const [searchInitiated, setSearchInitiated] = useState(false);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([]);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/accessories/list",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );

        if (response.ok) {
          const responseData = await response.json();
          setData(responseData.data || []);
          setFilter(responseData.data || []);
        } else {
          console.error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleGoClick = () => {
    const lowerCaseSearch = search.toLowerCase();
    const filtered = data.filter((name) =>
      name.name.toLowerCase().includes(lowerCaseSearch)
    );
    console.log("Filtered Data:", filtered);
    setFilter(filtered);
    setSearchInitiated(true);

    if (filtered.length === 0) {
      setNotFound(true);
    } else {
      setNotFound(false);
    }
  };

  const handleAccessoriesBrand = (brand) => {
    brand = brand.trim();
    const filteredProducts = data.filter((product) => {
      const matches = product.brand.includes(brand);
      return matches;
    });
    console.log("Filtered products:", filteredProducts);
    setFilter(filteredProducts);
    setSearch("");
    handleCloseDropdown();
  };

  const handlePrice = (price) => {
    const filteredProducts = data.filter((product) => {
      const priceRange = parseInt(product.price, 10);
      if (price === "Below Rs. 2,000") {
        return priceRange <= 2000;
      } else if (price === "Rs. 2,000 - Rs. 4,000") {
        return priceRange > 2000 && priceRange <= 4000;
      } else if (price === "Rs. 4,000 - Rs. 6,000") {
        return priceRange > 4000 && priceRange <= 6000;
      } else if (price === "Rs. 6,000 - Rs. 8,000") {
        return priceRange > 6000 && priceRange <= 8000;
      } else if (price === "Above Rs. 8,000") {
        return priceRange > 8000;
      }
    });

    console.log("Filtered products:", filteredProducts);

    if (filteredProducts.length === 0) {
      setFilter([]);
      setNotFound(true);
    } else {
      setFilter(filteredProducts);
      setNotFound(false);
    }
    handleCloseDropdown();
  };

  const handleType = (type) => {
    type = type.trim();
    const filteredProducts = data.filter((product) => {
      const matches = product.type.includes(type);
      return matches;
    });
    console.log("Filtered products:", filteredProducts);
    if (filteredProducts.length === 0) {
      setFilter([]);
      setNotFound(true);
    } else {
      setFilter(filteredProducts);
      setNotFound(false);
    }
    handleCloseDropdown();
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSorting(false);
        setName(false);
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

  const handleCloseDropdown = () => {
    setNewDropdown(false);
    setSorting(false);
    setName(false);
    setPrice(false);
    setBrand(false);
  };

  const handleItemClick = () => {
    setNewDropdown(!newDropdown);
  };
  const handleSorting = () => {
    setSorting(!sorting);
  };
  const handleAccessories = () => {
    setName(!name);
  };
  const handleprice = () => {
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
          {/* Filtering on big screen  */}
          <div className="d-none d-lg-block flex-column offset-1 mt-3">
            <h5
              className="p-3 text-white"
              style={{ backgroundColor: "#518ecb" }}
            >
              SHOW RESULT BY
            </h5>
            <div class="nav-item">
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
                      marginBottom: "3px",
                    }}
                  >
                    <div class="input-group w-100">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="search ..."
                        onClick={(e) => e.stopPropagation()}
                        onChange={handleSearchChange}
                      />
                      <button
                        class="btn btn-outline-secondary text-white"
                        type="button"
                        style={{ backgroundColor: "#233d7b" }}
                        onClick={handleGoClick}
                      >
                        Go
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div class="nav-item">
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
                      marginBottom: "3px",
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
            </div>
            <div class="nav-item">
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

                {name && (
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
                      marginBottom: "3px",
                      width: "17.5rem",
                    }}
                  >
                    <div className="d-flex flex-column">
                      <span onClick={() => handleType("Headphones")}>
                        Headphones
                      </span>
                      <span onClick={() => handleType("Power Bank")}>
                        Power Bank
                      </span>
                      <span onClick={() => handleType("Chargers")}>
                        Chargers
                      </span>
                      <sapn onClick={() => handleType("Earbuds")}>Earbuds</sapn>
                      <span onClick={() => handleType("Covers")}>Covers</span>
                      <span onClick={() => handleType("Screen Protector")}>
                        Screen Protector
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div class="nav-item">
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
                      marginBottom: "3px",
                      width: "17.5rem",
                    }}
                  >
                    <div className="d-flex flex-column">
                      <span onClick={() => handlePrice("Below Rs. 2,000")}>
                        Below Rs. 2,000
                      </span>
                      <span
                        onClick={() => handlePrice("Rs. 2,000 - Rs. 4,000")}
                      >
                        Rs. 2,000 - Rs. 4,000
                      </span>
                      <span
                        onClick={() => handlePrice("Rs. 4,000 - Rs. 6,000")}
                      >
                        Rs. 4,000 - Rs. 6,000
                      </span>
                      <span
                        onClick={() => handlePrice("Rs. 6,000 - Rs. 8,000")}
                      >
                        Rs. 6,000 - Rs. 8,000
                      </span>
                      <span onClick={() => handlePrice("Above Rs. 8,000")}>
                        Above Rs. 8,000
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div class="nav-item">
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
                      marginBottom: "3px",
                      width: "17.5rem",
                    }}
                  >
                    <div className="d-flex flex-column">
                      <span onClick={() => handleAccessoriesBrand("Audionic")}>
                        Audionic
                      </span>
                      <span onClick={() => handleAccessoriesBrand("Remax")}>
                        Remax{" "}
                      </span>
                      <span onClick={() => handleAccessoriesBrand("Romoss")}>
                        Romoss
                      </span>
                      <span onClick={() => handleAccessoriesBrand("Max")}>
                        Max
                      </span>
                      <span onClick={() => handleAccessoriesBrand("Mi")}>
                        Mi
                      </span>
                      <span onClick={() => handleAccessoriesBrand("JBL")}>
                        JBL
                      </span>
                      <span onClick={() => handleAccessoriesBrand("Airox")}>
                        Airox
                      </span>
                      <span onClick={() => handleAccessoriesBrand("Mibro")}>
                        Mibro
                      </span>
                      <span onClick={() => handleAccessoriesBrand("Oppo")}>
                        Oppo
                      </span>
                      <span onClick={() => handleAccessoriesBrand("Tromsmart")}>
                        Tronsmart
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* filtering on small screen  */}
          <div className="col">
            <div
              className=" bg-white column d-flex d-md-flex d-lg-none justify-content-between p-2"
              style={{ width: "88%", marginLeft: "2rem" }}
            >
              <div>
                {/* main dropdown   */}
                <div
                  style={{
                    position: "rerlative",
                    cursor: "pointer",
                    display: "inline-block",
                  }}
                  onClick={handleItemClick}
                >
                  <button
                    className="btn px-2"
                    style={{ backgroundColor: "#c8d8e4" }}
                  >
                    <IoFilter className="mx-2" />
                    Filter
                  </button>

                  {newDropdown && (
                    <div
                      style={{
                        position: "absolute",
                        zIndex: "3",
                        left: "2rem",
                        color: "black",
                        backgroundColor: "#fff",
                        boxShadow: "0 5px 7px rgba(0, 0, 0, 0.1)",
                        borderRadius: "4px",
                        paddingLeft: "15px ",
                        paddingRight: "15px",
                        paddingTop: "5px",
                        paddingBottom: "5px",
                        marginBottom: "3px",
                      }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div class="nav-item">
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
                                marginBottom: "3px",
                                width: "17.5rem",
                              }}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <div className="d-flex flex-column">
                                <span>Popularity</span>
                                <span>Price (Low to High)</span>
                                <span>Price (High to Low)</span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      <div class="nav-item">
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

                          {name && (
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
                                marginBottom: "3px",
                                width: "17.5rem",
                              }}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <div className="d-flex flex-column">
                                <span onClick={() => handleType("Headphones")}>
                                  Headphones
                                </span>
                                <span onClick={() => handleType("Power Bank")}>
                                  Power Bank
                                </span>
                                <span onClick={() => handleType("Chargers")}>
                                  Chargers
                                </span>
                                <sapn onClick={() => handleType("Earbuds")}>
                                  Earbuds
                                </sapn>
                                <span onClick={() => handleType("Covers")}>
                                  Covers
                                </span>
                                <span
                                  onClick={() => handleType("Screen Protector")}
                                >
                                  Screen Protector
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      <div class="nav-item">
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
                                marginBottom: "3px",
                                width: "17.5rem",
                              }}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <div className="d-flex flex-column">
                                <span
                                  onClick={() => handlePrice("Below Rs. 2,000")}
                                >
                                  Below Rs. 2,000
                                </span>
                                <span
                                  onClick={() =>
                                    handlePrice("Rs. 2,000 - Rs. 4,000")
                                  }
                                >
                                  Rs. 2,000 - Rs. 4,000
                                </span>
                                <span
                                  onClick={() =>
                                    handlePrice("Rs. 4,000 - Rs. 6,000")
                                  }
                                >
                                  Rs. 4,000 - Rs. 6,000
                                </span>
                                <span
                                  onClick={() =>
                                    handlePrice("Rs. 6,000 - Rs. 8,000")
                                  }
                                >
                                  Rs. 6,000 - Rs. 8,000
                                </span>
                                <span
                                  onClick={() => handlePrice("Above Rs. 8,000")}
                                >
                                  Above Rs. 8,000
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      <div class="nav-item">
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
                                marginBottom: "3px",
                                width: "17.5rem",
                              }}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <div className="d-flex flex-column">
                                <span
                                  onClick={() =>
                                    handleAccessoriesBrand("Audionic")
                                  }
                                >
                                  Audionic
                                </span>
                                <span
                                  onClick={() =>
                                    handleAccessoriesBrand("Remax")
                                  }
                                >
                                  Remax{" "}
                                </span>
                                <span
                                  onClick={() =>
                                    handleAccessoriesBrand("Romoss")
                                  }
                                >
                                  Romoss
                                </span>
                                <span
                                  onClick={() => handleAccessoriesBrand("Max")}
                                >
                                  Max
                                </span>
                                <span
                                  onClick={() => handleAccessoriesBrand("Mi")}
                                >
                                  Mi
                                </span>
                                <span
                                  onClick={() => handleAccessoriesBrand("JBL")}
                                >
                                  JBL
                                </span>
                                <span
                                  onClick={() =>
                                    handleAccessoriesBrand("Airox")
                                  }
                                >
                                  Airox
                                </span>
                                <span
                                  onClick={() =>
                                    handleAccessoriesBrand("Mibro")
                                  }
                                >
                                  Mibro
                                </span>
                                <span
                                  onClick={() => handleAccessoriesBrand("Oppo")}
                                >
                                  Oppo
                                </span>
                                <span
                                  onClick={() =>
                                    handleAccessoriesBrand("Tromsmart")
                                  }
                                >
                                  Tronsmart
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div class="nav-item">
                <div class="input-group w-100">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="search ..."
                    onClick={(e) => e.stopPropagation()}
                    onChange={handleSearchChange}
                  />
                  <button
                    class="btn btn-outline-secondary text-white"
                    type="button"
                    style={{ backgroundColor: "#233d7b" }}
                    onClick={handleGoClick}
                  >
                    Go
                  </button>
                </div>
              </div>
            </div>

            {/* <div className="container mt-3 pb-5 ">
              <div className="row row-cols-2 row-cols-md-3  mx-0">
                {searchInitiated && notFound ? (
                  <div>
                    <p
                    className="d-none d-sm-block"
                      style={{
                        position: "relative",
                        top: "10rem",
                        left: "20rem",
                        color: "black",
                        backgroundColor: "#fff",
                        boxShadow: "0 5px 7px rgba(0, 0, 0, 0.1)",
                        borderRadius: "4px",
                        width: "10rem",
                        paddingLeft: "15px ",
                        paddingRight: "15px",
                        paddingTop: "5px",
                        paddingBottom: "5px",
                      }}
                    >
                      No results found
                    </p>
                    <p
                    className="d-flex d-lg-none"
                      style={{
                        position: "relative",
                        top: "2rem",
                        left: "8rem",
                        color: "black",
                        backgroundColor: "#fff",
                        boxShadow: "0 5px 7px rgba(0, 0, 0, 0.1)",
                        borderRadius: "4px",
                        width: "10rem",
                        paddingLeft: "15px ",
                        paddingRight: "15px",
                        paddingTop: "5px",
                        paddingBottom: "5px",
                      }}
                    >
                      No results found
                    </p>
                  </div>
                ) : (
                  filter.map((accessories) => (
                    <div
                      className="col mb-4"
                      key={accessories.id}
                    >
                      <div
                        className="card card-custom"
                        style={{
                          boxShadow: "0px 5px 12px 8px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        <div className="card-body d-flex flex-column justify-content-center align-item-center">
                          <img
                            src={accessories.image}
                            className="offset-5"
                            style={{ width: "4.5rem", height: "6rem" }}
                          />
                           <Link to={`/accessoriesdetail/${accessories.id}`} className="text-decoration-none text-black">
                          <p className="card-title mt-2 mb-2">
                            {accessories.name}
                          </p>
                          </Link>
                          <p>
                            <b>{accessories.price}</b>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div> */}

            <div className="container mt-3 pb-5">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5">
                {searchInitiated && notFound ? (
                  <div className="d-flex justify-content-center align-items-center w-100">
                    <p
                      className="text-center"
                      style={{
                        color: "black",
                        backgroundColor: "#fff",
                        boxShadow: "0 5px 7px rgba(0, 0, 0, 0.1)",
                        borderRadius: "4px",
                        width: "12rem",
                        padding: "10px",
                      }}
                    >
                      No results found
                    </p>
                  </div>
                ) : (
                  filter.map((accessories) => (
                    <div className="col-12 col-sm-7 col-md-6 col-lg-4 gap-5" key={accessories.id}>
                      <div
                        className="card card-custom h-100 "
                        style={{
                          boxShadow: "0px 5px 12px 8px rgba(0, 0, 0, 0.1)",
                          borderRadius: "1rem",
                        }}
                      >
                        <div className="card-body d-flex flex-column justify-content-center align-items-center">
                          <img
                            src={accessories.image}
                            className="mb-3"
                            style={{
                              width: "8rem",
                              height: "8rem",
                              objectFit: "cover",
                            }}
                            alt={accessories.name}
                          />
                          <Link
                            to={`/accessoriesdetail/${accessories.id}`}
                            className="text-decoration-none text-black text-center"
                          >
                            <p className="card-title fw-bold mb-2">
                              {accessories.name}
                            </p>
                          </Link>
                          <p className="text-center text-primary fw-bold">
                            {accessories.price}
                          </p>
                        </div>
                      </div>
                    </div>
                   
                  ))
                )}
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
