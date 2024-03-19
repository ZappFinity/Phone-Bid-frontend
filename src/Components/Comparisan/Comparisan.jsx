import React from 'react'
import Navbar from '../LandingPage/Navbar'
import infinix from '../img/infinix-zero-x-pro.svg'
import xiaomi from '../img/xiaomi-14.svg'
import End from '../LandingPage/End'
import Table from '../Comparisan/GeneralFeatures/Table'
import DisplayData from './Display/DisplayData'
import Memory from './Memory/Memory'
import Performance from '../Comparisan/Performance/Performance'
import Battery from './Battery/Battery'
import Camera from './Camera/Camera'
import Connectivity from '../Comparisan/Connectivity/Connectivity'

function Comparisan() {
  return (
    <>
      <Navbar/>
    <div style={{ backgroundColor: "#e9ecef" }}>
      <h5 className='offset-1 pt-5'>Comparison of Realme Note 50 with  Xiaomi Redmi 13C</h5>
      <div className='d-flex flex-row justify-content-around offset-1 mb-5' style={{ backgroundColor: "white", width:'83%'}}>
        <div className='mt-5 col-sm-2'>
        <h5 className='mt-5 d-none d-sm-block'>Comparisonof Realme Note 50</h5>
        </div>
        <div className='d-flex flex-column mt-4 mb-4 '>
            <img src={infinix} className='col-sm-10'/>
            <p>Realme Note 50</p>
            <p>RS 22,499</p>
            <button className="btn text-white" style={{ backgroundColor: "#52AB98" }}>Buy Now</button>
        </div>
        <div className='d-flex flex-column mx-4 mt-4 mb-5 d-none d-sm-block'>
            <img src={xiaomi} className='col-sm-9'/>
            <p>Xiaomi Redmi C13</p>
            <p>RS 26,399</p>
            <button className="btn text-white" style={{ backgroundColor: "#52AB98" }}>Buy Now</button>
        </div>
        <div className='d-flex flex-column  mx-2 mt-5'>
            <p className='mt-5'>Compare with </p>
            <p>Enter model to compare</p>
            <input type="text" class="form-control" placeholder="Add mobiles" />
        </div>
        <div className='d-flex flex-column mt-5 d-none d-sm-block'>
            <p className='mt-5'>Compare with </p>
            <p>Enter model to compare</p>
            <input type="text" class="form-control" placeholder="Add mobiles" />
        </div>
      </div>
      <div className='pb-5'>
      <h5 className='offset-1 pt-3'>General Features</h5>
      <Table/>
      <h5 className='offset-1 pt-5'>Display</h5>
     <DisplayData/>
     <h5 className='offset-1 pt-5'>Memory</h5>
     <Memory/>
     <h5 className='offset-1 pt-5'>Performance</h5>
     <Performance/>
     <h5 className='offset-1 pt-5'>Battery</h5>
     <Battery/>
     <h5 className='offset-1 pt-5'>Camera</h5>
     <Camera/>
     <h5 className='offset-1 pt-5'>Connectivity</h5>
     <Connectivity/>
     </div>
    </div>
    <End/>
    </>
  )
}

export default Comparisan
