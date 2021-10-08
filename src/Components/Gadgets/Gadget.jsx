import React from 'react'
import { useHistory } from 'react-router';



function Gadget({ id, price, name, img }) {
    let history = useHistory()
    
    const openPhonePage = (id) => {
        history.push(`/gadgets/${id}`);
    }

    return (
        <div className="col">
            <div key={id} className="card" style={{ width: "18rem" }} onClick={()=>openPhonePage(id)}>
                <div className='img' style={{ backgroundImage:`url(${img})`}}></div>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{price} $</p>
                </div>
            </div>
        </div>
    )
}

export default Gadget