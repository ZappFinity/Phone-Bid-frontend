import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Welcome() {
  const [user, setUser] = useState(false);
  const [hamburger, setHamburger] = useState(false);
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const [largeDropdown, setLargeDropdown] = useState(false);

  const dropdownRef = useRef(null);
  
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setHamburger(false);
        setLargeDropdown(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handledown = () => {
    setHamburger(!hamburger);
  };
  const largehandledown = (event) => {
    event.stopPropagation();
    setLargeDropdown(!largeDropdown);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const tokenData = localStorage.getItem("token");
        console.log("Token data:", tokenData);
        if (!tokenData) {
          console.error("Token is missing");
          return;
        }
        const token = JSON.parse(tokenData);
        console.log("Parsed token:", token);

        const response = await fetch("http://127.0.0.1:8000/api/user", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        console.warn(response);

        if (response.ok) {
          const data = await response.json();
          setUser(data);
          console.warn(data.name);
        } else {
          console.error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      const tokenData = localStorage.getItem("token");
      console.log("Token data::::", tokenData);
      if (!tokenData) {
        console.error("Token is missing");
        return;
      }
      const token = JSON.parse(tokenData);
      let url = "http://127.0.0.1:8000/api/logout";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`, // Corrected here
        },
      });

      if (response.ok) {
        setIsLoggedOut(true);
        localStorage.removeItem("token"); // Corrected here
        console.warn("logout successfully");
        navigate("/login");
      } else {

        console.log(
          "Failed to logout",
          await response.json(),
          response.status
        
        )
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  return (
    <div>
      {user ? (
        <div>
          {/* on small screen */}
          <div
            className="d-sm-none"
            style={{
              position: "relative",
              cursor: "pointer",
              display: "inline-block",
            }}
            onClick={handledown}
          >
            <p>
              Welcome, <b>{user.name}</b>
            </p>

            {hamburger && (
              <div
                style={{
                  position: "absolute",
                  top: "1.5rem",
                  right: "1rem",
                  color: "black",
                  backgroundColor: "#fff",
                  boxShadow: "0 5px 7px rgba(0, 0, 0, 0.1)",
                  borderRadius: "4px",
                  paddingLeft: "13px",
                  paddingRight: "13px",
                  width: "14rem",
                }}
              >
                <div className="d-flex flex-row ">
                  <div className="d-flex flex-column mx-5 pt-2">
                    <Link
                      to="/profile"
                      className="mx-3 mb-2 text-decoration-none text-dark"
                    >
                      Profile
                    </Link>
                    <Link className="mx-3 mb-2 text-decoration-none text-dark">
                      My Ads
                    </Link>
                    <Link className=" mb-2 text-decoration-none text-dark">
                      My Orders
                    </Link>
                    <Link className=" mb-2 text-decoration-none text-dark">
                      My Saved Ads
                    </Link>
                    <Link className=" mb-2 text-decoration-none text-dark">
                      My Mobiles
                    </Link>
                    <Link className=" mb-2 text-decoration-none text-dark">
                      Messages
                    </Link>
                    <Link
                      className=" mb-2 text-decoration-none text-dark"
                      to="/changePass"
                    >
                      Change Password
                    </Link>
                    <button
                      className="mb-2 text-decoration-none text-dark"
                      style={{
                        cursor: "pointer",
                        border: "none",
                        background: "none",
                        padding: 0,
                      }}
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* on large screen  */}
          <div
            className="d-none d-sm-block"
            style={{
              position: "relative",
              cursor: "pointer",
              display: "inline-block",
            }}
            onClick={largehandledown}
          >
            <p>
              Welcome, <b>{user.name}</b>
            </p>

            {largeDropdown && (
              <div
                style={{
                  position: "absolute",
                  top: "1.5rem",
                  right: "2px",
                  color: "black",
                  backgroundColor: "#fff",
                  boxShadow: "0 5px 7px rgba(0, 0, 0, 0.1)",
                  borderRadius: "4px",
                  paddingLeft: "13px",
                  width: "17rem",
                }}
              >
                <div className="d-flex flex-row ">
                  <div className="d-flex flex-column offset-4 pt-2">
                    <Link
                      to="/profile"
                      className=" mb-2 text-decoration-none text-dark"
                    >
                      Profile
                    </Link>
                    <Link
                      to="/myads"
                      className=" mb-2 text-decoration-none text-dark"
                    >
                      My Ads
                    </Link>
                    <Link
                      to="/myorder"
                      className=" mb-2 text-decoration-none text-dark"
                    >
                      My Orders
                    </Link>
                    <Link
                      to="/mysavedads"
                      className=" mb-2 text-decoration-none text-dark"
                    >
                      My Saved Ads
                    </Link>
                    <Link
                      to="/mymobile"
                      className=" mb-2 text-decoration-none text-dark"
                    >
                      My Mobiles
                    </Link>
                    <Link
                      to="/mymessage"
                      className=" mb-2 text-decoration-none text-dark"
                    >
                      Messages
                    </Link>
                    <Link
                      className=" mb-2 text-decoration-none text-dark"
                      to="/changePass"
                    >
                      Change Password
                    </Link>
                    <Link
                      className=" mb-2 text-decoration-none text-dark"
                      style={{
                        cursor: "pointer",
                        border: "none",
                        background: "none",
                        padding: 0,
                      }}
                      onClick={handleLogout}
                    >
                      Logout
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
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
