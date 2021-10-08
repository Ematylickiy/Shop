import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import getData from '../../request';
import { Spinner } from 'react-bootstrap'
import { useHistory } from 'react-router';



function PhonePage() {

    const [data, setData] = useState()
    const { id } = useParams();
    let history = useHistory()
    
    useEffect(() => {
        async function getDataAuthor() {
            const data = await getData('smartphones')
            setData(data[id - 1]);
        }
        getDataAuthor()
    }, [id]);

    const backPage = () => {
        history.push('/smartphones');
    }

    return (
        data ?
            <div className='pagePhone'>
                <h1>
                    <span onClick={backPage}>	&#8249;</span>
                    {data.name}
                </h1>
                <img src={data.img} alt="" />
                
                <h2>General information</h2>
                <p>Built-in memory: { `${data.memory} Gb`}</p>
                <p>2 SIM cards: 	&#9989;</p>
                <p>Guarantee: 12 months</p>

                <h2>Camera</h2>
                <p>Main camera: { `${data.camera} Mp`}</p>
                <p>Front-camera: { `${data.frontCamera} Mp`}</p>
                <p>Autofocus: 	&#9989;</p>

                <h2>Display</h2>
                <p>Screen diagonal: {`${data.display}"`}</p>
                
                <h2>Processor and RAM</h2>
                <p>RAM size: {`${data.RAM} Gb`}</p>
                
                <h2>Battery</h2>
                <p>Battery: {`${data.battery} mAh`}</p>
            </div>
        : <Spinner animation="border" variant="info" />
    )
}

export default PhonePage
