import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//images
import mobile from "../../img/mobile.jpg";
import cartoon from "../../img/cartoon.jpeg";
// router
import { Link, useNavigate } from "react-router-dom";

function App() { 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  async function signUp() {
    try{
    let item = { name, email, password, confirmPassword };
    console.warn(item);
    let result = await fetch("http://127.0.0.1:8000/api/register", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    });
    result = await result.json();
    console.warn("result", result);
    localStorage.setItem("user-info", JSON.stringify(result));
    navigate("/dashboard");
  } catch (err) {
      console.error(err);
      alert(err.message);
  }
  }

  return (
    <div className="container-fluid ">
      <div className="row ">
        <div className="col-sm-5 ">
          <img src={mobile} className="img-fluid offset-1" />
        </div>

        <div className="col-sm-5 offset-1">
          <img src={cartoon} className="img-fluid col-md-3 mt-3" />
          <h3 className="mt-3">Sign Up</h3>
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
            <input
              type="password"
              className="form-control mt-3"
              placeholder="Confirm Password"
              aria-label="Password"
              aria-describedby="basic-addon1"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div className="d-grid gap-2">
            <button className="btn btn-primary" type="button" onClick={signUp}>
              Sign up
            </button>
          </div>

          <div className="d-flex justify-content-center mt-4">
            <p className="text-secondary ">
              Already have an account?
              <Link to="/login" className="text-primary p-3 fw-bold">
          Log In 
          </Link>
            </p>
          </div>


        </div>
      </div>
    </div>
  );
}

export default App;
