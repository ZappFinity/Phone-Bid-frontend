import React from 'react'
// img 
import cable from '../img/Cable.svg'
import charger from '../img/charger.svg'
import cover from '../img/covers.svg'
import airpods from '../img/Earpods.svg'
import headphones from '../img/Headphones.svg'
import protector from '../img/protector.svg'

function Accessories() {
  return (
    <>
      <div className="d-flex flex-row justify-content-center">
          <h4 className="mt-5">Accessories</h4>
        </div>
        <div className="mt-3 d-flex flex-row justify-content-evenly">
          <div class="row g-5 mb-5">
            <div class="col">
              <div class="card">
                <div class="card-body d-flex flex-row justify-content-center align-item-center">
                <img src={headphones} className="mt-3 mb-3 mx-3" />
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-body d-flex flex-row justify-content-center align-item-center">
                <img src={cable} className="mt-4 mb-3 mx-3" />
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-body d-flex flex-row justify-content-center align-item-center">
                <img src={charger} className="mt-4 mb-4 mx-3" />
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-body d-flex flex-row justify-content-center align-item-center">
                <img src={airpods} className="mt-3 mb-3 mx-3" />
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-body d-flex flex-row justify-content-center align-item-center">
                <img src={cover} className="mt-3 mb-3 mx-4" />
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-body d-flex flex-row justify-content-center align-item-center">
                <img src={protector} className="mt-3 mb-3 mx-4" />
                </div>
              </div>
            </div>
            {/* <div class="col">
              <div class="card">
                <div class="card-body d-flex flex-row justify-content-center align-item-center">
                <img src={ad1} className="mt-4 mb-4" />
                </div>
              </div>
            </div> */}
          </div>
        </div>
    </>
  )
}

export default Accessories
