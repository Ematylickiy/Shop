import React, { useEffect, useState } from 'react'
import getData from '../../request'
import './DevicesStyle.css'
import { Spinner } from 'react-bootstrap'
import Device from './Device'



function DevicesList({typeDevice}) {
    const [data, setData] = useState()

    useEffect(() => {
        async function getDataDevice() {
            const data = await getData()
            setData(data[typeDevice]);
        }
        getDataDevice() 
    },[typeDevice]);


    return (
        <div className="container">
            <div className="row">
                {data ?
                    data.map(data => <Device key={data.id} data={data} device= {`/${typeDevice}/`} />)
                    : <Spinner animation="border" variant="info" />
                }
            </div>
        </div>
    )
}

export default DevicesList
