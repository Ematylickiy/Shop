import React, { useState } from 'react'
import { deleteFromCart } from '../../Store/actions';
import { useDispatch, useSelector } from 'react-redux'
import {decreaseTotalPrice, increaseTotalPrice} from '../../Store/actions'



function ProductInCard({ device }) {

    
    let state = useSelector(state => state.cart)
    const { img, name, price} = device
    state = state.filter(item => item.name === name)[0]
    const [amount, setAmount] = useState(price * state.count)
    

    const [totalQuantityDevice, setTotalQuantityDevice] = useState(state.count)

    const dispatch = useDispatch()

    const removeFromCart = () => {
        dispatch(deleteFromCart(device, amount))
    }


    const removeQuantity = () => {
        if (totalQuantityDevice === 1) {
            return
        }
        setTotalQuantityDevice(totalQuantityDevice - 1)
        setAmount(amount - price)
        dispatch(decreaseTotalPrice(device))
    }


    const addQuantity = () => {
        setTotalQuantityDevice(totalQuantityDevice + 1)
        setAmount(+amount + (+price))
        dispatch(increaseTotalPrice(device))
    }

    return (

        <tr>
            <td className='table-product'>
                <div>
                    <button onClick={removeFromCart} className='remove-product-fromCart'><span>&#10006;</span>Remove</button>
                    <div className='img' style={{ backgroundImage: `url(${img})` }}></div>
                </div>
                <h5 className="card-title">{name}</h5>
            </td>

            <td className='table-price'><p>{price}.00$</p></td>
            
            <td className='table-quantity'>
                <div>
                    <div className="input-group">
                        <button className="btn btn-sm" type="button" onClick={removeQuantity}>-</button>
                        <input
                            type="text"
                            className="form-control text-center form-control-qty"
                            aria-label="Quantity"
                            value={totalQuantityDevice}
                            onChange={(e)=>setTotalQuantityDevice(e.target.value)}
                            readOnly
                        />
                        <button className="btn btn-sm form-control-sm" type="button" onClick={addQuantity}>+</button>
                    </div>
                    </div>
            </td>

            <td className='table-amount'><p>{amount}.00$</p></td>
        </tr>
    )
}

export default ProductInCard
