import React from 'react'
import DataTable from 'react-data-table-component'

function Table() {
    const columns =[
        {
            name:'Releasse Date',
            selector: row => row.releaseDate
        },
        {
            name:'SIM Support',
            selector: row => row.simSupport
        },
        {
            name:'Operating System',
            selector: row => row.operatingSystem
        },
        {
            name:'Phone Weight',
            selector: row => row.phoneWeight
        },
        {
            name:'Phone Dimensions',
            selector: row => row.phoneDimension
        }
    ];
    const data = [
        {
            releaseDate:'2024-01-23',
            simSupport:'Dual SIM(Nano-SIM. dual stand-by)',
            operatingSystem:'Android 13 Realme UI',
            phoneWeight:'186g',
            phoneDimension:'167.2 x 76.7 x 7.9mm'
        },
        {
            releaseDate:'2023-11-10',
            simSupport:'Dual SIM(Nano-SIM. dual stand-by)',
            operatingSystem:'Android 13 MIUI 14',
            phoneWeight:'192g',
            phoneDimension:'168 x 78 x 8.1mm'
        },
        {
            releaseDate:'2024-01-23',
            simSupport:'Dual SIM(Nano-SIM. dual stand-by)',
            operatingSystem:'Android 13 Realme UI',
            phoneWeight:'186g',
            phoneDimension:'167.2 x 76.7 x 7.9mm'
        },
        {
            releaseDate:'2024-01-23',
            simSupport:'Dual SIM(Nano-SIM. dual stand-by)',
            operatingSystem:'Android 13 Realme UI',
            phoneWeight:'186g',
            phoneDimension:'167.2 x 76.7 x 7.9mm'
        }

    ]

  return (
    <div className='mx-lg-5'>
      <DataTable className='col-md-10'
       rows={columns}
       data={data}
       />
       
    </div>
  )
}

export default Table