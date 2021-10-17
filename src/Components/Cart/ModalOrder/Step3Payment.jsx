import React, { useState } from 'react'
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css'

function Step3Payment({ handleSteps, step }) {


    const [dataCard, setDataCard] = useState({
        cvc: '',
        expiry: '',
        focus: '',
        name: '',
        number: '',
    })

    const handleInputFocus = (e) => setDataCard({ ...dataCard, focus: e.target.name })
    
    const handleForm = (e) => {
        e.preventDefault()
        handleSteps('next')
    }

    return (
        <div className='d-flex wrap-step3 justify-content-between align-items-center'>
            <Cards
                cvc={dataCard.cvc}
                expiry={dataCard.expiry}
                focused={dataCard.focus}
                name={dataCard.name}
                number={dataCard.number}
            />

            <form onSubmit = {handleForm}>
                <input
                    required
                    type="number"
                    name="number"
                    placeholder="Card Number"
                    onChange={(e)=>setDataCard({...dataCard, number: e.target.value})}
                    onFocus={handleInputFocus}
                />
                <input
                    required
                    type="text"
                    name="name"
                    placeholder="Cardholder Name"
                    onChange={(e)=>setDataCard({...dataCard, name: e.target.value})}
                    onFocus={handleInputFocus}
                    maxlength='22'
                />
                <input
                    required
                    type="text"
                    name="expiry"
                    placeholder="Valid thru"
                    onChange={(e)=>setDataCard({...dataCard, expiry: e.target.value})}
                    onFocus={handleInputFocus}
                    maxlength='4'
                />
                <input
                    required
                    type="text"
                    name="cvc"
                    placeholder="CVC"
                    onChange={(e)=>setDataCard({...dataCard, cvc: e.target.value})}
                    onFocus={handleInputFocus}
                    maxlength='3'
                />
                <button className='btn btn-outline-secondary' variant="primary" onClick={() => handleSteps('back')} disabled={!step ? true : false}>
                    Back
                </button>
                <button className='btn btn-outline-success ml-2 ' variant="secondary" type="submit">
                    Pay
                </button>
            </form>
        </div>
    )
}

export default Step3Payment
