import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import getData from '../../request';
import { Spinner } from 'react-bootstrap'
import { useHistory } from 'react-router';



function GadgetPage() {

    const [data, setData] = useState()
    const { id } = useParams();
    let history = useHistory()
    
    useEffect(() => {
        async function getDataAuthor() {
            const data = await getData('gadgets')
            setData(data[id - 1]);
        }
        getDataAuthor()
    }, [id]);
    
    const backPage = () => {
        history.push('/gadgets');
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
                
                <h2>Battery</h2>
                <p>Battery: {`${data.battery} days`}</p>
                
            </div>
        : <Spinner animation="border" variant="info" />
    )
}

export default GadgetPage
