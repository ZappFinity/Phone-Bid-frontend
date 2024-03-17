import React from 'react';
import './Style.css'
const Camera = () => {
  // Dummy data for demonstration
  const data = [
    ['Front Camera', 
    '5 MP', 
    '8 MP',
    '', 
    ''],
    ['Front Flash Light', 
    'No', 
    'No', 
    '', 
    ''],
    ['Front Video Recording', 
    '720p@30fps', 
    '1080p@30fps', 
    '', 
    ''],
    ['Back Flash Light', 
    'Yes', 
    'Yes', 
    '', 
    ''],
    ['Back Camera', 
    '13MP + QVGA', 
    '50 MP + 2 MP + 0.08 MP', 
    '', 
    ''],
    ['Back Video Recording', 
    '1080p@30fps',
     '1080p@30fps',
      '', 
      '']
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
};

export default Camera;