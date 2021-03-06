import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Parametr from './Parametr'
import './ComparisonPage.css'
import { deleteAllFromComparison, deleteFromComparison } from '../../Store/actions';
import { useHistory } from 'react-router'


function ComparisonPage() {

    const [select, setSelect] = useState(false)
    let history = useHistory()
    
    const state = useSelector(state => state.comparison)
    const dispatch = useDispatch()

    let defaultParams = []
    let differentParametrs = []

    if (state.length) {
        defaultParams = Object.keys(state[0])
        defaultParams = defaultParams.filter(item=> item !== 'id' && item !== 'img'  &&  item !== 'name' && item !=='price' && item !=='type' && item !=='count')
    }
    
    const [paramsForRender, setParamsForRender] = useState(defaultParams);

    const hideOrShowUniqueParams = () => {
        setSelect(!select)

        if (!select) {
            let count = 1;
            state.map(item => {
                if (state[count]) {
                    let values = Object.values(state[count])
                    for (let key in item) {
                        if (!values.includes(item[key])) {
                            differentParametrs.push(key)
                        }
                    };
                }
                count++
                return differentParametrs
            })
            differentParametrs = [...new Set(differentParametrs)]
            differentParametrs = differentParametrs.filter(item=> item !== 'id' && item !== 'img'  &&  item !== 'name' && item !=='price')
            setParamsForRender(differentParametrs)
        }
        else {
            setParamsForRender(defaultParams)
        }
    }

    const removeFromComparison = (device) => {
        dispatch(deleteFromComparison(device))
        hideOrShowUniqueParams()
    }

    const deleteAll = () => dispatch(deleteAllFromComparison())


    return (
        <>
            {state.length ? <button className='btn btn-danger delete-all-btn' onClick={deleteAll}>Delete all</button> : ''}
            {state.length > 1 ?
                <div className='wrap-page-compare'>
            <div className="container">

            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onChange={hideOrShowUniqueParams} checked={select} />
                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Hide identical parameters</label>
            </div>
                <div className="row">
                    {state.map(device => (
                        <div className='col' key={device.id.toString()}>

                            <h4>{device.name}
                                <span className='delete-from-comparison' onClick={()=>removeFromComparison(device)}>&#10060;</span>
                            </h4>
                            
                            <div className='wrap-image' onClick={() => history.push(`/${device.type}/${device.id}`)}>
                                <div className='image-device' style={{ backgroundImage: `url(${device.img})` }}></div>
                            </div>
                            <h4>{device.price}.00$</h4>
                        <hr />
                            {paramsForRender.map(param => (
                                <div key = {Math.random()}>
                                    {param === 'screen' ?
                                    <><h5>{device[param]}</h5><hr /></>
                                    : <><Parametr parametr={device[param]} logo={param} /><hr />  </>}
                                </div>    
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div> : <h2 className='info'>Please, select minimum 2 products</h2>
        }
        </>
    )
}

export default ComparisonPage
