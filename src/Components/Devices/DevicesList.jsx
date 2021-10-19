import React, { useEffect, useState } from 'react'
import getData from '../../request'
import './DevicesStyle.css'
import { Spinner } from 'react-bootstrap'
import Device from './Device'
import Filter from '../FilterAndSorting/Filter'
import Sorting from '../FilterAndSorting/Sorting'
import Alert from '@mui/material/Alert';




function DevicesList({typeDevice}) {
    const [data, setData] = useState()
    const [visibleAlertSuccess, setvisibleAlertSuccess] = useState('hide-alert')
    const [visibleAlertWarning, setVisibleAlertWarning] = useState('hide-alert')
    const [visibleAlertError, setVisibleAlertError] = useState('hide-alert')

    
    useEffect(() => {
        async function getDataDevice() {
            const data = await getData()
            setData(data[typeDevice]);
        }
        getDataDevice() 
    }, [typeDevice]);
    


    const sortDeviceList = (newData) => setData(newData)
    

    const showAlert = (parametr, setState) => {
        setState(parametr)
        setTimeout(()=>setState('hide-alert'), 1500)
    }


    return (
        <div className="container d-flex justify-content-between align-items-start deviceList">
            <div>
                <Sorting data={data} sortDeviceList={sortDeviceList} />
                <div className="row">
                    { data ?
                        data.map(data => <Device key={data.id}
                            data={data}
                            device={`/${typeDevice}/`}
                            showAlert={showAlert}
                            setvisibleAlertSuccess={setvisibleAlertSuccess}
                            setVisibleAlertWarning={setVisibleAlertWarning}
                            setVisibleAlertError={setVisibleAlertError}
                        />)
                        : <Spinner animation="border" variant="info" />
                    }
                </div>
            </div>
            
            <div>

                <div className={`${visibleAlertSuccess}`}>
                    <Alert variant="filled" severity="success">Added to your cart successfully!</Alert>
                </div>
                <div className={`${visibleAlertError}`}>
                    <Alert variant="filled" severity="error">Maximum for comparison - 4!</Alert>
                </div>
                <div className={`${visibleAlertWarning}`}>
                    <Alert variant="filled" severity="warning">You are trying to compare different types of products!</Alert>
                </div>

                {data ? <Filter typeDevice={typeDevice} sortDeviceList={sortDeviceList}/> : ''}
            </div>
        </div>
    )
}

export default DevicesList
