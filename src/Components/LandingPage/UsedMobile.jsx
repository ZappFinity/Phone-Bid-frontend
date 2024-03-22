import React from 'react'
// img
import c15 from '../img/realme-c15.png'
import c21 from '../img/realme-c21.png'
import c13 from '../img/random-phone-0.png'
import c51 from '../img/random-phone-1.png'

function UsedMobile() {
  return (
    <>
      <div style={{ backgroundColor: "#e9ecef" }}>
        <div className="d-flex flex-row justify-content-around ">
          <h4 className="mt-4 d-none d-sm-block ">Used Mobiles For Sales</h4>
          <h5 className="mt-4 d-sm-none mx-2">Used Mobiles For Sales</h5>
          <p className="mt-4 text-primary d-none d-sm-block">View All Mobiles For Sales</p>
          <p5 className="mt-4 text-primary d-sm-none mx-2">View All Mobiles For Sales</p5>
        </div>
        {/* on large screen  */}
        <div class="mt-3 d-flex flex-row justify-content-evenly d-none d-sm-flex ">
           <div class="card col-sm-2 mb-5">
            <img src={c13} class="card-img-top col-sm-2" />
            <div class="card-body">
              <h6 class="card-title">Realme C13</h6>
              <p5 class="card-text text-success">PKR 75,000</p5>
              <p className="text-secondary">Islamabad</p>
            </div>
          </div>
          <div class="card col-sm-2 mb-5">
            <img src={c15} class="card-img-top" />
            <div class="card-body">
              <h6 class="card-title">Realme C15</h6>
              <p5 class="card-text text-success">PKR 23,000</p5>
              <p className="text-secondary">Lahore</p>
            </div>
          </div>
          <div class="card col-sm-2 mb-5">
            <img src={c51} class="card-img-top" />
            <div class="card-body">
              <h6 class="card-title">Realme C51Y</h6>
              <p5 class="card-text text-success">PKR 29,500</p5>
              <p className="text-secondaary">Rawalpindi</p>
            </div>
          </div>
          <div class="card col-sm-2 mb-5">
            <img src={c21} class="card-img-top" />
            <div class="card-body">
              <h6 class="card-title">Realme C21</h6>
              <p5 class="card-text text-success">PKR 24,500</p5>
              <p className="text-seconday">Multan</p>
            </div>
          </div>
        </div>
        {/* on small screen  */}
        <div class="mt-3 d-flex flex-row justify-content-evenly d-sm-none">
           <div class="card col-sm-2 mb-5 mx-3">
            <img src={c13} class="card-img-top col-sm-2" />
            <div class="card-body">
              <h6 class="card-title">Realme C13</h6>
              <p5 class="card-text text-success">PKR 75,000</p5>
              <p className="text-secondary">Islamabad</p>
            </div>
          </div>
          <div class="card col-sm-2 mb-5 mx-3">
            <img src={c15} class="card-img-top" />
            <div class="card-body">
              <h6 class="card-title">Realme C15</h6>
              <p5 class="card-text text-success">PKR 23,000</p5>
              <p className="text-secondary">Lahore</p>
            </div>
          </div>
          </div>
          <div class="mt-3 d-flex flex-row justify-content-evenly d-sm-none">
          <div class="card col-sm-2 mb-5 mx-3">
            <img src={c51} class="card-img-top" />
            <div class="card-body">
              <h6 class="card-title">Realme C51Y</h6>
              <p5 class="card-text text-success">PKR 29,500</p5>
              <p className="text-secondaary">Rawalpindi</p>
            </div>
          </div>
          <div class="card col-sm-2 mb-5 mx-3">
            <img src={c21} class="card-img-top" />
            <div class="card-body">
              <h6 class="card-title">Realme C21</h6>
              <p5 class="card-text text-success">PKR 24,500</p5>
              <p className="text-seconday">Multan</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UsedMobile
