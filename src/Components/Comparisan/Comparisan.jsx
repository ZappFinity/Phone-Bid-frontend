import React, {useState, useEffect} from 'react'
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
  const [inputValue1, setInputValue1] = useState('');
  const [mobileOptions1, setMobileOptions1] = useState([]);
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [selectedMobileId, setSelectedMobileId] = useState(null);

  useEffect(() => {
    const fetchMobiles = async () => {
      if (inputValue1.trim() === '') {
        setMobileOptions1([]);
        setShowDropdown1(false);
        return;
      }

      try {
        const response = await fetch(`http://127.0.0.1:8000/api/comparison/list`,{
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            'Accept': "application/json",
          },
        });
        const responseData = await response.json();
        const filteredMobiles = responseData.data.filter(mobile =>
      mobile.name.toLowerCase().startsWith(inputValue1.toLowerCase())
    );

    setMobileOptions1(filteredMobiles);
        setShowDropdown1(true);
      } catch (error) {
        console.error('Error fetching mobiles:', error);
      }
    };

    fetchMobiles();
  }, [inputValue1]);


  const handleInputChange1 = (event) => {
    setInputValue1(event.target.value);
  };

  const handleSelectMobile1 = (mobile) => {
    setSelectedMobileId(mobile.id);
    setInputValue1(mobile.name);
    setShowDropdown1(false);
  };
  
  return (
    <>
      <Navbar/>
    <div style={{ backgroundColor: "#e9ecef" }}>
      <div className='pt-5'>
      <div className='d-flex flex-row justify-content-around offset-1 mb-5' style={{ backgroundColor: "white", width:'83%'}}>
        <div className='d-flex flex-column mt-4 mb-4 offset-1'>
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
      </div>
      {/* Dropdown  */}
      <div className='d-flex flex-row offset-3 gap-4'>
        {/* dropdown1  */}
      <div className='mx-3'>
      <div
          style={{
            position: "relative",
            cursor: "pointer",
            display: "inline-block",
          }}
        >
        <input
        className='form-control'
          type="text"
          value={inputValue1}
          onChange={handleInputChange1}
          placeholder="Search for a mobile"
        />
        {showDropdown1 && (
          <div
          style={{
            position: "absolute",
            top: "2.5rem",
            right: ".05rem",
            color: "black",
            backgroundColor: "#fff",
            boxShadow: "5px 5px 7px 6px rgba(0, 0, 0, 0.1)",
            borderRadius: "4px",
            paddingLeft: "13px ",
            paddingRight: "13px",
          }}
        >
          <ul>
            {Array.isArray(mobileOptions1) &&
            mobileOptions1.map(( mobile) => (
              <li key={mobile.id} onClick={() => handleSelectMobile1(mobile)}>
                {mobile.name}
              </li>
            ))}
          </ul>
          </div>
        )}
        </div>
      </div>
    </div>

      
      {/* Table  */}
      <div className='pb-5'>
      <h5 className='offset-1 pt-3'>General Features</h5>
      <Table selectedMobileId={selectedMobileId} />
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
