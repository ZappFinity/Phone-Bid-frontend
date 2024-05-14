import React from 'react'
// icons 
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function End() {
  return (
    <>
       <div style={{ backgroundColor: "#15363F" }}>
        <div className="d-flex flex-row offset-2">
          <div className="d-flex flex-row">
            <div className=" mt-5 mx-5">
              <h5 className="text-light">Popular Mobiles</h5>
              <p className="text-light">Oppo A18</p>
              <p className="text-light">Realme C67</p>
              <p className="text-light">OnePlus12R</p>
              <p className="text-light">iPhone 15 Pro</p>
              <p className="text-light">Infinix 40 Pro</p>
              <p className="text-light">Samsung Galaxy S22</p>
              <p className="text-light">Samsung Galaxy S23</p>
              <p className="text-light">Xiaomi Redmi Note 13</p>
            </div>
            <div className=" mt-5 mx-5">
              <h5 className="text-light">Popular Brands</h5>
              <p className="text-light">Oppo</p>
              <p className="text-light">Apple</p>
              <p className="text-light">Realme</p>
              <p className="text-light">Xiaomi</p>
              <p className="text-light">Huawei</p>
              <p className="text-light">OnePlus</p>
              <p className="text-light">Samsung</p>
              <p className="text-light">Infinix</p>
            </div>
          </div>
          <div className=" d-none d-sm-flex flex-column mt-5 mx-5">
            <h5 className="text-light d-none d-sm-block">Sell on PhoneBid</h5>
            <p className="text-light mt-4 d-none d-sm-block">Sell Your Mobile</p>
            <p className="text-light d-none d-sm-block">Bid Your Mobile</p>

            <div className=" d-flex flex-column align-items-center">
            <h4 className="text-light mt-4">Subscribe to our newsletter</h4>
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
            </div>
            <h5 className="text-light mt-4">Follow Us</h5>
            <div className='d-flex flex-row'>
            <FaFacebook className='text-white'  style={{ fontSize: '2rem' }}/>
            <FaInstagramSquare className="mx-3 text-white"  style={{ fontSize: '2rem' }}/>
            <FaTwitterSquare className='text-white'  style={{ fontSize: '2rem' }}/>
          </div>
          </div>
        </div>
        
        {/* For Mobile screen  */}
        <div className="d-flex flex-column d-sm-none mx-4">
          <div>
            <h5 className="text-light mt-5">Subscribe to our newsletter</h5>
            <div class=" input-group">
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
            </div>
            <div className='offset-4'>
            <h5 className="text-light mt-4">Follow Us</h5>
            <div className='d-flex flex-row'>
            <FaFacebook className='text-white'  style={{ fontSize: '23px' }}/>
            <FaInstagramSquare className="mx-3 text-white" style={{ fontSize: '23px' }} />
            <FaTwitterSquare className='text-white'  style={{ fontSize: '23px' }}/>
          </div>
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
    </>
  )
}

export default End
