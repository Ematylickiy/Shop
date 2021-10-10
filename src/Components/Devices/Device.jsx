import React from 'react'
import { useHistory } from 'react-router';


function Device({ data, device}) {
    let history = useHistory()
    
    const openDevicePage = id => {
        history.push(`${device}${id}`);
    }

    const {id, price, name, img} = data
    
    return (
        <div className="col">
        <div className="card" style={{ width: "18rem" }} >
            <div onClick={() => openDevicePage(id)}>
                <div className='img' style={{ backgroundImage:`url(${img})`}}></div>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{price} $</p>
                </div>
            </div>

            <button className = 'btn btn-info'>Buy</button>
        </div>
    </div>
    )
}

export default Device
