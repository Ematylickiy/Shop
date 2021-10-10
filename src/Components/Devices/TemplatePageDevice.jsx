import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import getData from '../../request';
import { Spinner } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import ParametrsDevice from './ParametrsDevice';
import MainInfoDevice from './MainInfoDevice';


function TemplatePageDevice({ addCompare, typeDevice, typeScreen }) {
    
    const [data, setData] = useState()
    const { id } = useParams();

    const state = useSelector(state => state.devices)
    
    useEffect(() => {
        async function getDataDevice() {
            const data = await getData()
            setData(data[typeDevice][id - 1]);
        }
        getDataDevice()
    }, [id, typeDevice]);

    return (
        data ?
            <div className='pagePhone container'>
                <MainInfoDevice data={data} addCompare={() => addCompare(state, data)} device={`/${typeDevice}`}/>
                <ParametrsDevice data={data} screen={typeScreen}/>
            </div>
        : <div className = 'wrap-spinner'><Spinner animation="border" variant="info" /></div>

    )
}

export default TemplatePageDevice
