import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

//images
import mobile from './Components/img/mobile.jpeg'
import cartoon from './Components/img/cartoon.jpeg'

function Login() {
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <img src={cartoon} class="img-fluid col-md-3 mt-3" />
          <h3 className="mt-3">Log In</h3>
          <div class="d-flex flex-column bd-highlight mb-3 ">
            <input
              type="text"
              class="form-control"
              placeholder="Your email"
              aria-label="Your email"
              aria-describedby="basic-addon1"
            />
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              aria-label="Password"
              aria-describedby="basic-addon1"
            />
          </div>
          <div class="d-grid gap-2">
            <button class="btn btn-primary" type="button">
              LOG IN
            </button>
          </div>
          <p2 class="text-primary p-3 fw-bold d-flex justify-content-end">Forget Password?</p2>
          <div class="d-flex justify-content-evenly mt-5">
            <p className="text-secondary">or</p>
          </div>
          <div class="d-flex justify-content-evenly">
          <button type="button" class="btn btn-outline-secondary text-dark ">
            <img src=""/>
            Google</button>
          <button type="button" class="btn btn-outline-secondary text-dark">Facebook</button>
          </div>
          <div className="d-flex justify-content-center mt-4">
          <p className="text-secondary ">Don't have an account?
          <span class="text-primary p-3 fw-bold">Sign up</span></p>
          </div>
        </div>

        <div class="col ">
          <img src={mobile} class="img-fluid d-flex align-items-center justify-content-center" />
        </div>
      </div>
    </div>
  )
}

export default Login
