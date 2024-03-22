import React from 'react'
// img 
import apple from '../img/apple.svg'  
import huawei from '../img/huawei.svg'
import infinix  from '../img/infinix.png'
import lg from '../img/lg.png'
import oneplus from '../img/OnePlus-Logo.svg'
import oppo from '../img/Oppo-Logo.svg'
import samsung from '../img/Samsung-Logo.svg'
import techno from '../img/tecno-logo.svg'
import realme from '../img/realme.png'
import xiaomi from '../img/xiaomi.png'
function Brands() {
  return (
    <>
       <div>
        <div className="mt-4 d-flex justify-content-center">
          <h4>New Mobiles By Make</h4>
        </div>
        {/* on large screen  */}
        <div className=" d-flex flex-row align-item-center justify-content-evenly mt-3 d-none d-sm-flex">
          <img src={apple} style={{ width: "5%", height: "5%" }} />
          <img src={lg} style={{ width: "10%", height: "10%" }} />
          <img src={huawei} style={{ width: "5%", height: "5%" }} />
          <img src={realme} style={{ width: "9%", height: "9%" }} />
          <img src={techno} style={{ width: "8%", height: "5%" }} />
        </div>
        <div className="d-flex flex-row align-item-start justify-content-evenly mt-3 mb-3 d-none d-sm-flex">
          <img src={infinix} style={{ width: "8%", height: "10%" }} />
          <img src={samsung} style={{ width: "13%", height: "13%" }} />
          <img src={oneplus} style={{ width: "13%", height: "12%" }} />
          <img src={xiaomi} style={{ width: "9%", height: "10%" }} />
          <img src={oppo} style={{ width: "10%", height: "10%" }} />
        </div>
        {/* on small screen  */}
        <div className=" d-flex flex-row align-item-center justify-content-evenly mt-3 d-sm-none">
          <img src={apple} style={{ width: "8%", height: "8%" }} />
          <img src={lg} style={{ width: "15%", height: "15%" }} />
          </div>
          <div className=" d-flex flex-row align-item-center justify-content-evenly mt-3 d-sm-none">
          <img src={huawei} style={{ width: "8%", height: "8%" }} />
          <img src={realme} style={{ width: "15%", height: "15%" }} />
        </div>
        <div className="d-flex flex-row align-item-start justify-content-evenly mt-3 mb-3 d-sm-none">
          <img src={techno} style={{ width: "11%", height: "8%" }} />
          <img src={infinix} style={{ width: "11%", height: "13%" }} />
          </div>
          <div className="d-flex flex-row align-item-start justify-content-evenly mt-3 mb-3 d-sm-none">
          <img src={samsung} style={{ width: "16%", height: "16%" }} />
          <img src={oneplus} style={{ width: "16%", height: "15%" }} />
          </div>
          <div className="d-flex flex-row align-item-start justify-content-evenly mt-3 mb-3 d-sm-none">
          <img src={xiaomi} style={{ width: "12%", height: "13%" }} />
          <img src={oppo} style={{ width: "13%", height: "13%" }} />
        </div>
      </div>
    </>
  )
}

export default Brands
