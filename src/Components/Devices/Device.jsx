import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router';
import { addToCart, deleteFromCart } from '../../Store/actions';
import { useDispatch, useSelector } from 'react-redux'


function Device({ data, device, showAlert }) {
    const { id, price, name, img} = data
    data.count = 1

    const dispatch = useDispatch()
    const state = useSelector(state => state.cart)

    
    let history = useHistory()
    const openDevicePage = id => {
        history.push(`${device}${id}`);
    }

    const [btnAddtoCart, setBtnAddtoCart] = useState()

    useEffect(() => {
        function checkCart() {
            const isInCart = state.some(item => item.name === name)
            setBtnAddtoCart(isInCart)
        }
        checkCart()
    }, [name, state])
    

    const addProductToCart = () => {
        const isInCart = state.some(item => item.name === name)
        const deviceInCart = state.find(item => item.name === name)
        if (isInCart) {
            let amount = deviceInCart.count * price
            dispatch(deleteFromCart(data, amount))
            setBtnAddtoCart(!btnAddtoCart)

        } else {
            dispatch(addToCart(data))
            setBtnAddtoCart(!btnAddtoCart)
            showAlert('visible-alert')
        }
    }


    return (
            <div className="col" title='iPhone'>
            <div className="card" style={{ width: "18rem" }} >
                <div onClick={() => openDevicePage(id)}>
                    <div className='img' style={{ backgroundImage:`url(${img})`}}></div>
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            
                            <p className="card-text">{price} $</p>
                    </div>
                </div>
                    <div className='d-flex justify-content-center'>
                        <button type="button" className="btn btn-sm btn-link position-relative" onClick={addProductToCart}>
                            <img src='https://img-premium.flaticon.com/png/512/3757/premium/3757832.png?token=exp=1633613088~hmac=986bc0262d12994d2b92ceae23136054' width="55" alt="" />
                            <div className={`badge rounded-pill ${btnAddtoCart ? 'test_2' : 'test'}`}> </div>
                        </button>
                    </div>
            </div>
        </div>

    )
}

export default Device
