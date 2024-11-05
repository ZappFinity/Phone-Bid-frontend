import React, { useState } from "react";
import Navbar from "../Navbar";
import End from "../End";
import "./Style.css";
import mobileimg from '../../img/xiaomi.jpeg'
import { useNavigate } from "react-router-dom";

function MoblieType() {
  const [type, setType] = useState("");
  const navigate = useNavigate();

  // const handleTypeClick = (type, event) => {
  //   event.preventDefault();
  //   setType(type);
  //   if(type){
  //     navigate('/add', { state: { mobileType: type } });
  //   }
  // };
  const handleTypeClick = (selectedType, event) => {
    event.preventDefault();
    console.log('adaaaa');
    setType(selectedType); 
    console.log("selected type", selectedType);
    if (selectedType) {
    console.log("selected", selectedType);

      navigate('/add', { state: { mobileType: selectedType } });
    }
  };

  return (
    <>
      <Navbar />
      <div className="greyColor">
        <div className="p-5">
          <h1 className="grey">
            What kind of device are you having trouble with?
          </h1>
          <p className="text-secondary">
            Our experts will access your device and get it back to you in no
            time.
          </p>
        </div>

        <div className="container py-5">
          <div className="d-flex flex-row justify-content-center gap-5">
            <div
              className="card card-custom"
              style={{
                boxShadow: "0px 5px 12px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "1.5rem",
                cursor: 'pointer'
              }}
            >
              <div className="card-body d-flex flex-column ">
                <div className="d-flex flex-row justify-content-center">
                  <img
                    className="mb-2 "
                    src={mobileimg}
                    style={{ width: "8rem", height: "8rem" }}
                  />
                </div>
                <button
                  className="btn fw-bold grey text-center"
                  onClick={(e) => handleTypeClick('iPhone', e)}
                >
                  iPhone
                </button>
              </div>
            </div>
            <div
              className="card card-custom"
              style={{
                boxShadow: "0px 5px 12px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "1.5rem",
                cursor: 'pointer'
              }}
            >
              <div className="card-body d-flex flex-column ">
                <div className="d-flex flex-row justify-content-center">
                  <img
                    className="mb-2 "
                    src={mobileimg}
                    style={{ width: "8rem", height: "8rem" }}
                  />
                </div>
                <button
                  className="btn fw-bold grey text-center"
                  onClick={(e) => handleTypeClick('iPad', e)}
                >
                  iPad
                </button>
              </div>
            </div>
            <div
              className="card card-custom"
              style={{
                boxShadow: "0px 5px 12px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "1.5rem",
                cursor: 'pointer'
              }}
            >
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-row justify-content-center">
                  <img
                    className="mb-2 "
                    src={mobileimg}
                    style={{ width: "8rem", height: "8rem" }}
                  />
                </div>
                <button
                  className="btn fw-bold grey text-center"
                  onClick={(e) => handleTypeClick('Android', e)}
                >
                  Android
                </button>
              </div>
            </div>
            <div
              className="card card-custom"
              style={{
                boxShadow: "0px 5px 12px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "1.5rem",
                cursor: 'pointer'
              }}
            >
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-row justify-content-center">
                  <img
                    className="mb-2 "
                    src={mobileimg}
                    style={{ width: "8rem", height: "8rem" }}
                  />
                </div>
                <button
                  className="btn fw-bold grey text-center"
                  onClick={(e) => handleTypeClick('Tablet', e)}
                >
                  Tablet
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <End />
    </>
  );
}

export default MoblieType;
