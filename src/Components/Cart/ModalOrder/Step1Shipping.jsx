import React from 'react'
import {fieldCustomer, fieldDelivery} from './DataDeliveryFields'
import FieldInput from './FieldInput'



function Step1Shipping({ handleSteps, step}) {
    

    const namesFiledForm = [...fieldCustomer.map(field => field.name), ...fieldDelivery.map(field => field.name)]



    const handleForm = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target);
        namesFiledForm.map(name => localStorage.setItem(name, formData.get(name)))
        handleSteps('next')
    }

    return (
        <form className='needs-validation' onSubmit ={handleForm}>
            <div className='d-flex justify-content-between wrap-data-delivery'>
                <div className='fields'>
                    <h3>Customer</h3>
                    {fieldCustomer.map(field => (
                        <FieldInput placeholder={field.placeholder} name={field.name} type={field.type} key={field.name}/>
                        ))}
                    <textarea
                        className="form-control"
                        placeholder = 'A comment'
                        name='comment'
                        />
                </div>
                
                <div className='fields'>
                    <h3>Delivery</h3>
                    {fieldDelivery.map(field => (
                        <FieldInput placeholder = {field.placeholder} name = {field.name} type = {field.type} min = {field.min} key={field.name}/>
                    ))}
                </div>  
            
            </div>
            <div className='group-btn-steps'>
                <button className='btn btn-outline-secondary' variant="primary" onClick={() => handleSteps('back')} disabled={!step ? true : false}>
                    Back
                </button>
                <button className='btn btn-outline-secondary' variant="secondary" type="submit">
                    Next
                </button>
            </div>
        </form>
    )
}

export default Step1Shipping
