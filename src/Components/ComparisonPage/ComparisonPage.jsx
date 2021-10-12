import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Parametr from './Parametr'

import './ComparisonPage.css'

function ComparisonPage() {
    const [select, setSelect] = useState(false)
    const state = useSelector(state => state.cart)
    
    return (
        <div className='wrap-page-compare'>
            <div className="container">

            <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onChange={()=>setSelect(!select)} checked={select} />
                    <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Hide identical parameters</label>
            </div>

                <div className="row">
                    {state.length > 1 ?
                        state.map(({ id, name, display, img, camera, CPU, memory, RAM, battery, price, type, protection }) => (
                            <div className='col' key={id}>
                                <h4>{name}</h4>
                                <div className='wrap-image'>
                                    <div className='image-device' style={{ backgroundImage: `url(${img})` }}></div>
                                </div>
                                <h4>{price}.00$</h4>
                                <hr />
                                {select ?
                                    <>
                                        <Parametr parametr={display} logo={'display'}/> <hr/>
                                        <Parametr parametr={memory} logo={'memory'} RAM={RAM} type={type}/><hr/>
                                        <Parametr parametr={battery} logo={'battery'}/><hr/>
                                    </>
                                        :
                                    <>
                                        <Parametr parametr={display} logo={'display'}/><hr/>
                                        <Parametr parametr={camera} logo={'camera'}/> <hr/>
                                        <Parametr parametr={CPU} logo={'CPU'}/> <hr/>
                                        <Parametr parametr={memory} logo={'memory'} RAM={RAM}/> <hr/>
                                        <Parametr parametr={battery} logo={'battery'}/> <hr/>
                                    </>    
                            }
                            </div>
                        ))
                         :
                         <h2>Please, select minimum 2 products</h2>
                }
                </div>
            </div>
        </div>
        
    )
}

export default ComparisonPage
