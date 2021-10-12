import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import getData from '../../request';
import { Spinner } from 'react-bootstrap'

import ParametrsDevice from './ParametrsDevice';
import MainInfoDevice from './MainInfoDevice';


function TemplatePageDevice({ typeDevice }) {
    
    const [data, setData] = useState()
    const { id } = useParams();
    
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
                <MainInfoDevice data={data} device={`/${typeDevice}`}/>
                <ParametrsDevice data={data} />
            </div>
        : <div className = 'wrap-spinner'><Spinner animation="border" variant="info" /></div>

    )
}

export default TemplatePageDevice
