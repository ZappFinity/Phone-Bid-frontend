import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Welcome() {
  const [user, setUser] = useState(false);
  const [hamburger, setHamburger] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setHamburger(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handledown = () => {
    setHamburger(!hamburger);  
  };  

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const tokenData = localStorage.getItem('token');
console.log('Token data:', tokenData);
      if (!tokenData) {
        console.error('Token is missing');
        return;
      }
      const token = JSON.parse(tokenData);
console.log('Parsed token:', token);
        
        const response = await fetch('http://127.0.0.1:8000/api/user', {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
        
        console.warn(response);

        if (response.ok) {
          const data = await response.json();
          setUser(data);
          console.warn(data.name);
        } else {
          console.error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
  
    fetchUserData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("name");
    setLoggedIn(false);
  };

  return (
    <div>
      {user ? (
        <div
          style={{
            position: "relative",
            cursor: "pointer",
            display: "inline-block",
          }}
          onClick={handledown}
        >
          <p>Welcome, <b>{user.name}</b></p>

          {hamburger && (
            <div
              style={{
                position: "absolute",
                top: "1.5rem",
                right: "",
                color: "black",
                backgroundColor: "#fff",
                boxShadow: "0 5px 7px rgba(0, 0, 0, 0.1)",
                borderRadius: "4px",
                paddingLeft: "13px ",
                paddingRight: "13px",
              }}
            >
              <div className="row">
                <div className="col">
                  <Link className="d-block mb-2 text-decoration-none text-dark">My Ads</Link>
                  <Link className="d-block mb-2 text-decoration-none text-dark">My Orders</Link>
                  <Link className="d-block mb-2 text-decoration-none text-dark">My Saved Ads</Link>
                </div>
                <div className="col">
                  <Link className="d-block mb-2 text-decoration-none text-dark">My Mobiles</Link>
                  <Link className="d-block mb-2 text-decoration-none text-dark">Messages</Link>
                  <Link className="d-block mb-2 text-decoration-none text-dark">Change Password</Link>
                  <p className="d-block mb-2 text-decoration-none text-dark" style={{ cursor: "pointer" }} onClick={handleLogout}>Logout</p>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div>
          <Link
            to="/login"
            className="text-secondary p-3 fw-bold "
            style={{ textDecoration: "none" }}
          >
            Log In
          </Link>
          <Link
            to="/signup"
            className="text-secondary p-3 fw-bold"
            style={{ textDecoration: "none" }}
          >
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );
}

export default Welcome;
