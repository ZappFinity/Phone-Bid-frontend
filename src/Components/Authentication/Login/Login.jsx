import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

//images
import mobile from "../../img/phone-img.png";
import icon from "../../img/favicon.png";
import logo from "../../img/logo.png";

// router
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function login() {
    try {
      let item = { email, password };
      let result = await fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(item),
      });

      result = await result.json();
      if (result.success == true) {
        const token = result.token;
        localStorage.setItem("token", JSON.stringify(token));
        console.log("token", token);
      }
      if (result.success == true) {
        localStorage.setItem("user", JSON.stringify(result));
        navigate("/");
      } else {
        alert("Incorrect email or password. Please try again.");
      }
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-5">
          <img src={logo} className=" col-sm-2 d-none d-sm-block" />
          <img src={logo} className="img-fluid col-md-4 mx-4 d-sm-none" alt="Icon" style={{ maxWidth: "90px" }} />
          <div className=" mt-5 mx-5">
          <img src={icon} className="img-fluid col-md-4 mt-1 mb-3 mx-4 d-none d-sm-block" />
          <img src={icon} className="img-fluid col-md-4 mb-3 mx-4 d-sm-none" alt="Icon" style={{ maxWidth: "150px" }} />
          <h3 className="mt-3" style={{ color: "#16363F" }}>
            Log In
          </h3>
          <div className="d-flex flex-column bd-highlight mb-3 ">
            <input
              type="text"
              className="form-control"
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
          </div>
          <div className="d-grid gap-2">
            <button
              className="btn"
              style={{ backgroundColor: "#52AB98", color: "white" }}
              type="button"
              onClick={login}
            >
              LOG IN
            </button>
          </div>
          <p
            className=" p-3 fw-bold d-flex justify-content-end"
            style={{ color: "#52AB98" }}
          >
            Forget Password?
          </p>
          <div className="d-flex justify-content-center mt-4">
            <p className="text-secondary ">
              Don't have an account?
              <Link
                to="/signup"
                className="p-3 fw-bold"
                style={{ color: "#52AB98" }}
              >
                Sign up
              </Link>
            </p>
          </div>
          </div>
        </div>

        <div className="col-md-6 d-none d-sm-block">
          <img
            src={mobile}
            className=" "
            style={{ height: "40rem", width: "110%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
