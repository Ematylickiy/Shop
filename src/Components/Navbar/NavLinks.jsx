import React from 'react'
import {NavLink} from 'react-router-dom'

function NavLinks() {
    return (
        <div className='wrapper-nav-links'>
            <ul className="nav nav-tabs" >
                <li className="nav-item"><NavLink className="nav-link" activeClassName="active" exact to='/'>Home</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to='/smartphones'>Smartphones</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to='/laptops'>Laptops</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to='/gadgets'>Gadgets</NavLink></li>
            </ul>
        </div>

    )
}

export default NavLinks
