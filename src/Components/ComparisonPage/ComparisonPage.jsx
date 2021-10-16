import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Parametr from './Parametr'

import './ComparisonPage.css'

function ComparisonPage() {
    const [select, setSelect] = useState(false)
    const state = useSelector(state => state.comparison)

    let defaultParams = []
    let parametrs = []

    if (state.length) {
        defaultParams = Object.keys(state[0])
        defaultParams = defaultParams.filter(item=> item !== 'id' && item !== 'img'  &&  item !== 'name' && item !=='price' && item !=='type' && item !=='count')
    }
    
    const [differentParams, setDifferentParams] = useState(defaultParams)


    const test = () => {
        setSelect(!select)

        if (!select) {
            let count = 1;
            state.map((item, index) => {
                if (state[count]) {
                    let values = Object.values(state[count])
                    for (let key in item) {
                        if (!values.includes(item[key])) {
                            parametrs.push(key)
                        }
                    };
                }
                count++
            })
            parametrs = [...new Set(parametrs)]
            parametrs = parametrs.filter(item=> item !== 'id' && item !== 'img'  &&  item !== 'name' && item !=='price')
            setDifferentParams(parametrs)
        }
        else {
            setDifferentParams(defaultParams)
        }
    }



console.log(differentParams)
    return (
        <>
            {state.length > 1 ?
                <div className='wrap-page-compare'>
            <div className="container">

            <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onChange={test} checked={select} />
                    <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Hide identical parameters</label>
            </div>

                <div className="row">
                    {state.map(device => (
                        <div className='col' key={device.id}>
                            <h4>{device.name}</h4>
                            <div className='wrap-image'>
                                <div className='image-device' style={{ backgroundImage: `url(${device.img})` }}></div>
                            </div>
                            <h4>{device.price}.00$</h4>
                        <hr />
                            {differentParams.map(param => (
                                <> {param === 'screen' ?
                                    <h5>{device[param]}</h5>
                                    : <><Parametr parametr={device[param]} logo={param} key={device.id}/><hr />  </>}
                                </>    
                            ))}
                        </div>
                    ))}
                    {/* {state.length > 1 ?
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
                                        <Parametr parametr={battery} logo={'Battery'}/><hr/>
                                    </>
                                        :
                                    <>
                                        <Parametr parametr={display} logo={'display'}/><hr/>
                                        <Parametr parametr={camera} logo={'Camera'}/> <hr/>
                                        <Parametr parametr={CPU} logo={'CPU'}/> <hr/>
                                        <Parametr parametr={memory} logo={'memory'} RAM={RAM}/> <hr/>
                                        <Parametr parametr={battery} logo={'Battery'}/> <hr/>
                                    </>    
                            }
                            </div>
                        ))
                         :
                         <h2>Please, select minimum 2 products</h2>
                } */}
                </div>
            </div>
        </div> : <h2 className='info'>Please, select minimum 2 products</h2>
        }
        </>
    )
}

export default ComparisonPage
