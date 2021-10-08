/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react'
import getData from '../../request'
import './SmartphonesList.css'
import Smartphone from './Smartphone'
import { Spinner } from 'react-bootstrap'



function SmartphonesList() {

    const [data, setData] = useState()

    useEffect(() => {
        async function getDataAuthor() {
            const data = await getData('smartphones')
            setData(data);
        }
        getDataAuthor() 
    },[]);


    return (
        <div className="container">
            <div className="row">
                {data ?
                    data.map(({ id, price, name, img }) => <Smartphone id={id} price={price} name={name} key={id} img={img}/>)
                    : <Spinner animation="border" variant="info" />
                }
            </div>
        </div>
    )
}

export default SmartphonesList



