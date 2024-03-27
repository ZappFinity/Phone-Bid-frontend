import React , {useState, useEffect}from 'react'
import infinix from '../../img/infinix-zero-x-pro.svg'
import xiaomi from '../../img/xiaomi-14.svg'
 
function Buy({ selectedMobileId1, selectedMobileId2, selectedMobileId3, selectedMobileId4}) {
    const [mobileData1, setMobileData1] = useState(null);
    const [mobileData2, setMobileData2] = useState(null);
    const [mobileData3, setMobileData3] = useState(null);
    const [mobileData4, setMobileData4] = useState(null);

    // mobile1 
  useEffect(() => {
    const fetchMobileData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/comparison/show/${selectedMobileId1}`,{
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            'Accept': "application/json",
          },
        });
        console.warn(response);
        const data = await response.json();
        console.warn('data', data);
        setMobileData1(data);
      } catch (error) {
        console.error('Error fetching mobile data:', error);
      }
    };

    if (selectedMobileId1) {
      fetchMobileData();
    } else {
      setMobileData1(null);
    }
  }, [selectedMobileId1]);

//   mobile2 
useEffect(() => {
    const fetchMobileData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/comparison/show/${selectedMobileId2}`,{
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            'Accept': "application/json",
          },
        });
        console.warn(response);
        const data = await response.json();
        console.warn('data', data);
        setMobileData2(data);
      } catch (error) {
        console.error('Error fetching mobile data:', error);
      }
    };

    if (selectedMobileId2) {
      fetchMobileData();
    } else {
      setMobileData2(null);
    }
  }, [selectedMobileId2]);

  //   mobile3
useEffect(() => {
    const fetchMobileData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/comparison/show/${selectedMobileId3}`,{
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            'Accept': "application/json",
          },
        });
        console.warn(response);
        const data = await response.json();
        console.warn('data', data);
        setMobileData3(data);
      } catch (error) {
        console.error('Error fetching mobile data:', error);
      }
    };

    if (selectedMobileId3) {
      fetchMobileData();
    } else {
      setMobileData3(null);
    }
  }, [selectedMobileId3]);

   //   mobile4
useEffect(() => {
    const fetchMobileData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/comparison/show/${selectedMobileId4}`,{
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            'Accept': "application/json",
          },
        });
        console.warn(response);
        const data = await response.json();
        console.warn('data', data);
        setMobileData4(data);
      } catch (error) {
        console.error('Error fetching mobile data:', error);
      }
    };

    if (selectedMobileId4) {
      fetchMobileData();
    } else {
      setMobileData4(null);
    }
  }, [selectedMobileId4]);

  return (
    <>
       <div className='pt-5'>
      <div className='d-flex flex-row justify-content-around offset-1 mb-5' style={{ backgroundColor: "white", width:'83%'}}>
      {mobileData1 && mobileData1.data ? (
        
        <div className='d-flex flex-column mt-4 mb-4 offset-1'>
            <img src={mobileData1.data.image} className='col-sm-10'/>
            <p>{mobileData1.data.name}</p>
            <p>{mobileData1.data.price}</p>
            <button className="btn text-white" style={{ backgroundColor: "#52AB98" }}>Buy Now</button>
        </div>
      ):
      <div className='d-flex flex-column mt-4 mb-4 offset-1'>
      <img src={infinix} className='col-sm-10'/>
      <p>Infinix</p>
      <p>49,000 price</p>
      <button className="btn text-white" style={{ backgroundColor: "#52AB98" }}>Buy Now</button>
  </div>
    }
      {mobileData2 && mobileData2.data ? (
         <div className='d-flex flex-column mx-4 mt-4 mb-5 d-none d-sm-block'>
            <img src={mobileData2.data.image} className='col-sm-9'/>
            <p>{mobileData2.data.name}</p>
            <p>{mobileData2.data.price}</p>
            <button className="btn text-white px-5" style={{ backgroundColor: "#52AB98" }}>Buy Now</button>
        </div>
      ):
      <div className='d-flex flex-column mx-4 mt-4 mb-5 d-none d-sm-block'>
      <img src={infinix} className='col-sm-7'/>
      <p>Xiaomi C13</p>
      <p>55,000 price</p>
      <button className="btn text-white px-5" style={{ backgroundColor: "#52AB98" }}>Buy Now</button>
  </div>
    }
      {mobileData3 && mobileData3.data ? (
        <div className='d-flex flex-column mt-4 mb-4 offset-1'>
            <img src={mobileData3.data.image} className='col-sm-10'/>
            <p>{mobileData3.data.name}</p>
            <p>{mobileData3.data.price}</p>
            <button className="btn text-white" style={{ backgroundColor: "#52AB98" }}>Buy Now</button>
        </div>
      ):
      <div className='d-flex flex-column mt-4 mb-4 offset-1'>
            <img src={xiaomi} className='col-sm-10'/>
            <p>Samsung</p>
            <p>89,000 price</p>
            <button className="btn text-white" style={{ backgroundColor: "#52AB98" }}>Buy Now</button>
        </div>
      }
      {mobileData4 && mobileData4.data ? (
        <div className='d-flex flex-column mx-4 mt-4 mb-5 d-none d-sm-block'>
            <img src={mobileData4.data.image} className='col-sm-9'/>
            <p>{mobileData4.data.name}</p>
            <p>{mobileData4.data.price}</p>
            <button className="btn text-white" style={{ backgroundColor: "#52AB98" }}>Buy Now</button>
        </div> 
      ):
      <div className='d-flex flex-column mx-4 mt-4 mb-5 d-none d-sm-block'>
            <img src={infinix} className='col-sm-10'/>
            <p>Oppo</p>
            <p>67,000 price</p>
            <button className="btn text-white" style={{ backgroundColor: "#52AB98" }}>Buy Now</button>
        </div> 
      }
        
      </div>
      </div>
    </>
  )
}

export default Buy
