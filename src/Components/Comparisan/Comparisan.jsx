import React, {useState, useEffect} from 'react'
import Navbar from '../LandingPage/Navbar'
import End from '../LandingPage/End'
import Table from '../Comparisan/GeneralFeatures/Table'
import DisplayData from './Display/DisplayData'
import Memory from './Memory/Memory'
import Performance from '../Comparisan/Performance/Performance'
import Battery from './Battery/Battery'
import Camera from './Camera/Camera'
import Connectivity from '../Comparisan/Connectivity/Connectivity'
import Buy from './Buy/Buy'

function Comparisan() {
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [inputValue3, setInputValue3] = useState('');
  const [inputValue4, setInputValue4] = useState('');
  const [mobileOptions1, setMobileOptions1] = useState([]);
  const [mobileOptions2, setMobileOptions2] = useState([]);
  const [mobileOptions3, setMobileOptions3] = useState([]);
  const [mobileOptions4, setMobileOptions4] = useState([]);
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [showDropdown3, setShowDropdown3] = useState(false);
  const [showDropdown4, setShowDropdown4] = useState(false);
  const [selectedMobileId1, setSelectedMobileId1] = useState(null);
  const [selectedMobileId2, setSelectedMobileId2] = useState(null);
  const [selectedMobileId3, setSelectedMobileId3] = useState(null);
  const [selectedMobileId4, setSelectedMobileId4] = useState(null);


  // dropdown1 
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

  // dropdown2 
  useEffect(() => {
    const fetchMobiles = async () => {
      if (inputValue2.trim() === '') {
        setMobileOptions2([]);
        setShowDropdown2(false);
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
      mobile.name.toLowerCase().startsWith(inputValue2.toLowerCase())
    );

    setMobileOptions2(filteredMobiles);
        setShowDropdown2(true);
      } catch (error) {
        console.error('Error fetching mobiles:', error);
      }
    };

    fetchMobiles();
  }, [inputValue2]);

   // dropdown3 
   useEffect(() => {
    const fetchMobiles = async () => {
      if (inputValue3.trim() === '') {
        setMobileOptions3([]);
        setShowDropdown3(false);
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
      mobile.name.toLowerCase().startsWith(inputValue3.toLowerCase())
    );

    setMobileOptions3(filteredMobiles);
        setShowDropdown3(true);
      } catch (error) {
        console.error('Error fetching mobiles:', error);
      }
    };

    fetchMobiles();
  }, [inputValue3]);

  // dropdown4
  useEffect(() => {
    const fetchMobiles = async () => {
      if (inputValue4.trim() === '') {
        setMobileOptions4([]);
        setShowDropdown4(false);
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
      mobile.name.toLowerCase().startsWith(inputValue4.toLowerCase())
    );

    setMobileOptions4(filteredMobiles);
        setShowDropdown4(true);
      } catch (error) {
        console.error('Error fetching mobiles:', error);
      }
    };

    fetchMobiles();
  }, [inputValue4]);


  const handleInputChange1 = (event) => {
    setInputValue1(event.target.value);
  };
  const handleInputChange2 = (event) => {
    setInputValue2(event.target.value);
  };
  const handleInputChange3 = (event) => {
    setInputValue3(event.target.value);
  };
  const handleInputChange4 = (event) => {
    setInputValue4(event.target.value);
  };

  const handleSelectMobile1 = (mobile) => {
    setSelectedMobileId1(mobile.id);
    setInputValue1(mobile.name);
    setShowDropdown1(false);
  };
  const handleSelectMobile2 = (mobile) => {
    setSelectedMobileId2(mobile.id);
    setInputValue2(mobile.name);
    setShowDropdown2(false);
  };
  const handleSelectMobile3 = (mobile) => {
    setSelectedMobileId3(mobile.id);
    setInputValue3(mobile.name);
    setShowDropdown3(false);
  };
  const handleSelectMobile4 = (mobile) => {
    setSelectedMobileId4(mobile.id);
    setInputValue4(mobile.name);
    setShowDropdown4(false);
  };

  return (
    <>
      <Navbar/>
    <div style={{ backgroundColor: "#e9ecef" }}>
      <Buy selectedMobileId1={selectedMobileId1}
      selectedMobileId2={selectedMobileId2}
      selectedMobileId3={selectedMobileId3}
      selectedMobileId4={selectedMobileId4}
      />
      {/* Dropdown  */}
      <div className='d-flex flex-row offset-2 gap-4'>
        {/* dropdown1  */}
      <div className='mx-4'>
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
      {/* dropdown2  */}
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
          value={inputValue2}
          onChange={handleInputChange2}
          placeholder="Search for a mobile"
        />
        {showDropdown2 && (
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
            {Array.isArray(mobileOptions2) &&
            mobileOptions2.map(( mobile) => (
              <li key={mobile.id} onClick={() => handleSelectMobile2(mobile)}>
                {mobile.name}
              </li>
            ))}
          </ul>
          </div>
        )}
        </div>
      </div>
       {/* dropdown3 */}
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
          value={inputValue3}
          onChange={handleInputChange3}
          placeholder="Search for a mobile"
        />
        {showDropdown3 && (
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
            {Array.isArray(mobileOptions3) &&
            mobileOptions3.map(( mobile) => (
              <li key={mobile.id} onClick={() => handleSelectMobile3(mobile)}>
                {mobile.name}
              </li>
            ))}
          </ul>
          </div>
        )}
        </div>
      </div>
       {/* dropdown3 */}
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
          value={inputValue4}
          onChange={handleInputChange4}
          placeholder="Search for a mobile"
        />
        {showDropdown4 && (
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
            {Array.isArray(mobileOptions4) &&
            mobileOptions4.map(( mobile) => (
              <li key={mobile.id} onClick={() => handleSelectMobile4(mobile)}>
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
      <Table selectedMobileId1={selectedMobileId1} />
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
