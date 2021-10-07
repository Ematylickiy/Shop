import React from 'react'
import NavLinks  from './NavLinks'

import './Navbar.css'

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-light">
                <div className="container-fluid">
                    <div className='logo'></div>
                    <form className="d-flex">
                        <input className="searchPanel" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-info" type="submit">Search</button>
                    </form>
                
                <button type="button" className="btn btn-sm btn-link position-relative">
                    <img src='https://img-premium.flaticon.com/png/512/3757/premium/3757832.png?token=exp=1633613088~hmac=986bc0262d12994d2b92ceae23136054' width="45" alt="trolley" />
                    <span className="badge rounded-pill">1</span>
                </button>
                </div>
            </nav>
            <NavLinks/>
        </>
    )
}

export default Navbar
