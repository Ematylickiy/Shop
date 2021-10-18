import React, { useState } from 'react'
import './CartPage.css'
import { useSelector} from 'react-redux'
import ProductInCard from './ProductInCard';
import ModalWindow from './ModalOrder/ModalWindow';


function CartPageList() {

    const state = useSelector(state => state.cart);
    const totalPrice = useSelector(state => state.totalPrice);
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);

    const headersTables = ['List of goods', 'Price', 'Quantity', 'Amount'];
    
    return (
        <div className='wrap-basket container'>
            {state.length > 0 ?
                <div>
                    <div className='wrap-name-device'><h1>BASKET</h1></div>
                    <div className='d-flex'>
                        <table className="table">
                            <thead>
                                <tr>
                                    {headersTables.map(header=><th scope="col">{header}</th>)}
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
                            <button className='btn btn-outline-info' onClick={handleShow}>Buy now</button>
                        </div>
                    
                    </div>
                </div>
                :
                    <h1 className='info'>Your cart is empty.</h1>
            }
            <ModalWindow show={showModal} setShow={setShowModal}/>
        </div> 
    )
}

export default CartPageList

