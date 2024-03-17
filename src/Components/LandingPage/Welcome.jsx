import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Welcome() {
  const [user, setUser] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

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
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <p>Welcome, <b>{user.name}</b></p>

          {showDropdown && (
            <div
              style={{
                position: "absolute",
                top: "65px",
                left: "49rem",
                color: "#fff",
                backgroundColor: "#fff",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                borderRadius: "4px",
                paddingLeft: "13px ",
                paddingRight: "13px",
              }}
            >
              <Link>My Ads</Link>
              <Link>My Orders</Link>
              <Link>My Saved Ads</Link>
              <Link>My Ads</Link>
              <Link>My Mobiles</Link>
              <Link>Messages</Link>
              <Link>Change Password</Link>
              <p onClick={handleLogout}>Logout</p>
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
