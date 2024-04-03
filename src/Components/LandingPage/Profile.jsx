import React from 'react'
import Navbar from './Navbar'
import End from './End'
import {Link} from 'react-router-dom'

function Profile() {
  return (
    <>
      <Navbar/>
      <div style={{ backgroundColor: "#e9ecef" }}>
    <div className='pt-5 pb-5 '>
      <div className="bg-white pt-3 offset-3 pb-2 p-5"
          style={{ width: "50%", height: "100%" }}>
            <form >
                <div className='d-flex flex-row justify-content-between'>
      <h4 className=' mb-5 ' style={{ color: "#18534b"}}>My Profile</h4>
      <Link to='/' style={{textDecoration: 'none', color: "#52AB98"}}>Back to Dashboard</Link>
                </div>
              <div className="d-flex flex-row offset-2 col-sm-10 bd-highlight mb-3">
                <div className='d-flex flex-column text-end'>
                  <p className='mt-1'>Username</p>
                  <p className='mt-3'>Email</p>
                  <p className='mt-3'>City</p>
                  <p className='mt-3'>Mobile Number</p>
                </div>

                <div className='d-flex flex-column mx-3'>
                <input
                  type="Username"
                  className="form-control "
                />

                <input
                  type="Email"
                  className="form-control mt-3"
                />
                <input
                  type="City"
                  className="form-control mt-3 " 
                />
                <input
                  type="number"
                  className="form-control mt-4"
                />
                </div>
              </div>
              <div className="d-flex justify-content-center pt-4 pb-4 ">
                <button
                  type="submit"
                  className="btn px-5"
                  style={{ backgroundColor: "#52AB98", color: "white" }}
                >
                  Save Changes
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
