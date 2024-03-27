import React, { useEffect, useState } from 'react';
import './Style.css';

const Memory = ({ selectedMobileId1,selectedMobileId2,selectedMobileId3,selectedMobileId4 }) => {
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
        console.warn(response);
        const data = await response.json();
        console.warn('dropdown1', data);
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
        console.warn(response);
        const data = await response.json();
        console.warn('dropdown2', data);
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
        console.warn(response);
        const data = await response.json();
        console.warn('dropdown2', data);
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
        console.warn(response);
        const data = await response.json();
        console.warn('dropdown2', data);
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
      ['Internal Memory', '64 GB', '128 GB','', ''],
      ['RAM', '4 GB', '128GB 6GB RAM 256GB 8GB RAM', ' ', ''],
      ['Card Slot', 'microSDXC', 'microSDXC(dedicated slot)', ' ', ''],
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
            <td>Internal Memory</td>
            <td>{mobileData && mobileData.data ? mobileData.data.internal_memory : ' '}</td>
            <td>{mobileData2 && mobileData2.data ? mobileData2.data.internal_memory : ' '}</td>
            <td>{mobileData3 && mobileData3.data ? mobileData3.data.internal_memory : ' '}</td>
            <td>{mobileData4 && mobileData4.data ? mobileData4.data.internal_memory : ' '}</td>
          </tr>
          <tr>
            <td>RAM</td>
            <td>{mobileData && mobileData.data ? mobileData.data.ram : ' '}</td>
            <td>{mobileData2 && mobileData2.data ? mobileData2.data.ram : ' '}</td>
            <td>{mobileData3 && mobileData3.data ? mobileData3.data.ram : ' '}</td>
            <td>{mobileData4 && mobileData4.data ? mobileData4.data.ram : ' '}</td>
          </tr>
          <tr>
            <td>Card Slot</td>
            <td>{mobileData && mobileData.data ? mobileData.data.card_slot : ' '}</td>
            <td>{mobileData2 && mobileData2.data ? mobileData2.data.card_slot : ' '}</td>
            <td>{mobileData3 && mobileData3.data ? mobileData3.data.card_slot : ' '}</td>
            <td>{mobileData4 && mobileData4.data ? mobileData4.data.card_slot : ' '}</td>
          </tr>
</tbody>
      </table>
    </div>
  );
};

export default Memory;





