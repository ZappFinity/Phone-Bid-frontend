import React, {useState, useEffect} from 'react'
import Navbar from '../Navbar'
import End from '../End'
import {Link} from 'react-router-dom'
import './Style.css'

function MyMessages() {
  const [user, setUser] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const tokenData = localStorage.getItem("token");
        if (!tokenData) {
          return;
        }
        const token = JSON.parse(tokenData);

        const response = await fetch("http://127.0.0.1:8000/api/user", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUser(data);
          const createdAtDate = data.created_at.split('T')[0]; // Get the substring before 'T'
          setUser({...data, created_at: createdAtDate});
        } else {
          console.error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);
  return (
    <>
    <Navbar/>
    <div style={{ backgroundColor: "#e9ecef" }}>
        <div className="col-lg-11 pt-5 pb-5">
        <div className="bg-white offset-1" style={{border: '1px solid lightgrey', borderRadius: '5px'}}>
            <div className="offset-1 pt-5 pb-5">
              <h4>{user.name}</h4>
              <p>Member Since {user.created_at}</p>
              <div className="d-flex flex-row gap-3">
              <Link to='/profile' style={{cursor: "pointer",color: "#52AB98", textDecoration: 'none'}}>Edite Profile</Link>
              <Link to='/changePass' style={{cursor: "pointer",color: "#52AB98", textDecoration: 'none'}}>Change Password</Link>
              </div>
            </div>
            <div
              class="btn-group col-lg-12"
              role="group"
              aria-label="Basic mixed styles example"
            >
              <Link to='/myads' type="button" class="btn hov text-secondary" style={{border: '1px solid lightgrey', borderRadius: '0'}}>
                My Ads
              </Link>
              <Link to='/mysavedads' type="button" class="btn hov text-secondary" style={{border: '1px solid lightgrey'}}>
                My Saved Ads
              </Link>
              <Link to='/mymobile' type="button" class="btn hov text-secondary" style={{border: '1px solid lightgrey'}}>
                My Mobiles
              </Link>
              <Link to='/mymessage' type="button" class="btn hov text-secondary" style={{border: '1px solid lightgrey'}}>
                My Messages
              </Link>
              <Link to='/myorder' type="button" class="btn hov text-secondary" style={{border: '1px solid lightgrey', borderRadius: '0'}}>
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
            <h5 className='text-center mb-4 mt-3' style={{color: "#52AB98"}}>No Messages</h5>

          </div>
          </div>
          </div>
          </div>
          <End/>
    </>
  )
}

export default MyMessages
