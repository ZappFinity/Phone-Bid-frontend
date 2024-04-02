import React, { useEffect, useState } from 'react';
import './Style.css';

const DisplayData = ({ selectedMobileId1,selectedMobileId2,selectedMobileId3,selectedMobileId4 }) => {
  const [mobileData, setMobileData] = useState(null);
  const [mobileData2, setMobileData2] = useState(null);
  const [mobileData3, setMobileData3] = useState(null);
  const [mobileData4, setMobileData4] = useState(null);

  // dropdown1 
  useEffect(() => {
    const fetchMobileData1 = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/comparison/show/${selectedMobileId1}`,{
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            'Accept': "application/json",
          },
        });
        
        const data = await response.json();
       
        setMobileData(data);
      } catch (error) {
        console.error('Error fetching mobile data:', error);
      }
    };

    if (selectedMobileId1) {
      fetchMobileData1();
    } else {
      setMobileData(null);
    }
  }, [selectedMobileId1]);

  // dropdown2 
  useEffect(() => {
    const fetchMobileData2 = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/comparison/show/${selectedMobileId2}`,{
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            'Accept': "application/json",
          },
        });
       
        const data = await response.json();
      
        setMobileData2(data);
      } catch (error) {
        console.error('Error fetching mobile data:', error);
      }
    };

    if (selectedMobileId2) {
      fetchMobileData2();
    } else {
      setMobileData2(null);
    }
  }, [selectedMobileId2]);

   // dropdown3 
   useEffect(() => {
    const fetchMobileData3 = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/comparison/show/${selectedMobileId3}`,{
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            'Accept': "application/json",
          },
        });
       
        const data = await response.json();
       
        setMobileData3(data);
      } catch (error) {
        console.error('Error fetching mobile data:', error);
      }
    };

    if (selectedMobileId3) {
      fetchMobileData3();
    } else {
      setMobileData3(null);
    }
  }, [selectedMobileId3]);

  // dropdown4
  useEffect(() => {
    const fetchMobileData4 = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/comparison/show/${selectedMobileId4}`,{
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            'Accept': "application/json",
          },
        });
       
        const data = await response.json();
        
        setMobileData4(data);
      } catch (error) {
        console.error('Error fetching mobile data:', error);
      }
    };

    if (selectedMobileId4) {
      fetchMobileData4();
    } else {
      setMobileData4(null);
    }
  }, [selectedMobileId4]);

 if (!mobileData) {
  const data = [
    ['Screen  Size', '6.74 inches', '6.74 inches','', ''],
    ['Screen Resolution', '720 x 1600 pixels', '720 x 1600 pixels', '', ''],
    ['Screen Type', 'IPS HD+', 'IPS LCD. 90HZ. 450nits(type).600 nits(HBM)', '', ''],
    ['Screen Protectcion', 'N/A', 'Corning Gorilla Glass', '', ''],
  ];

  return (
      <div className='mx-lg-5'>
          <table className="custom-table">
              <tbody>
                  {data.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                          {row.map((cell, colIndex) => (
                              <td key={colIndex}>{cell}</td>
                          ))}
                      </tr>
                  ))}
              </tbody>
          </table>
      </div>
  );
}

  return (
    <div className='mx-lg-5'>
      <table className="custom-table">
      <tbody>
      <tr>
            <td>Screen Size</td>
            <td>{mobileData && mobileData.data ? mobileData.data.screen_size : ' '}</td>
            <td>{mobileData2 && mobileData2.data ? mobileData2.data.screen_size : ' '}</td>
            <td>{mobileData3 && mobileData3.data ? mobileData3.data.screen_size : ' '}</td>
            <td>{mobileData4 && mobileData4.data ? mobileData4.data.screen_size : ' '}</td>
          </tr>
          <tr>
            <td>Screen Resolution</td>
            <td>{mobileData && mobileData.data ? mobileData.data.screen_resolution : ' '}</td>
            <td>{mobileData2 && mobileData2.data ? mobileData2.data.screen_resolution : ' '}</td>
            <td>{mobileData3 && mobileData3.data ? mobileData3.data.screen_resolution : ' '}</td>
            <td>{mobileData4 && mobileData4.data ? mobileData4.data.screen_resolution : ' '}</td>
          </tr>
          <tr>
            <td>Screen Type</td>
            <td>{mobileData && mobileData.data ? mobileData.data.screen_type : ' '}</td>
            <td>{mobileData2 && mobileData2.data ? mobileData2.data.screen_type : ' '}</td>
            <td>{mobileData3 && mobileData3.data ? mobileData3.data.screen_type : ' '}</td>
            <td>{mobileData4 && mobileData4.data ? mobileData4.data.screen_type : ' '}</td>

          </tr>
          <tr>
            <td>Screen Protection</td>
            <td>{mobileData && mobileData.data ? mobileData.data.screen_protection : ' '}</td>
            <td>{mobileData2 && mobileData2.data ? mobileData2.data.screen_protection : ' '}</td>
            <td>{mobileData3 && mobileData3.data ? mobileData3.data.screen_protection : ' '}</td>
            <td>{mobileData4 && mobileData4.data ? mobileData4.data.screen_protection : ' '}</td>
          </tr>
</tbody>
      </table>
    </div>
  );
};

export default DisplayData;


