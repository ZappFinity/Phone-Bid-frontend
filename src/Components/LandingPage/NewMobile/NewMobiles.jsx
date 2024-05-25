import React, { useState, useEffect, useRef } from "react";
import End from "../End";
import Navbar from "../Navbar";
import './Style.css'
import { IoFilter } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";

function NewMobiles() {
  const [data, setData] = useState([]);
  const [ram, setRam] = useState(false);
  const [city, setCity] = useState(false);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([]);
  const [price, setPrice] = useState(false);
  const [brand, setBrand] = useState(false);
  const [memory, setMemory] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [camera, setCamera] = useState(false);
  const [screen, setScreen] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [features, setFeatures] = useState(false);
  const [newDropdown, setNewDropdown] = useState(false);
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/mobile/new", {
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
    handleCloseDropdown();
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
    handleCloseDropdown();
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
    handleCloseDropdown();
  };

  const handleMobileFeatures = (feature) => {
    const filteredProducts = data.filter((product) => {
      return product[feature] === "Yes" || product[feature] === "Available";
    });
    setFilter(filteredProducts);
    handleCloseDropdown();
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
    handleCloseDropdown();
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
    handleCloseDropdown();
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
    handleCloseDropdown();
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

  const handleCloseDropdown = () => {
    setRam(false);
    setCity(false);
    setPrice(false);
    setBrand(false);
    setScreen(false);
    setMemory(false);
    setCamera(false);
    setFeatures(false);
    setNewDropdown(false);
  };
  const handleItemClick = () => {
    setNewDropdown(!newDropdown);
  };
  const handleCity = () => {
    setCity(!city);
  };
  const handleprice = (e) => {
    e.stopPropagation();
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
          {/* filtering for large screen  */}
          <div className="d-flex flex-column offset-1 mt-3 d-none d-sm-block">
            <h5
              className="p-3 text-white"
              style={{ backgroundColor: "#518ecb" }}
            >
              SHOW RESULT BY
            </h5>
            {/* search by keywords            */}
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
            </div>
            {/* city  */}
            <div class="nav-item">
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
                      marginBottom: "3px",
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
            </div>
            {/* price range  */}
            <div class="nav-item">
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
                      marginBottom: "3px",
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
            </div>
            {/* primary camera  */}
            <div class="nav-item">
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
                      marginBottom: "3px",
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
            </div>
            {/* ram  */}
            <div class="nav-item">
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
                      marginBottom: "3px",
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
            </div>
            {/* memory  */}
            <div class="nav-item">
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
                      marginBottom: "3px",
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
            </div>
            {/* brands  */}
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
            </div>
            {/* screen size  */}
            <div class="nav-item">
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
                      marginBottom: "3px",
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
            </div>
            {/* features  */}
            <div class="nav-item">
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
                      marginBottom: "3px",
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
            </div>
          </div>
          {/* filtering on small screen  */}
          <div className="col">
            <div
              className=" bg-white column d-flex d-lg-none justify-content-between p-2"
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
                       {/* city  */}
            <div class="nav-item">
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
                      marginBottom: "3px",
                      width: "17.5rem",
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="d-flex flex-column">
                      <span>Lahore</span>
                      <span>Karachi</span>
                      <span>Islamabad</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* price range  */}
            <div class="nav-item">
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
                      marginBottom: "3px",
                    }}
                    onClick={(e) => e.stopPropagation()}
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
            </div>
            {/* primary camera  */}
            <div class="nav-item">
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
                      marginBottom: "3px",
                      width: "17.5rem",
                    }}
                    onClick={(e) => e.stopPropagation()}
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
            </div>
            {/* ram  */}
            <div class="nav-item">
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
                      marginBottom: "3px",
                      width: "17.5rem",
                    }}
                    onClick={(e) => e.stopPropagation()}
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
            </div>
            {/* memory  */}
            <div class="nav-item">
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
                      marginBottom: "3px",
                      width: "17.5rem",
                    }}
                    onClick={(e) => e.stopPropagation()}
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
            </div>
            {/* brands  */}
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
            </div>
            {/* screen size  */}
            <div class="nav-item">
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
                      marginBottom: "3px",
                      width: "17.5rem",
                    }}
                    onClick={(e) => e.stopPropagation()}
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
            </div>
            {/* features  */}
            <div class="nav-item">
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
                      marginBottom: "3px",
                      width: "17.5rem",
                    }}
                    onClick={(e) => e.stopPropagation()}
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

            <div className="container mt-3 pb-5">
              <div className="row row-cols-2 row-cols-md-3 mx-0">
                {search || (notFound && filter.length === 0) ? (
                  <div>
                    <p
                        className='d-none d-sm-block'
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
                  filter.map((mobile) => (
                    <div
                      className="col mb-4"
                      key={mobile.id}
                    >
                      <div
                        className="card card-custom"
                        style={{
                          boxShadow: "0px 5px 12px 8px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        <div className="card-body d-flex flex-column justify-content-center align-item-center">
                          <img
                            src={mobile.image}
                            style={{ width: "4.5rem", height: "8rem" }}
                          />
                          <p className="card-title mt-2 mb-2">{mobile.name}</p>
                          <p>
                            <b>{mobile.price}</b>
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
