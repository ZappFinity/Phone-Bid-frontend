import React from 'react'
import Navbar from './Navbar'
import End from './End'

function Profile() {
  return (
    <>
      <Navbar/>
      <div style={{ backgroundColor: "#e9ecef" }}>
    <div className='pt-5 pb-5 '>
      <h4 className='offset-3 mb-3 '>My Profile</h4>
      <div className="bg-white pt-3 offset-3 pb-2 p-5"
          style={{ width: "45%", height: "100%" }}>
            <h5 className='offset-2 mb-3'>Change your password below</h5>
            <form >
              <div className="d-flex flex-column offset-2 col-sm-9 bd-highlight mb-3 ">
                <input
                  type="Username"
                  className="form-control"
                  placeholder="Current Password"
                />
                <input
                  type="Email"
                  className="form-control mt-3"
                  placeholder="New Password"
                />
                <input
                  type="City"
                  className="form-control mt-3"
                  placeholder="Confirm Password"
                />
              </div>
              <div className="d-flex justify-content-center pt-4 pb-4 ">
                <button
                  type="submit"
                  className="btn px-5"
                  style={{ backgroundColor: "#52AB98", color: "white" }}
                >
                  Reset Password
                </button>
              </div>
            </form>
           
      </div>
    </div>
    </div>
      <End/>
    </>
  )
}

export default Profile
