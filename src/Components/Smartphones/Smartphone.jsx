import React from 'react'
import { useHistory } from 'react-router';


function Smartphone({ id, price, name, img }) {
    let history = useHistory()
    
    const openPhonePage = (id) => {
        history.push(`/smartphones/${id}`);
    }

    return (
        <div className="col">
            <div key={id} className="card" style={{ width: "18rem" }} >
                <div onClick={() => openPhonePage(id)}>
                    <div className='img' style={{ backgroundImage:`url(${img})`}}></div>
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{price} $</p>
                    </div>
                </div>
                <button onClick={() => console.log('clickBTN')}>
                    <img src='https://img-premium.flaticon.com/png/512/3757/premium/3757832.png?token=exp=1633613088~hmac=986bc0262d12994d2b92ceae23136054' width="45" alt="trolley" />
                </button>
            </div>
        </div>
    )
}

export default Smartphone
