import React from 'react';
import './Style.css'
const Performance = () => {
  // Dummy data for demonstration
  const data = [
    ['Processor', 
    'Unisoc Tiger T612', 
    'Media Tek Helio G85',
    '', 
    ''],
    ['GPU', 
    'Mali-G57', 
    'Mali-G52 MC2', 
    '', 
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

export default Performance;