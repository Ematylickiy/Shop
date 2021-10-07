import React from 'react'
import {NavLink} from 'react-router-dom'

function NavLinks() {
    return (
        <div className='wrapper-nav-links'>
            <ul className="nav nav-tabs" >
                <li className="nav-item"><NavLink className="nav-link" activeClassName="active" exact to='/'>Home</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" activeClassName="active" exact to='/smartphones'>Smartphones</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" activeClassName="active" exact to='/laptops'>Laptops</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" activeClassName="active" exact to='/gadgets'>Gadgets</NavLink></li>
            </ul>
        </div>

    )
}

//// сделать HOC(ковальчук) либо пробежать по массиву
export default NavLinks
