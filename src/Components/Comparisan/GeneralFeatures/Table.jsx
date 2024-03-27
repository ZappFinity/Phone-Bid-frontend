import React, { useEffect, useState } from 'react';
import './Style.css';

const Table = ({ selectedMobileId1 }) => {
  const [mobileData, setMobileData] = useState(null);
  // const [mobileData2, setMobileData2] = useState(null);
  // const [mobileData3, setMobileData3] = useState(null);
  // const [mobileData4, setMobileData4] = useState(null);

  // dropdown1 
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
        setMobileData(data);
      } catch (error) {
        console.error('Error fetching mobile data:', error);
      }
    };

    if (selectedMobileId1) {
      fetchMobileData();
    } else {
      setMobileData(null);
    }
  }, [selectedMobileId1]);

  // dropdown2 
  // useEffect(() => {
  //   const fetchMobileData = async () => {
  //     try {
  //       const response = await fetch(`http://127.0.0.1:8000/api/comparison/show/${selectedMobileId2}`,{
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //           'Accept': "application/json",
  //         },
  //       });
  //       console.warn(response);
  //       const data = await response.json();
  //       console.warn('data', data);
  //       setMobileData2(data);
  //     } catch (error) {
  //       console.error('Error fetching mobile data:', error);
  //     }
  //   };

  //   if (selectedMobileId2) {
  //     fetchMobileData();
  //   } else {
  //     setMobileData2(null);
  //   }
  // }, [selectedMobileId2]);

  if (!mobileData) {
    const data = [
        ['Release Date', '2024-01-23', '2023-11-10', '', ''],
        ['SIM Support', 'Dual SIM(Nano-SIM. dual stand-by)', 'Dual SIM(Nano-SIM. dual stand-by)', '', ''],
        ['Operating System', 'Android 13 Realme UI', 'Android 13 MIUI 14', '', ''],
        ['Phone Weight', '186g', '192g', '', ''],
        ['Phone Dimension', '167.2 x 76.7 x 7.9mm', '168 x 78 x 8.1mm', '', '']
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
      {mobileData && mobileData.data && (
    <>
      <tr>
        <td>Release Date</td>
        <td>{mobileData.data.release_date}</td>
        <td>{mobileData.data.release_date}</td>
        <td>{mobileData.data.release_date}</td>
        <td>{mobileData.data.release_date}</td>
      </tr>
      <tr>
        <td>SIM Support</td>
        <td>{mobileData.data.sim_support}</td>
        <td>{mobileData.data.sim_support}</td>
        <td>{mobileData.data.sim_support}</td>
        <td>{mobileData.data.sim_support}</td>
      </tr>
      <tr>
        <td>Operating System</td>
        <td>{mobileData.data.operating_system}</td>
        <td>{mobileData.data.operating_system}</td>
        <td>{mobileData.data.operating_system}</td>
        <td>{mobileData.data.operating_system}</td>
      </tr>
      <tr>
        <td>Phone Weight</td>
        <td>{mobileData.data.phone_weight}</td>
        <td>{mobileData.data.phone_weight}</td>
        <td>{mobileData.data.phone_weight}</td>
        <td>{mobileData.data.phone_weight}</td>
      </tr>
      <tr>
        <td>Phone Dimension</td>
        <td>{mobileData.data.phone_dimensions}</td>
        <td>{mobileData.data.phone_dimensions}</td>
        <td>{mobileData.data.phone_dimensions}</td>
        <td>{mobileData.data.phone_dimensions}</td>
      </tr>
    </>
  )}
</tbody>
      </table>
    </div>
  );
};

export default Table;