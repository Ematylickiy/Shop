import React from 'react'
import { useHistory } from 'react-router';
import { addToCart } from '../../Store/actions';
import { useDispatch, useSelector } from 'react-redux'



function Device({ data, device }) {
    
    let history = useHistory()
    const openDevicePage = id => {
        history.push(`${device}${id}`);
    }

    const dispatch = useDispatch()
    const state = useSelector(state => state.cart)


    const { id, price, name, img } = data
    
    data.count = 1

    const addProductToCart = () => {
        let namesDevicesInCart = state.map(item=>item.name)
        namesDevicesInCart.includes(name) ? alert ('Product has already been added') : dispatch(addToCart(data))
        // dispatch(addToCart(data))
    }


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
                <div className='d-flex justify-content-center'>
                    <button onClick={addProductToCart} className='add-basket-btn'>Add to cart</button>
                </div>
        </div>
    </div>
    )
}

export default Device
