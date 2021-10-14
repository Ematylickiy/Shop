import React, { useEffect, useState } from 'react'
import getData from '../../request'
import './DevicesStyle.css'
import { Spinner } from 'react-bootstrap'
import Device from './Device'
import Filter from '../FilterAndSorting/Filter'
import Sorting from '../FilterAndSorting/Sorting'
import Alert from '@mui/material/Alert';
import { useSelector } from 'react-redux'


function DevicesList({typeDevice}) {
    const [data, setData] = useState()
    const [visibleAlert, setvisibleAlert] = useState('hide-alert')

    useEffect(() => {
        async function getDataDevice() {
            const data = await getData()
            setData(data[typeDevice]);
        }
        getDataDevice() 
    }, [typeDevice]);

    const sortDeviceList = (newData) => setData(newData)
    
    let filteredDevices = useSelector(state => state.filteredList)

    const showAlert = (parametr) => {
        setvisibleAlert(parametr)
        setTimeout(()=>setvisibleAlert('hide-alert'), 1500)
    }


    let visible = filteredDevices.length ? filteredDevices : data

    return (
        <div className="container d-flex justify-content-between align-items-start">
            <div>
                <Sorting data={data} sortDeviceList={sortDeviceList} />
                <div className="row">
                    { data ?
                        visible.map(data => <Device key={data.id} data={data} device={`/${typeDevice}/`} showAlert={showAlert}/>)
                        : <Spinner animation="border" variant="info" />
                    }
                </div>
            </div>
            
            <div>
                {/* <div className={`${visibleAlert}`}>
                    <Alert severity="success">Added to your cart successfully!</Alert>
                </div> */}
                {data ? <Filter data={data} sortDeviceList={sortDeviceList}/> : ''}
            </div>
        </div>
    )
}

export default DevicesList
