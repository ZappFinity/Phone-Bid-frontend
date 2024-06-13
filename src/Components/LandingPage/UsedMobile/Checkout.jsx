import React from "react";
import { useLocation, Link } from "react-router-dom";
import Navbar from "../Navbar"; // Adjust the path as necessary
import End from "../End";

const NewMobileCheckout = () => {
  const location = useLocation();
  const { name, image, price } = location.state || {};
  console.log("Received props:", { name, image, price });
  return (
    <>
      <Navbar />
      <div className='greyColor'>
        {name && image && price ? (
            <div className="p-5">
          <div className='d-flex flex-row bg-white col-md-5 p-5 offset-4'>
            <img src={image} className="col-sm-4"/>
            <div className="px-5 pt-4">
              <h5>{name}</h5>
              <p>Price: {price}</p>
              <p>Address: Islamabad Blue Area</p>
              <p>Contact: 315 23657832</p>
              <p>Total price: {price}</p>
          <Link to='/usedmobile'><button className="btn greenColor text-white">Continue</button></Link>
            </div>
          </div>
          </div>
        ) : (
          <p>No mobile data available.</p>
        )}
      </div>
      <End/>
    </>
  );
};

export default NewMobileCheckout;