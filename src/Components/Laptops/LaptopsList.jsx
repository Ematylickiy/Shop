import React, { useEffect, useState } from 'react'
import getData from '../../request'
import Laptop from './Laptop'
import { Spinner } from 'react-bootstrap'

function LaptopsList() {
    const [data, setData] = useState()

    useEffect(() => {
        async function getDataAuthor() {
            const data = await getData('laptops')
            setData(data);
        }
        getDataAuthor() 
    },[]);


    return (
        <div className="container">
            <div className="row">
                {data ?
                    data.map(({ id, price, name, img }) => <Laptop id={id} price={price} name={name} key={id} img={img}/>)
                    : <Spinner animation="border" variant="info" />
                }
            </div>
        </div>
    )
}

export default LaptopsList
