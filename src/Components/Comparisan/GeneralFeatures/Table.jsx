import React from 'react';
import './Style.css'
const Table = () => {
  // Dummy data for demonstration
  const data = [
    ['Release Date', 
    '2024-01-23', 
    '2023-11-10',
    '', 
    ''],
    ['SIM Support', 
    'Dual SIM(Nano-SIM. dual stand-by)', 
    'Dual SIM(Nano-SIM. dual stand-by)', 
    '', 
    ''],
    ['Operating System', 
    'Android 13 Realme UI', 
    'Android 13 MIUI 14', 
    '', 
    ''],
    ['Phone Weight', 
    '186g', 
    '192g', 
    '', 
    ''],
    ['Phone Dimension', 
    '167.2 x 76.7 x 7.9mm',
     '168 x 78 x 8.1mm',
      '', 
      '']
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

export default Table;