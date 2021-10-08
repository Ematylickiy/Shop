import React, { useEffect, useState } from 'react'
import getData from '../../request'
import Gadget from './Gadget'
import { Spinner } from 'react-bootstrap'


function GadgetsList() {
    const [data, setData] = useState()

    useEffect(() => {
        async function getDataAuthor() {
            const data = await getData('gadgets')
            setData(data);
        }
        getDataAuthor() 
    },[]);


    return (
        <div className="container">
            <div className="row">
                {data ?
                    data.map(({ id, price, name, img }) => <Gadget id={id} price={price} name={name} key={id} img={img} data={data}/>)
                    : <Spinner animation="border" variant="info" />
                }
            </div>
        </div>
    )
}

export default GadgetsList
