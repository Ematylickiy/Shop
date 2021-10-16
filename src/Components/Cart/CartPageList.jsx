import React from 'react'
import './CartPage.css'
import { useSelector} from 'react-redux'
import ProductInCard from './ProductInCard';



function CartPageList() {

    const state = useSelector(state => state.cart)
    const totalPrice = useSelector(state => state.totalPrice)

    // ///////////////////////////////////////////////////////////////////////
    // const resultArray = [];
    // state.map(item => {

    //     if(resultArray.find(object => {
    //         if (object.name === item.name) {
    //             return true;
    //         } else {
    //             return false;
    //         }
    //     })){
    //     } else {
    //         resultArray.push(item);
    //     }
    // })
    
/////////////////////////////////////////////////////////////////////////////////////////

    return (
        <div className='wrap-basket container'>
            {state.length > 0 ?
                <div>
                    <div className='wrap-name-device'><h1>BASKET</h1></div>
                    <div className='d-flex'>
                        <table className="table">
                            <thead>
                                <tr>
                                <th scope="col">List of goods</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {state.map(device => (
                                    <ProductInCard device={device} key={device.name}/>
                                ))}
                            </tbody>
                        </table>
                        <div className='wrap-order-info'>
                            <h2>Total price: {totalPrice}.00$</h2>

                            <button className='btn btn-outline-info'>Buy now</button>
                        </div>
                    </div>
                </div>
                :
                    <h1 className='info'>Your cart is empty.</h1>
            }
        </div> 
    )
}

export default CartPageList
