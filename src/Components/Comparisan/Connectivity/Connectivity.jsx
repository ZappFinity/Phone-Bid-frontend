import React, { useEffect, useState } from 'react';
import './Style.css';

const Connectivity = ({ selectedMobileId1,selectedMobileId2,selectedMobileId3,selectedMobileId4 }) => {
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
  ['Bluetooth','Yes', 'Yes','', ''],
  ['3G', 'Yes', 'Yes', '', ''],
  ['4G/LTE', 'Yes', 'Yes', '', ''],
  ['5G', 'No', 'No', '', ''],
  ['Radio', 'N/A', 'FM radio', '', ''],
  ['WiFi', 'Yes','Yes', '', ''],
  ['NFC', 'No','Yes (market/region dependent)','', '']

];

    return (
        <div className='mx-lg-5'>
            <table className="custom-table">
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, colIndex) => (
                                <td key={colIndex}>
                                   <span className='d-none d-sm-block'>{colIndex === 0 ? <b>{cell}</b> : cell} </span>
                                <span className='d-sm-none'> {colIndex === 0 ? <b>{cell}</b> : cell && colIndex == 1 ? cell : null} </span>
                                  </td>
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
            <td><b>Bluetooth</b></td>
            <td>{mobileData && mobileData.data ? mobileData.data.bluetooth : ' '}</td>
            <td>{mobileData2 && mobileData2.data ? mobileData2.data.bluetooth : ' '}</td>
            <td>{mobileData3 && mobileData3.data ? mobileData3.data.bluetooth : ' '}</td>
            <td>{mobileData4 && mobileData4.data ? mobileData4.data.bluetooth : ' '}</td>
          </tr>
          <tr>
            <td><b>3G</b></td>
            <td>{mobileData && mobileData.data ? mobileData.data.three_G : ' '}</td>
            <td>{mobileData2 && mobileData2.data ? mobileData2.data.three_G : ' '}</td>
            <td>{mobileData3 && mobileData3.data ? mobileData3.data.three_G : ' '}</td>
            <td>{mobileData4 && mobileData4.data ? mobileData4.data.three_G : ' '}</td>
          </tr>
          <tr>
            <td><b>4G/LTE</b></td>
            <td>{mobileData && mobileData.data ? mobileData.data.four_G_LTE : ' '}</td>
            <td>{mobileData2 && mobileData2.data ? mobileData2.data.four_G_LTE : ' '}</td>
            <td>{mobileData3 && mobileData3.data ? mobileData3.data.four_G_LTE : ' '}</td>
            <td>{mobileData4 && mobileData4.data ? mobileData4.data.four_G_LTE : ' '}</td>

          </tr>
          <tr>
            <td><b></b></td>
            <td>{mobileData && mobileData.data ? mobileData.data.five_G : ' '}</td>
            <td>{mobileData2 && mobileData2.data ? mobileData2.data.five_G : ' '}</td>
            <td>{mobileData3 && mobileData3.data ? mobileData3.data.five_G : ' '}</td>
            <td>{mobileData4 && mobileData4.data ? mobileData4.data.five_G : ' '}</td>
          </tr>
          <tr>
            <td><b>Radio</b></td>
            <td>{mobileData && mobileData.data ? mobileData.data.radio : ''}</td>
            <td>{mobileData2 && mobileData2.data ? mobileData2.data.radio : ''}</td>
            <td>{mobileData3 && mobileData3.data ? mobileData3.data.radio : ''}</td>
            <td>{mobileData4 && mobileData4.data ? mobileData4.data.radio : ''}</td>
          </tr>
          <tr>
            <td><b>Wifi</b></td>
            <td>{mobileData && mobileData.data ? mobileData.data.wifi : ''}</td>
            <td>{mobileData2 && mobileData2.data ? mobileData2.data.wifi : ''}</td>
            <td>{mobileData3 && mobileData3.data ? mobileData3.data.wifi : ''}</td>
            <td>{mobileData4 && mobileData4.data ? mobileData4.data.wifi : ''}</td>
          </tr>
          <tr>
            <td><b>NFC</b></td>
            <td>{mobileData && mobileData.data ? mobileData.data.nfc : ''}</td>
            <td>{mobileData2 && mobileData2.data ? mobileData2.data.nfc : ''}</td>
            <td>{mobileData3 && mobileData3.data ? mobileData3.data.nfc : ''}</td>
            <td>{mobileData4 && mobileData4.data ? mobileData4.data.nfc : ''}</td>
          </tr>
</tbody>
      </table>
    </div>
  );
};

export default Connectivity;







