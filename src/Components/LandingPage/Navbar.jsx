import React from 'react'
import Welcome from "./Welcome";
import logo from '../img/logo.png'
function Navbar() {
  return (
    <>
      <div className="col-sm-15  mt-2 d-flex flex-row justify-content-between">
        <img src={logo} class="img-fluid col-sm-1 mx-5"/>
      <div className="col-sm-2 ">
      <Welcome/>
      </div>
      </div>
       {/* Navbar */}
       <ul class="nav justify-content-end mt-2 mx-5 mb-2">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle text-dark"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
            >
              New Mobiles
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Separated link
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle text-dark"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
            >
              Used Mobiles
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Separated link
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle text-dark"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
            >
              Accessories
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Separated link
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link active text-dark" aria-current="page" href="#">
              Mobile Repair
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active text-dark" aria-current="page" href="#">
              Bidding
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark" href="#">
              Reviews
            </a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle text-dark"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
            >
              More
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Separated link
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <button className="btn" style={{backgroundColor:"#52AB98",color:'white'}}>Sell Your Mobile</button>
          </li>
        </ul>
    </>
  )
}

export default Navbar
