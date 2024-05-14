import React, { useState, useEffect, useRef } from "react";
import End from "../End";
import Navbar from "../Navbar";
import c15 from "../../img/realme-c15.png";
import c13 from "../../img/random-phone-0.png";
import c51 from "../../img/random-phone-1.png";
import featured from "../../img/featured.jpg";
import { TiTick } from "react-icons/ti";
import realme from "../../img/realme-c21.png";
import { IoMdArrowDropdown } from "react-icons/io";

function UsedMobiles() {
  const [data, setData] = useState([]);
  const [ram, setRam] = useState(false);
  const [city, setCity] = useState(false);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([]);
  const [brand, setBrand] = useState(false);
  const [price, setPrice] = useState(false);
  const [memory, setMemory] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [screen, setScreen] = useState(false);
  const [camera, setCamera] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [features, setFeatures] = useState(false);
  const [newDropdown, setNewDropdown] = useState(false);
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/mobile/used", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });

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
    const filtered = data.filter((mobile) =>
      mobile.name.toLowerCase().includes(lowerCaseSearch)
    );
    console.log("Filtered Data:", filtered);
    setFilter(filtered);
  };

  const handlePriceClick = () => {
    const min = parseFloat(priceRange.min.replace(/,/g, ""));
    const max = parseFloat(priceRange.max.replace(/,/g, ""));
    if (!isNaN(min) && !isNaN(max)) {
      const filtered = data.filter((item) => {
        const itemPrice = parseFloat(
          item.price.replace(/,/g, "").split(" ")[1]
        );
        const matches = itemPrice >= min && itemPrice <= max;
        return matches;
      });

      console.log("filter", filtered);
      setFilter(filtered);
    }
  };

  const handleCameraClick = (cameraType) => {
    console.log("Camera type:", cameraType);
    cameraType = cameraType.trim();
    const filteredProducts = data.filter((product) => {
      const matches = product.back_camera.includes(cameraType);
      return matches;
    });
    console.log("Filtered products:", filteredProducts);
    setFilter(filteredProducts);
    setSearch("");
  };

  const handleMobileBrand = (brand) => {
    brand = brand.trim();
    const filteredProducts = data.filter((product) => {
      const matches = product.name.includes(brand);
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
  };

  const handleMobileFeatures = (feature) => {
    const filteredProducts = data.filter((product) => {
      return product[feature] === "Yes" || product[feature] === "Available";
    });
    setFilter(filteredProducts);
  };

  const handleScreenSize = (size) => {
    const filteredProducts = data.filter((product) => {
      const screenSize = parseFloat(product.screen_size.replace(" inches", ""));
      if (size === "4 inch") {
        return screenSize <= 4.0;
      } else if (size === "4.0 inch to 4.5 inch") {
        return screenSize > 4.0 && screenSize <= 4.5;
      } else if (size === "4.5 inch to 5.0 inch") {
        return screenSize > 4.5 && screenSize <= 5.0;
      } else if (size === "5.0 inch to 5.5 inch") {
        return screenSize > 5.0 && screenSize <= 5.5;
      } else if (size === "5.5 inch to 6.9 inch") {
        return screenSize > 5.5 && screenSize <= 6.9;
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
  };

  const handleMobileRam = (ram) => {
    ram = ram.trim();
    const filteredProducts = data.filter((product) => {
      const matches = parseFloat(product.ram.replace("GB", " "));
      if (ram === "1GB or less") {
        return matches <= 1;
      } else if (ram === "2GB") {
        return matches == 2;
      } else if (ram === "3GB") {
        return matches == 3;
      } else if (ram === "4GB") {
        return matches == 4;
      } else if (ram === "6GB or more") {
        return matches >= 6;
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
  };

  const handleMobileMemory = (memory) => {
    memory = memory.trim();
    const filteredProducts = data.filter((product) => {
      const matches = product.internal_memory.includes(memory);
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
  };

  const extractBatteryCapacity = (batteryInfo) => {
    const regex = /(\d+)\s*mAh/;
    const match = batteryInfo.match(regex);
    if (match && match.length > 1) {
      return match[1] + "mAh";
    }
  };

  const extractCameraInfo = (cameraInfo) => {
    const details = cameraInfo.split(",")[0];
    return details.trim();
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setRam(false);
        setCity(false);
        setPrice(false);
        setBrand(false);
        setScreen(false);
        setMemory(false);
        setCamera(false);
        setFeatures(false);
        setNewDropdown(false);
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
  const handleCity = () => {
    setCity(!city);
  };
  const handleprice = () => {
    setPrice(!price);
  };
  const handleCamera = () => {
    setCamera(!camera);
  };
  const handleRam = () => {
    setRam(!ram);
  };
  const handleMemory = () => {
    setMemory(!memory);
  };
  const handleBrand = () => {
    setBrand(!brand);
  };
  const handleScreen = () => {
    setScreen(!screen);
  };
  const handleFeatures = () => {
    setFeatures(!features);
  };

  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: "#f2f3f3" }}>
        <h2 className="offset-1 pt-5 pb-3" style={{ color: "#233d7b" }}>
          Buy New Mobiles In Pakistan
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
                        placeholder="Iphone"
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
            </p>
            <p class="nav-item">
              <div
                style={{
                  position: "relative",
                  cursor: "pointer",
                  display: "inline-block",
                }}
                onClick={handleCity}
              >
                <h6
                  className="p-2 d-flex justify-content-between align-items-center text-decoration-none text-black bg-white"
                  style={{ width: "17.5rem" }}
                >
                  CITY
                  <IoMdArrowDropdown />
                </h6>

                {city && (
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
                      <span>Lahore</span>
                      <span>Karachi</span>
                      <span>Islamabad</span>
                    </div>
                  </div>
                )}
              </div>
            </p>
            <p class="nav-item">
              <div
                style={{
                  position: "rerlative",
                  cursor: "pointer",
                  display: "inline-block",
                }}
                onClick={handleprice}
              >
                <h6
                  className="p-2 d-flex justify-content-between align-items-center text-decoration-none text-black bg-white"
                  style={{ width: "17.5rem" }}
                >
                  PRICE RANGE
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
                    }}
                  >
                    <div class="input-group" style={{ width: "15.5rem" }}>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="From"
                        onClick={(e) => e.stopPropagation()}
                        value={priceRange.min}
                        onChange={(e) =>
                          setPriceRange({ ...priceRange, min: e.target.value })
                        }
                      />
                      <input
                        type="text"
                        class="form-control"
                        placeholder="To"
                        onClick={(e) => e.stopPropagation()}
                        value={priceRange.max}
                        onChange={(e) =>
                          setPriceRange({ ...priceRange, max: e.target.value })
                        }
                      />
                      <button
                        class="btn btn-outline-secondary text-white"
                        type="button"
                        style={{ backgroundColor: "#233d7b" }}
                        onClick={handlePriceClick}
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
                onClick={handleCamera}
              >
                <h6
                  className="p-2 d-flex justify-content-between align-items-center text-decoration-none text-black bg-white"
                  style={{ width: "17.5rem" }}
                >
                  PRIMARY CAMERA
                  <IoMdArrowDropdown />
                </h6>

                {camera && (
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
                      <span onClick={() => handleCameraClick("108 MP")}>
                        Minimum 108 MP
                      </span>
                      <span onClick={() => handleCameraClick("48 MP")}>
                        Minimum 48 MP
                      </span>
                      <span onClick={() => handleCameraClick("13 MP")}>
                        Minimum 13 MP
                      </span>
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
                onClick={handleRam}
              >
                <h6
                  className="p-2 d-flex justify-content-between align-items-center text-decoration-none text-black bg-white"
                  style={{ width: "17.5rem" }}
                >
                  RAM
                  <IoMdArrowDropdown />
                </h6>

                {ram && (
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
                      <span onClick={() => handleMobileRam("1GB or less")}>
                        1 GB or Less
                      </span>
                      <span onClick={() => handleMobileRam("2GB")}>2 GB</span>
                      <span onClick={() => handleMobileRam("3GB")}>3 GB</span>
                      <span onClick={() => handleMobileRam("4GB")}>4 GB</span>
                      <span onClick={() => handleMobileRam("6GB or more")}>
                        6 GB or More
                      </span>
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
                onClick={handleMemory}
              >
                <h6
                  className="p-2 d-flex justify-content-between align-items-center text-decoration-none text-black bg-white"
                  style={{ width: "17.5rem" }}
                >
                  MEMORY
                  <IoMdArrowDropdown />
                </h6>

                {memory && (
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
                      <span onClick={() => handleMobileMemory("4GB")}>
                        4 GB{" "}
                      </span>
                      <span onClick={() => handleMobileMemory("8GB")}>
                        8 GB
                      </span>
                      <span onClick={() => handleMobileMemory("16GB")}>
                        16 GB
                      </span>
                      <span onClick={() => handleMobileMemory("31GB")}>
                        31 GB
                      </span>
                      <span onClick={() => handleMobileMemory("64GB")}>
                        64 GB
                      </span>
                      <span onClick={() => handleMobileMemory("128GB")}>
                        128 GB
                      </span>
                      <span onClick={() => handleMobileMemory("256GB")}>
                        256 GB
                      </span>
                      <span onClick={() => handleMobileMemory("512GB")}>
                        512 GB
                      </span>
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
                      <span onClick={() => handleMobileBrand("Redmi")}>
                        Redmi
                      </span>
                      <span onClick={() => handleMobileBrand("Samsung")}>
                        Samsung{" "}
                      </span>
                      <span onClick={() => handleMobileBrand("Infinix")}>
                        Infinix
                      </span>
                      <span onClick={() => handleMobileBrand("Oppo")}>
                        Oppo
                      </span>
                      <span onClick={() => handleMobileBrand("Apple")}>
                        Apple
                      </span>
                      <span onClick={() => handleMobileBrand("Asus")}>
                        Asus
                      </span>
                      <span onClick={() => handleMobileBrand("Alcatel")}>
                        Alcatel
                      </span>
                      <span onClick={() => handleMobileBrand("Itel")}>
                        itel
                      </span>
                      <span onClick={() => handleMobileBrand("Google")}>
                        Google
                      </span>
                      <span onClick={() => handleMobileBrand("Oneplus")}>
                        Oneplus
                      </span>
                      <span onClick={() => handleMobileBrand("Haier")}>
                        Haier
                      </span>
                      <span onClick={() => handleMobileBrand("Huawei")}>
                        Huawei
                      </span>
                      <span onClick={() => handleMobileBrand("Nokia")}>
                        Nokia
                      </span>
                      <span onClick={() => handleMobileBrand("Motorola")}>
                        Motorola
                      </span>
                      <span onClick={() => handleMobileBrand("Sony")}>
                        Sony
                      </span>
                      <span onClick={() => handleMobileBrand("Vivo")}>
                        Vivo
                      </span>
                      <span onClick={() => handleMobileBrand("Realme")}>
                        Realme
                      </span>
                      <span onClick={() => handleMobileBrand("Lenovo")}>
                        Lenovo
                      </span>
                      <span onClick={() => handleMobileBrand("Xaiomi")}>
                        Xiaomi
                      </span>
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
                onClick={handleScreen}
              >
                <h6
                  className="p-2 d-flex justify-content-between align-items-center text-decoration-none text-black bg-white"
                  style={{ width: "17.5rem" }}
                >
                  SCREEN SIZE
                  <IoMdArrowDropdown />
                </h6>

                {screen && (
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
                      <span onClick={() => handleScreenSize("4 inch")}>
                        4 inch
                      </span>
                      <span
                        onClick={() => handleScreenSize("4.0 inch to 4.5 inch")}
                      >
                        4.0 inch to 4.5 inch
                      </span>
                      <span
                        onClick={() => handleScreenSize("4.5 inch to 5.0 inch")}
                      >
                        4.5 inch to 5.0 inch
                      </span>
                      <span
                        onClick={() => handleScreenSize("5.0 inch to 5.5 inch")}
                      >
                        5.0 inch to 5.5 inch
                      </span>
                      <span
                        onClick={() => handleScreenSize("5.5 inch to 6.9 inch")}
                      >
                        5.5 inch to 6.9 inch
                      </span>
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
                onClick={handleFeatures}
              >
                <h6
                  className="p-2 d-flex justify-content-between align-items-center text-decoration-none text-black bg-white"
                  style={{ width: "17.5rem" }}
                >
                  FEATURES
                  <IoMdArrowDropdown />
                </h6>

                {features && (
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
                      <span onClick={() => handleMobileFeatures("back_flash")}>
                        Flash Light{" "}
                      </span>
                      <span onClick={() => handleMobileFeatures("Auto Focus")}>
                        Auto Focus
                      </span>
                      <span onClick={() => handleMobileFeatures("bluetooth")}>
                        Bluetooth
                      </span>
                      <span onClick={() => handleMobileFeatures("3G")}>3G</span>
                      <span onClick={() => handleMobileFeatures("4G/LTE")}>
                        4G / LTE
                      </span>
                      <span onClick={() => handleMobileFeatures("5G")}>5G</span>
                      <span onClick={() => handleMobileFeatures("wifi")}>
                        Wifi
                      </span>
                      <span onClick={() => handleMobileFeatures("nfc")}>
                        NFC
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </p>
          </div>

          <div className="d-flex flex-column">
            {search || (notFound && filter.length === 0) ? (
              <div>
                <p
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
              </div>
            ) : (
              <>
                {filter.slice(0, 3).map((mobile) => (
                  <div className="d-flex flex-column" key={mobile.id}>
                    <div style={{ width: "125%" }}>
                      <span
                        style={{
                          position: "relative",
                          top: "1.70rem",
                          zIndex: "1",
                          backgroundColor: "red",
                          color: "white",
                          borderRadius: "0%",
                          boxShadow: "0px 5px 12px 8px rgba(0, 0, 0, 0.1)",
                        }}
                        className="p-1"
                      >
                        Featured
                      </span>
                      <div
                        style={{ boxShadow: "0 5px 7px rgba(0, 0, 0, 0.1)" }}
                      >
                        <div className="d-flex flex-row  bg-white">
                          <div>
                            <img
                              src={mobile.image}
                              className="mt-4 mx-4 mb-3"
                              style={{ height: "8rem", width: "8rem" }}
                            />
                          </div>
                          <div className="d-flex flex-column mt-3 mb-3">
                            <h5 className="">{mobile.name} for Sale</h5>
                            <p className="card-text">Islamabad</p>
                            <p>
                              {mobile.ram} | {mobile.internal_memory} |{" "}
                              {extractBatteryCapacity(mobile.battery)} |{" "}
                              {extractCameraInfo(mobile.back_camera)}
                            </p>
                            <p>Last Updated: about 1 hour ago</p>
                          </div>
                          <div className="d-flex flex-column justify-content-between offset-2 pt-3 pb-2">
                            <h4 className="px-4">{mobile.price}</h4>
                            <button
                              className="btn mb-3 px-3"
                              style={{
                                cursor: "pointer",
                                backgroundColor: "#52AB98",
                                color: "white",
                                borderRadius: "0",
                                width: "12rem",
                              }}
                            >
                              Show Phone Number
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <div
                  className="bg-white mb-3 mt-2"
                  style={{
                    boxShadow: "0 5px 7px rgba(0, 0, 0, 0.1)",
                    width: "125%",
                  }}
                >
                  <span
                    style={{
                      position: "relative",
                      bottom: ".5rem",
                      left: "20rem",
                      zIndex: "1",
                      backgroundColor: "#518ecb",
                      color: "white",
                      borderRadius: "20px",
                      boxShadow: "0px 5px 12px 8px rgba(0, 0, 0, 0.1)",
                    }}
                    className="px-4 py-2"
                  >
                    PhoneBid Certified
                  </span>
                  <div className="d-flex flex-row pt-2">
                    <h6 className="offset-2 ">
                      PhoneBid ki Certified Inventory main se apny pasand ka
                      mobile kardain
                    </h6>
                    <p className="text-primary px-5">View All</p>
                  </div>
                  <div className="d-flex flex-row gap-3">
                    <p className="offset-1">
                      <TiTick className="fs-5 text-success" />
                      Deal with PhoneBid Sales Expert
                    </p>
                    <p>
                      <TiTick className="fs-5 text-success" />
                      Inspection Report Attached
                    </p>
                    <p>
                      <TiTick className="fs-5 text-success" />
                      Secure Transaction
                    </p>
                  </div>
                  <div class="d-flex flex-row gap-5 offset-2 ">
                    <div
                      class="card w-15 mb-4"
                      style={{ boxShadow: "0 5px 7px rgba(0, 0, 0, 0.1)" }}
                    >
                      <img
                        src={c13}
                        style={{ width: "9.25rem", height: "9rem" }}
                      />
                      <div class="card-body">
                        <h6 class="card-title">Realme C13</h6>
                        <p5 class="card-text text-success">PKR 75,000</p5>
                        <p className="text-secondary">Islamabad</p>
                      </div>
                    </div>
                    <div
                      class="card w-15 mb-4"
                      style={{ boxShadow: "0 5px 7px rgba(0, 0, 0, 0.1)" }}
                    >
                      <img
                        src={c13}
                        style={{ width: "9.25rem", height: "9rem" }}
                      />
                      <div class="card-body">
                        <h6 class="card-title">Realme C13</h6>
                        <p5 class="card-text text-success">PKR 75,000</p5>
                        <p className="text-secondary">Islamabad</p>
                      </div>
                    </div>
                    <div
                      class="card w-15 mb-4"
                      style={{ boxShadow: "0 5px 7px rgba(0, 0, 0, 0.1)" }}
                    >
                      <img
                        src={c13}
                        style={{ width: "9.25rem", height: "9rem" }}
                      />
                      <div class="card-body">
                        <h6 class="card-title">Realme C13</h6>
                        <p5 class="card-text text-success">PKR 75,000</p5>
                        <p className="text-secondary">Islamabad</p>
                      </div>
                    </div>
                  </div>
                </div>

                {filter.slice(0, 3).map((mobile) => (
                  <div className="d-flex flex-column" key={mobile.id}>
                    <div className="mb-3" style={{ width: "125%" }}>
                      <div
                        style={{ boxShadow: "0 5px 7px rgba(0, 0, 0, 0.1)" }}
                      >
                        <div className="d-flex flex-row  bg-white">
                          <div>
                            <img
                              src={mobile.image}
                              className="mt-4 mx-4 mb-3"
                              style={{ height: "8rem", width: "8rem" }}
                            />
                          </div>
                          <div className="d-flex flex-column mt-3 mb-3">
                            <h5 className="">{mobile.name} for Sale</h5>
                            <p className="card-text">Islamabad</p>
                            <p>
                              {mobile.ram} | {mobile.internal_memory} |{" "}
                              {extractBatteryCapacity(mobile.battery)}|{" "}
                              {extractCameraInfo(mobile.back_camera)}
                            </p>
                            <p>Last Updated: about 1 hour ago</p>
                          </div>
                          <div className="d-flex flex-column justify-content-between offset-2 pt-3 pb-2">
                            <h4 className="px-4">{mobile.price}</h4>
                            <button
                              className="btn mb-3 px-3"
                              style={{
                                cursor: "pointer",
                                backgroundColor: "#52AB98",
                                color: "white",
                                borderRadius: "0",
                                width: "12rem",
                              }}
                            >
                              Show Phone Number
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <div
                  className="bg-white mb-3 mt-2"
                  style={{
                    boxShadow: "0 5px 7px rgba(0, 0, 0, 0.1)",
                    width: "125%",
                  }}
                >
                  <div className="d-flex flex-row pt-2 justify-content-evenly">
                    <div className="d-flex flex-column col-sm-5">
                      <h6 className="" style={{ color: "#2b6777" }}>
                        Get Your Ad Featured for more Calls and to Sell Quicker
                      </h6>
                      <p className="">
                        <TiTick className="fs-5 text-success" />
                        Sell up to <b>10x faster</b>
                      </p>
                      <p>
                        <TiTick className="fs-5 text-success" />
                        Get your Ad noticed by <b>50 lac+ Buyers</b>
                      </p>
                      <p>
                        <TiTick className="fs-5 text-success" />
                        Standout with the <b>Feature Ad tag</b>
                      </p>
                    </div>

                    <img
                      src={featured}
                      style={{ width: "13.25rem", height: "10rem" }}
                    />
                  </div>
                </div>

                {filter.map((mobile) => (
                  <div className="d-flex flex-column" key={mobile.id}>
                    <div style={{ width: "125%" }}>
                      <div
                        style={{ boxShadow: "0 5px 7px rgba(0, 0, 0, 0.1)" }}
                      >
                        <div className="d-flex flex-row bg-white mb-3">
                          <div>
                            <img
                              src={mobile.image}
                              className="mt-3 mx-4 mb-3"
                              style={{ height: "8rem", width: "8rem" }}
                            />
                          </div>
                          <div className="d-flex flex-column mt-3 mb-3">
                            <h5 className="">{mobile.name} for Sale</h5>
                            <p className="card-text">Islamabad</p>
                            <p>
                              {mobile.ram} | {mobile.internal_memory} |{" "}
                              {extractBatteryCapacity(mobile.battery)} |{" "}
                              {extractCameraInfo(mobile.back_camera)}
                            </p>
                            <p>Last Updated: about 1 hour ago</p>
                          </div>
                          <div className="d-flex flex-column justify-content-between offset-2 pt-3 pb-2">
                            <h4 className="px-3">{mobile.price}</h4>
                            <button
                              className="btn mb-3 px-3"
                              style={{
                                cursor: "pointer",
                                backgroundColor: "#52AB98",
                                color: "white",
                                borderRadius: "0",
                                width: "12rem",
                              }}
                            >
                              Show Phone Number
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
      <End />
    </>
  );
}

export default UsedMobiles;
