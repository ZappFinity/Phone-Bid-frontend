import React from 'react'
// img 
import realme50 from '../img/realme-note-50.svg'
import samsung from '../img/samsung-galaxy-a25.svg'
import infinix from '../img/infinix-zero-x-pro.svg'
import xiaomi from '../img/xiaomi-14.svg'

function FeaturedMobile() {
  return (
    <>
     <div>
        <div className="d-flex flex-row justify-content-around ">
          <h4 className="mt-5">Featured New Mobiles</h4>
          <p className="mt-5 text-primary">View All Featured Mobiles</p>
        </div>
        <div class="mt-2 d-flex flex-row justify-content-evenly ">
        <div class="card mb-3">
            <img src={realme50} class="img-fluid col-sm-5 mx-5 mt-4" />
            <div class="card-body">
              <h6 class="card-title">Realme Note 50</h6>
              <p5 class="card-text text-success">PKR 75,000</p5>
              <p className="text-secondary">Islamabad</p>
            </div>
          </div>
          <div class="card mb-3">
            <img src={samsung} class="img-fluid col-sm-5 mx-5 mt-4" />
            <div class="card-body">
              <h6 class="card-title">Samsung Galaxy A25</h6>
              <p5 class="card-text text-success">PKR 75,000</p5>
              <p className="text-secondary">Islamabad</p>
            </div>
          </div>
          <div class="card mb-3">
            <img src={xiaomi} class="img-fluid col-sm-5 mx-5 mt-4" />
            <div class="card-body">
              <h6 class="card-title">Xiaomi 14</h6>
              <p5 class="card-text text-success">PKR 49,500</p5>
              <p className="text-secondaary">Islamabad</p>
            </div>
          </div>
          <div class="card mb-3">
            <img src={infinix} class="img-fluid col-sm-5 mx-5 mt-4" />
            <div class="card-body">
              <h6 class="card-title">Infinity Zero X Pro</h6>
              <p5 class="card-text text-success">PKR 52,500</p5>
              <p className="text-seconday">islamabad</p>
            </div>
          </div>
        </div>
      </div>
    </>
      
  )
}

export default FeaturedMobile
