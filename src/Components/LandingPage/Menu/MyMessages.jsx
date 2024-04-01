import React from 'react'
import Navbar from '../Navbar'
import End from '../End'
import {Link} from 'react-router-dom'

function MyMessages() {
  return (
    <>
    <Navbar/>
    <div style={{ backgroundColor: "#e9ecef" }}>
        <div className="col-lg-11 pt-5 pb-5">
          <div className="bg-white offset-1">
            <div className="offset-1 pt-5 pb-5">
              <h4>johndoe81</h4>
              <p>Member Since Mar 12, 2024</p>
              <p>Edite Profile</p>
              <p>Change Password</p>
            </div>
            <div
              class="btn-group col-lg-12"
              role="group"
              aria-label="Basic mixed styles example"
            >
              <Link to='/myads' type="button"  class="btn text-secondary" style={{border: '1px solid lightgrey'}}>
                My Ads
              </Link>
              <Link to='/mysavedads' type="button"  class="btn text-secondary" style={{border: '1px solid lightgrey'}}>
                My Saved Ads
              </Link>
              <Link to='/mymobile' type="button"  class="btn text-secondary" style={{border: '1px solid lightgrey'}}>
                My Mobiles
              </Link>
              <Link to='/mymessage' type="button"  class="btn text-secondary" style={{border: '1px solid lightgrey'}}>
                My Messages
              </Link>
              <Link to='/myorder' type="button"  class="btn text-secondary" style={{border: '1px solid lightgrey'}}>
                My Orders
              </Link>
            </div>
          </div>
        </div>
      <div className='pb-5'>
       <div
            className="bg-white pt-3 offset-1 pb-2"
            style={{ width: "83%", height: "100%" }}>
           <div className='mx-5 '>
            <h5 className='text-center mb-4 mt-3'>No Messages</h5>

          </div>
          </div>
          </div>
          </div>
          <End/>
    </>
  )
}

export default MyMessages
