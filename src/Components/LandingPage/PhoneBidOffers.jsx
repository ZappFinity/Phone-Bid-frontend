import React from 'react'
// img 
import insurance from '../img/insurance.svg'
import  sellme from '../img/sell-it-for-me.svg'
import buy from '../img/buy-new-mobiles.svg'
import pta from '../img/pta-approval.svg'
import partner from '../img/phonebid-partner.svg'
import inspection from '../img/mobile-inspection.svg'
function PhoneBidOffers() {
  return (
    <>
       <div>
        <div className="d-flex flex-row justify-content-center">
          <h4 className="mt-5">PhoneBid Offerings</h4>
        </div>

        <div class="row mt-3 mx-5 d-flex flex-row align-item-center justify-content-center">
          <div class="col-sm-4">
            <div class="card d-flex flex-row">
                <img src={insurance} className="img-fluid col-sm-2 mx-3"/>
              <div class="card-body d-flex flex-column">
                <p2 class="card-title mt-2 mb-2 text-primary">PhoneBids</p2>
                <p>INSURANCE</p>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card d-flex flex-row">
            <img src={sellme} className="img-fluid col-sm-2 mx-3"/>
              <div class="card-body d-flex flex-column">
                <p2 class="card-title mt-2 mb-2 text-primary">PhoneBids</p2>
                <p>PHONEBID SELL IT FOR ME</p>
              </div>
            </div>
          </div>
        </div>

        <div class="row mt-3 mx-5 d-flex flex-row align-item-center justify-content-center">
          <div class="col-sm-4">
            <div class="card d-flex flex-row">
            <img src={buy} className="img-fluid col-sm-1 mx-3"/>
              <div class="card-body d-flex flex-column">
                <p2 class="card-title mt-2 mb-2 text-primary">PhoneBids</p2>
                <p>BUY NEW MOBILES</p>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
          <div class="card d-flex flex-row">
            <img src={pta} className="img-fluid col-sm-2 mx-3"/>
              <div class="card-body d-flex flex-column">
                <p2 class="card-title mt-2 mb-2 text-primary">PhoneBids</p2>
                <p>PTA APPROVAL</p>
              </div>
            </div>
          </div>
        </div>

        <div class="row mt-3 mx-5 mb-5 d-flex flex-row align-item-center justify-content-center">
          <div class="col-sm-4">
          <div class="card d-flex flex-row">
            <img src={partner} className="img-fluid col-sm-2 mx-3"/>
              <div class="card-body d-flex flex-column">
                <p2 class="card-title mt-2 mb-2 text-primary">PhoneBids</p2>
                <p>PHONEBID PARTNER</p>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
          <div class="card d-flex flex-row">
            <img src={inspection} className="img-fluid col-sm-2 mx-3"/>
              <div class="card-body d-flex flex-column">
                <p2 class="card-title mt-2 mb-2 text-primary">PhoneBids</p2>
                <p>MOBILE INSPECTION</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PhoneBidOffers
