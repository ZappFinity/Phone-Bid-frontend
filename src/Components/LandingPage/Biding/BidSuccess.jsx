import React from 'react'
import Navbar from '../Navbar'
import End from '../End'
import success from '../../img/successful.avif'

function BidSuccess() {
  return (
    <>
    <Navbar/>
    <div style={{ backgroundColor: "#f2f3f3" }}>
    <div className="d-flex flex-row justify-content-center p-5">
            <div
              className="card"
              style={{
                boxShadow: "0px 5px 12px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="d-flex flex-column p-5 gap-3">
                <img src={success} style={{ width: "20rem", height: "20rem" }}/>
                <div className="d-flex flex-column justify-content-center text-center">
                  <h3>Bid Placed</h3>
                  <p>Keep a watch on your bid</p>
                  <button
              className="btn px-5"
              style={{
                backgroundColor: "#52AB98",
                color: "white",
              }}
            >
              Continue Exploring
            </button>
                </div>
              </div>
            </div>
          </div>
    </div>
    <End/>
    </>
  )
}

export default BidSuccess