import React from 'react'
// img 
import repair from '../img/repair.png'
import bidding from '../img/bidding.png'
import mobile from '../img/new-mobiles.jpg'
import accessories from '../img/accessories.png'
import usedMobile from '../img/used-mobiles.jpg'

function Categories() {
  return (
    <>
      <div className="d-flex flex-row justify-content-center">
          <h4 className="mt-5">Categories</h4>
        </div>
        {/* on large screen  */}
        <div className="mt-3 d-flex flex-row offset-2 d-none d-sm-flex">
          <div class="row mb-5">
          <div class="col-sm-2">
              <div class="card">
                <div class="card-body d-flex flex-column">
                <img src={accessories} className="img-fluid col-sm-5" />
                <h6 className='mt-2'>Accessories</h6>
                </div>
              </div>
            </div>
            <div class="col-sm-2">
              <div class="card">
                <div class="card-body d-flex flex-column">
                <img src={bidding} className="img-fluid col-sm-6" />
                <h6 className='mt-2'>Bidding</h6>
                </div>
              </div>
            </div>
            <div class="col-sm-2">
              <div class="card">
                <div class="card-body d-flex flex-column">
                <img src={mobile} className="img-fluid col-sm-5" />
                <h6 className='mt-2'>Mobile</h6>
                </div>
              </div>
            </div>
            <div class="col-sm-2">
              <div class="card">
                <div class="card-body d-flex flex-column">
                <img src={repair} className="img-fluid col-sm-6" />
                <h6 className='mt-2'>Repair</h6>
                </div>
              </div>
            </div>
            <div class="col-sm-2">
              <div class="card">
                <div class="card-body d-flex flex-column">
                <img src={usedMobile} className="img-fluid col-sm-7" />
                <h6 className='mt-2'>Used Mobiles</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* on small screen  */}
        <div className="mt-3 mx-3 d-flex flex-row d-sm-none">
          <div class="row mb-5">
          <div class="col-4 col-sm-2 mb-2">
              <div class="card">
                <div class="card-body d-flex flex-column">
                <img src={accessories} className="img-fluid col-sm-2" />
                <h6 className='mt-2'>Accessories</h6>
                </div>
              </div>
            </div>
            <div class=" col-4 col-sm-2 mb-2">
              <div class="card">
                <div class="card-body d-flex flex-column">
                <img src={bidding} className="img-fluid col-sm-6" />
                <h6 className='mt-3'>Bidding</h6>
                </div>
              </div>
            </div>
            <div class="col-4 col-sm-2 mb-2">
              <div class="card">
                <div class="card-body d-flex flex-column">
                <img src={mobile} className="img-fluid col-sm-5" />
                <h6 className='mt-2'>Mobile</h6>
                </div>
              </div>
            </div>
            <div class="col-4 col-sm-2 offset-2">
              <div class="card">
                <div class="card-body d-flex flex-column">
                <img src={repair} className="img-fluid col-sm-6" />
                <h6 className='mt-3'>Repair</h6>
                </div>
              </div>
            </div>
            <div class="col-4 col-sm-2">
              <div class="card">
                <div class="card-body d-flex flex-column">
                <img src={usedMobile} className="img-fluid col-sm-7" />
                <h6 className='mt-2'>Used Mobiles</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Categories
