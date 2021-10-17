import React from 'react'
import { useSelector} from 'react-redux'


function Step2Checking({ handleSteps, step }) {
    

    const state = useSelector(state => state.cart)
    const totalPrice = useSelector(state => state.totalPrice)

    
    return (
        <div className = 'wrap-step2'>
            <h2>Check your purchase details!</h2>
            <div className='d-flex justify-content-between align-items-center'>
                <div>
                    <h5>Name: <span>{localStorage.getItem('name')}</span></h5>
                    <h5>Email: <span>{localStorage.getItem('email')}</span></h5>
                    <h5>Phone number: <span>{localStorage.getItem('phone')}</span></h5>
                </div>
                <div>
                    <h5>Delivery address: <span>{localStorage.getItem('town')}, {localStorage.getItem('address')}</span></h5>
                    <h5>Time of delivery: <span>{localStorage.getItem('dateDelivery')}</span></h5>
                </div>

            </div>
            <div className='step2-device'>
                {state.map(device => (
                    <h5 key={device.name}><span>{device.name}</span> x{device.count}</h5>
                ))}
            </div>


            <h3>Total order amount: {totalPrice},00$</h3>
            <div className='group-btn-steps'>
                <button className='btn btn-outline-secondary' variant="primary" onClick={() => handleSteps('back')} disabled={!step ? true : false}>
                    Back
                </button>
                <button className='btn btn-outline-secondary' onClick={()=>handleSteps('next')} variant="secondary" type="submit">
                    Next
                </button>
            </div>

        </div>
    )
}

export default Step2Checking
