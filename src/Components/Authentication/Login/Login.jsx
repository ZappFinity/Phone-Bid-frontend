import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

//images
import mobile from '../../img/mobile.jpg'
import cartoon from '../../img/cartoon.jpeg'

// router 
import { Link, useNavigate } from "react-router-dom";

 function Login() {

  const [email, setEmail] =useState("");
  const [password, setPassword] = useState("");
  // const [message, setMessage] = useState("");

  const navigate = useNavigate();

  async function login(){
    try {
    let item = {email,password};
    let result = await fetch("http://127.0.0.1:8000/api/login",{
      method:'POST',
      headers:{
        "Content-Type":'application/json',
        "Accept":'application/json'
      },
      body:JSON.stringify(item)
    });

    // if (result.ok) {
    result = await result.json();
    console.warn("result", result);
    if(result.success == true){
      const token = result.token;
      // put the token in local storage
      localStorage.setItem('token',token);
    }
    if (result.success == true) {
      localStorage.setItem("user-info", JSON.stringify(result));
      navigate("/dashboard");
    } 
    else {
      alert("Incorrect email or password. Please try again.");
    }
  // }else {
  //   // Handle HTTP error response
  //   console.error("HTTP error:", result.status);
  //   setMessage("Login failed. Please try again later.");
  // }
    
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-6">
          <img src={cartoon} className="img-fluid col-md-3 mt-3" />
          <h3 className="mt-3">Log In</h3>
          <div className="d-flex flex-column bd-highlight mb-3 ">
            <input
              type="text"
              className="form-control"
              placeholder="Your email"
              aria-label="Your email"
              aria-describedby="basic-addon1"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
            <input
              type="password"
              className="form-control mt-3"
              placeholder="Password"
              aria-label="Password"
              aria-describedby="basic-addon1"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2">
            <button className="btn btn-primary" type="button" onClick={login}>
              LOG IN
            </button>
          </div>
          <p className="text-primary p-3 fw-bold d-flex justify-content-end">Forget Password?</p>
          <div className="d-flex justify-content-center mt-4">
          <p className="text-secondary ">Don't have an account?
          <Link to="/signup" className="text-primary p-3 fw-bold">
          Sign up 
          </Link>
          </p>
          </div>
        </div>

        <div className="col-sm-5 ">
          <img src={mobile} 
          className="offset-1" 
          // style={{height:'70%', width:'100%'}}
          />
        </div>
      </div>
    </div>
  )
}

export default Login
