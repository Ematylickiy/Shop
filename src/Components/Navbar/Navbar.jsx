import NavLinks from './NavLinks'
import { useSelector } from 'react-redux'

import './Navbar.css'
import { useState, useEffect } from 'react'
import getALLData from '../../requestAlldata'
import { useHistory } from 'react-router'


function Navbar() {
    let history = useHistory()
    const state = useSelector((state) => state)
    const [value, setValue] = useState('')
    const [data, setData] = useState('')
    const [resultSearch, setResultSearch] = useState([])
    
    const searchDevice = (valueInp) => {
        setValue(valueInp)
        let aim = []
        if (valueInp) {
            if (data) {
                for (let key in data) {
                    let test = data[key].filter(item => item['name'].toLowerCase().indexOf(valueInp.toLowerCase()) > -1)
                    aim = [...aim, ...test]
                    if (aim.length > 4) {
                        aim.length = 4
                    }
                }
                setResultSearch(aim)
            }
        }
        else setResultSearch('')
    }
    
    useEffect(() => {
        async function getDataAuthor() {
            const data = await getALLData()
            setData(data);
        }
        getDataAuthor() 
    },[]);

    const showPageDevice = (id, type) => {
        history.push(`/${type}/${id}`)
        setValue('')
        setResultSearch('')

    }
    // if (aim.length > 4) {
    //     aim.length = 4
    // }
    // to={}
    return (
        <>
            <nav className="navbar navbar-light">
                <div className="container-fluid">
                    <div className='logo'></div>

                    <div className='wrap-searchPanel'>
                        <form className="d-flex">
                            <input className="searchPanel" type="search" placeholder="Search" aria-label="Search" value={value} onChange={(e)=>searchDevice(e.target.value)}/>
                            <button className="btn btn-outline-info" type="submit">Search</button>
                        </form>

                        <ul className='searchResults list-group'>
                            {resultSearch.length ? resultSearch.map(({ id, price, type, img, name }) => (
                                <li key={name} className='list-group-item'>
                                    <div className='d-flex'>
                                        <img className='img-search'src={img} alt="" />
                                        <div>
                                            <h6 onClick={() => showPageDevice(id, type)} >{name}</h6>
                                            <span>{price}.00 $</span>
                                        </div>
                                    </div>
                                </li>
                            )) : ''}
                        </ul>

                    </div>

                    <div className='wrapper-totalPrice'>
                        <button type="button" className="btn btn-sm btn-link position-relative">
                            <img src='https://img-premium.flaticon.com/png/512/3757/premium/3757832.png?token=exp=1633613088~hmac=986bc0262d12994d2b92ceae23136054' width="45" alt="trolley" />
                                <span className="badge rounded-pill">{state.devices.length}</span>
                        </button>
                        <span className='text-white'>{state.totalPrice},00$</span>  
                    </div>
                </div>
            </nav>
            <NavLinks/>
        </>
    )
}

export default Navbar
