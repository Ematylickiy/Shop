import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import getData from '../../request';
import { Spinner } from 'react-bootstrap'
import { useHistory } from 'react-router';



function LaptopPage() {

    const [data, setData] = useState()
    const { id } = useParams();
    let history = useHistory()
    
    useEffect(() => {
        async function getDataAuthor() {
            const data = await getData('laptops')
            setData(data[id - 1]);
        }
        getDataAuthor()
    }, [id]);
    
    const backPage = () => {
        history.push('/laptops');
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
                <p>Guarantee: 12 months</p>

                <h2>Display</h2>
                <p>Screen diagonal: {`${data.display}"`}</p>
                
                <h2>Processor and RAM</h2>
                <p>RAM size: {`${data.RAM} Gb`}</p>
                <p>Processor: {`${data.CPU}`}</p>
                <p>CPU clock speed: {`${data.CPU_clock_speed} MHz`}</p>
                
            </div>
        : <Spinner animation="border" variant="info" />
    )
}

export default LaptopPage
