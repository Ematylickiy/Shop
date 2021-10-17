
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Step1Shipping from './Step1Shipping';
import Step2Checking from './Step2Checking';
import Step3Payment from './Step3Payment';


function ModalWindow({show, setShow}) {
    const [step, setStep] = useState(0);
    const handleClose = () => setShow(false);

    const steps = [
        'Shipping',
        'Checking',
        'Payment',
    ];
    
    const handleSteps = (path) => path === 'next' ? setStep(step + 1) : setStep(step - 1)

    const resetModal = () => {
        setShow(false)
        localStorage.clear();
        setStep(0)
        window.location.reload()
    }


    return (
        <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Check Out</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Stepper activeStep={step} alternativeLabel>
                                {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                                ))}
                            </Stepper>
                {step === 0 ?
                    
                    <Step1Shipping  handleSteps={handleSteps} step={step} /> :
                     
                    step === 1 ? <Step2Checking handleSteps={handleSteps} step={step}/> :
                    step === 2 ? <Step3Payment handleSteps={handleSteps} step={step}/> :
                    step === 3 ?
                        <div className='succedPage'>
                            <h1 className='text-center p-4 text-success text-uppercase'>The payment was successful!</h1>
                            <img  onClick={resetModal} src="https://static.tildacdn.com/tild6261-3462-4565-b566-366332323264/__.png" width='200px' alt="" />
                        </div> :
                    ''    
                        }
                                
                        </Modal.Body>
        </Modal>
    )
}

export default ModalWindow
