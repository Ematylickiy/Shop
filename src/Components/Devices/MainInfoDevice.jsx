import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, addToComparison, deleteFromCart, deleteFromComparison } from '../../Store/actions';
import Alert from '@mui/material/Alert';


function MainInfoDevice({ data, device }) {
    const { name, img, price } = data
    data.count = 1

    let history = useHistory()
    const dispatch = useDispatch()

    const stateCart = useSelector(state => state.cart);
    const stateCompasion = useSelector(state => state.comparison);

    const [textBtnCart, setTextBtnCart] = useState()
    const [textBtnComparison, setTextBtnComparison] = useState()
    const [visibleAlertWarning, setVisibleAlertWarning] = useState('hide-alert')
    const [visibleAlertSuccess, setvisibleAlertSuccess] = useState('hide-alert')


    useEffect(() => {
        function checkCart() {
            const isInCart = stateCart.some(item => item.name === name)
            isInCart ? setTextBtnCart('Remove from cart') : setTextBtnCart('Add to cart')
        }
        function checkComparison() {
            const isInComparison = stateCompasion.some(item => item.name === name);
            isInComparison ? setTextBtnComparison('Remove from comparison') : setTextBtnComparison('Add to comparison')
        }
        checkCart()
        checkComparison()
    }, [name, stateCart, stateCompasion])



    const backPage = () => {
        history.push(device);
    }
    
    const showAlert = (parametr, setState) => {
        setState(parametr)
        setTimeout(()=>setState('hide-alert'), 1500)
    }
    

    const addProductToCompasion = () => {
        let productTypeBool = stateCompasion.some(device => device.type !== data.type)
        if (productTypeBool) {
            return showAlert('visible-alert', setVisibleAlertWarning)
        }
        if (textBtnComparison === 'Remove from comparison') {
            dispatch(deleteFromComparison(data))
            setTextBtnComparison('Add to comparison')
        } else {
            dispatch(addToComparison(data))
        }
    }


    const addProductToCart = () => {
        const deviceInCart = stateCart.find(item => item.name === name)
        if (textBtnCart === 'Remove from cart') {
            let amount = deviceInCart.count * price
            dispatch(deleteFromCart(data, amount))
            setTextBtnCart('Add to cart')
        }
        else {
            dispatch(addToCart(data))
            showAlert('visible-alert', setvisibleAlertSuccess)
        }
    }


    return (
        <div>
            <div className = 'wrap-name-device'>
                <span onClick={backPage}></span>
                <h1>{name}</h1>
            </div>

            <div className='content-page-device'>
                <div className='card'>
                    <div style={{ backgroundImage:`url(${img})`}}></div>
                </div>

                <div className="wrap-mainInfo">

                <div className={`${visibleAlertSuccess}`}>
                    <Alert variant="filled" severity="success">Added to your cart successfully!</Alert>
                </div>
                <div className={`${visibleAlertWarning}`}>
                    <Alert variant="filled" severity="warning">You are trying to compare different types of products</Alert>
                </div>
                    
                    <h2>{`${price}.00 $`}</h2>
                    <div className='d-flex'>
                        <p>Delivery in 5-7 days (free)</p>
                        <div className='logo-delivery'></div>
                    </div>
                    <div>
                        <button onClick={addProductToCart} className='btn btn-outline-warning'>{textBtnCart}</button>
                    </div>
                    <div>
                        <button onClick={addProductToCompasion} className='btn btn-outline-info'>{textBtnComparison}</button>
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default MainInfoDevice
