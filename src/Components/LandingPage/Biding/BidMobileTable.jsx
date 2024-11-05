import React from "react";

const generalFeature = [
  ["Release Date", "2024-01-23"],
  ["SIM Support", "Dual SIM(Nano-SIM. dual stand-by)"],
  ["Operating System", "Android 13 Realme UI"],
  ["Phone Weight", "186g"],
  ["Phone Dimension", "167.2 x 76.7 x 7.9mm"],
];
const display = [
    ['Screen  Size', '6.74 inches'],
    ['Screen Resolution', '720 x 1600 pixels'],
    ['Screen Type', 'IPS HD+'],
    ['Screen Protectcion', 'N/A'],
  ];
  const memory = [
    ['Internal Memory', '64 GB'],
    ['RAM', '4 GB'],
    ['Card Slot', 'microSDXC'],
  ];
  const performance = [
    ['Processor', 'Unisoc Tiger T612'],
    ['GPU', 'Mali-G57'],
  ];
  const battery = [ 
    ['Battery', '5000 mAh'],
  ];
  const camera = [
    ['Front Camera', '5 MP'],
    ['Front Flash Light'],
    ['Front Video Recording', '720p@30fps'],
    ['Back Flash Light', 'Yes'],
    ['Back Camera', '13MP + QVGA'],
    ['Back Video Recording', '1080p@30fps']
  ];
  const connectivity = [
    ['Bluetooth','Yes'],
    ['3G', 'Yes'],
    ['4G/LTE', 'Yes'],
    ['5G', 'No'],
    ['Radio', 'N/A'],
    ['WiFi', 'Yes'],
    ['NFC', 'No']
  
  ];
function BidMobileTable() {
  return (
    <>
      <div className="d-flex flex-row justify-content-center gap-4 ">
        <div className="d-flex flex-column gap-3">
          <div
            className="card card-custom"
            style={{
              boxShadow: "0px 5px 12px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h5 className="p-3">General Features</h5>
            <table className="custom-table">
              <tbody>
                {generalFeature.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, colIndex) => (
                      <td key={colIndex}>
                        <span className="d-none d-sm-block">
                          {colIndex === 0 ? <b>{cell}</b> : cell}{" "}
                        </span>
                        <span className="d-sm-none">
                          {" "}
                          {colIndex === 0 ? (
                            <b>{cell}</b>
                          ) : cell && colIndex == 1 ? (
                            cell
                          ) : null}{" "}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div
            className="card card-custom"
            style={{
              boxShadow: "0px 5px 12px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h5 className="p-3">Display</h5>
            <table className="custom-table">
              <tbody>
                  {display.map((row, rowIndex) => (
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
            <div
            className="card card-custom"
            style={{
              boxShadow: "0px 5px 12px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h5 className="p-3">Memory</h5>
            <table className="custom-table">
              <tbody>
                  {memory.map((row, rowIndex) => (
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
            <div
            className="card card-custom"
            style={{
              boxShadow: "0px 5px 12px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h5 className="p-3">Performance</h5>
            <table className="custom-table">
              <tbody>
                  {performance.map((row, rowIndex) => (
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
        </div>
        <div className="d-flex flex-column gap-3 align-items-center">
        <div
            className="card card-custom"
            style={{
              boxShadow: "0px 5px 12px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h5 className="p-3">Battery</h5>
            <table className="custom-table">
              <tbody className=''>
                  {battery.map((row, rowIndex) => (
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
            <div
            className="card card-custom"
            style={{
              boxShadow: "0px 5px 12px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h5 className="p-3">Camera</h5>
            <table className="custom-table">
                <tbody>
                    {camera.map((row, rowIndex) => (
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
            <div
            className="card card-custom"
            style={{
              boxShadow: "0px 5px 12px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h5 className="p-3">Connectivity</h5>
            <table className="custom-table">
                <tbody>
                    {connectivity.map((row, rowIndex) => (
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
        </div>
      </div>
    </>
  );
}

export default BidMobileTable;
