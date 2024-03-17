import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//images
import mobile from "../../img/phone-img2.png";
import icon from "../../img/favicon.png";
import logo from '../../img/logo.png'
// router
import { Link, useNavigate } from "react-router-dom";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  // validation
  const validation = () => confirmPassword === password;

  async function signUp() {
    if (!validation()) {
      return;
    }
    if (password.length < 8) {
      setMessage("Password should be at least 8 characters.");
      return;
    }
    try {
      if (!name || !email || !password || !confirmPassword) {
        alert("Please fill in both email and password.");
        return;
      }
      let item = { name, email, password, confirmPassword };
      console.warn(item);
      let result = await fetch("http://127.0.0.1:8000/api/register", {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      result = await result.json();
      console.warn("result", result);
      if (result.success == true) {
        localStorage.setItem("user", JSON.stringify(result));
        navigate("/");
      } else {
        alert("User already exist");
      }
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  }

  return (
    <div className="container-fluid ">
      <div className="row ">
        <div className="col-sm-6">
          <img
            src={mobile}
            className=""
            style={{ height: "40rem", width: "100%" }}
          />
        </div>

        <div className="col-md-5">
          <img src={logo} className=" col-sm-2" />
          <div className=" mt-5 mx-5">
          <img src={icon} className="img-fluid col-md-4  mb-3 mx-4" />
          <h3 className="mt-3" style={{ color: "#16363F" }}>
            Sign Up
          </h3>
          <div className="d-flex flex-column bd-highlight mb-3">
            <input
              type="text"
              className="form-control "
              placeholder="Full Name"
              aria-label="Full Name"
              aria-describedby="basic-addon1"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              className="form-control mt-3"
              placeholder="Your email"
              aria-label="Your email"
              aria-describedby="basic-addon1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="form-control mt-3"
              placeholder="Password"
              aria-label="Password"
              aria-describedby="basic-addon1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {message && <p className="text-danger">{message}</p>}
            <input
              type="password"
              className="form-control mt-3"
              placeholder="Confirm Password"
              aria-label="Password"
              aria-describedby="basic-addon1"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <p className="text-danger">
              {" "}
              {validation() ? "" : "Password not matched"}
            </p>
          </div>

          <div className="d-grid gap-2">
            <button
              className="btn"
              style={{ backgroundColor: "#52AB98", color: "white" }}
              type="button"
              onClick={signUp}
            >
              Sign up
            </button>
          </div>

          <div className="d-flex justify-content-center mt-4">
            <p className="text-secondary ">
              Already have an account?
              <Link
                to="/login"
                className="p-3 fw-bold"
                style={{ color: "#52AB98" }}
              >
                Log In
              </Link>
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
