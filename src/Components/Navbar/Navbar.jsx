import NavLinks from './NavLinks'
import { useSelector } from 'react-redux'

import './Navbar.css'
import { useHistory } from 'react-router'
import SearchPanel from './SearchPanel'


function Navbar() {
    let history = useHistory()
    const state = useSelector((state) => state)

    const handleAddress = (path) => {
        history.push(`/${path}`)
    }

    return (
        <>
            <nav className="navbar navbar-light">
                <div className="container-fluid">
                    <div className='logo'></div>

                    <SearchPanel/>

                    <div className='wrapper-totalPrice'>
                        <button type="button" className="btn btn-sm btn-link position-relative" onClick={()=>handleAddress('compare')}>
                            <img src='https://cdn1.savepice.ru/uploads/2021/10/9/afec8f5bd0e139ec081672427ebf016b-full.png' width="45" alt="" />
                                <span className="badge rounded-pill position-compare">{state.devices.length}</span>
                        </button>
                        
                        <button type="button" className="btn btn-sm btn-link position-relative">
                            <img src='https://img-premium.flaticon.com/png/512/3757/premium/3757832.png?token=exp=1633613088~hmac=986bc0262d12994d2b92ceae23136054' width="45" alt="" />
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
