import React from 'react';
import './Style.css'
const Camera = () => {
  // Dummy data for demonstration
  const data = [
    ['Bluetooth', 
    'Yes', 
    'Yes',
    '', 
    ''],
    ['3G', 
    'Yes', 
    'Yes', 
    '', 
    ''],
    ['4G/LTE', 
    'Yes', 
    'Yes', 
    '', 
    ''],
    ['5G', 
    'No', 
    'No', 
    '', 
    ''],
    ['Radio', 
    'N/A', 
    'FM radio', 
    '', 
    ''],
    ['WiFi', 
    'Yes',
     'Yes',
      '', 
      ''],
      ['NFC', 
      'No',
       'Yes (market/region dependent)',
        'Yes (market/region dependent)', 
        'Yes (market/region dependent)']

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

export default Camera;