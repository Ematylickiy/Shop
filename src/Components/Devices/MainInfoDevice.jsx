import React from 'react'
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux'
import addToCompare from '../../Store/actions';
import { useDispatch } from 'react-redux'


function MainInfoDevice({ data, device }) {
    
    let history = useHistory()
    const state = useSelector(state => state.devices)
    const dispatch = useDispatch()

    const backPage = () => {
        history.push(device);
    }
    

    const addCompare = (state, data) => {
      if (!state.length) {
          dispatch(addToCompare(data))
      }
      else {
          let productNameBool = state.some(device => device.name === data.name)
          let productTypeBool = state.some(device => device.type !== data.type)
          if (productNameBool) {
              return alert('Product has already been added')
          }
          if (productTypeBool) {
              return alert('You are trying to compare different types of products')
          }
          else dispatch(addToCompare(data)) 
      }
    }
    
    const { name, img, price } = data

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
                    <h2>{`${price}.00 $`}</h2>
                    <div className='d-flex'>
                        <p>Delivery in 5-7 days (free)</p>
                        <div className='logo-delivery'></div>
                    </div>
                    <button className='btn btn-outline-info'>Add to basket</button>
                    <button onClick={()=>addCompare(state, data)} className='btn btn-outline-info'>Add to comparison</button>
                </div>
            </div>
        
        </div>
    )
}

export default MainInfoDevice
