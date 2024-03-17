import React from 'react';
import './Style.css'
const DisplayData = () => {
  // Dummy data for demonstration
  const data = [
    ['Screen  Size', 
    '6.74 inches', 
    '6.74 inches',
    '', 
    ''],
    ['Screen Resolution', 
    '720 x 1600 pixels', 
    '720 x 1600 pixels', 
    '', 
    ''],
    ['Screen Type', 
    'IPS HD+', 
    'IPS LCD. 90HZ. 450nits(type).600 nits(HBM)', 
    '', 
    ''],
    ['Screen Protectcion', 
    'N/A', 
    'Corning Gorilla Glass', 
    '', 
    ''],
  ];

  return (
    <div>
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

export default DisplayData;