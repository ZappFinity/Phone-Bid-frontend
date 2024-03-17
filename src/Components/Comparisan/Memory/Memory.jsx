import React from 'react';
import './Style.css'
const Memory = () => {
  // Dummy data for demonstration
  const data = [
    ['Internal Memory', 
    '64 GB', 
    '128 GB',
    '', 
    ''],
    ['RAM', 
    '4 GB', 
    '128GB 6GB RAM 256GB 8GB RAM', 
    ' ', 
    ''],
    ['Card Slot', 
    'microSDXC', 
    'microSDXC(dedicated slot)', 
    ' ', 
    ''],
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

export default Memory;