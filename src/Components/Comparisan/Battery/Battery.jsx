import React from 'react';
import './Style.css'
const Battery = () => {
  // Dummy data for demonstration
  const data = [
    
    ['Type', 
    '5000 mAh', 
    '5000 mAh', 
    '        ', 
    '        '],
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

export default Battery;