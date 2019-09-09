import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            
            <NavLink className='navbar-brand' to='/'>Laravel With React</NavLink>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample04">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink className='nav-link' to='/'>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className='nav-link' to='/categories'>Categories</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className='nav-link' to='/about'>About Us</NavLink>
                    </li>
                </ul>
                <form className="form-inline my-2 my-md-0">
                    <input className="form-control" type="text" placeholder="Search" />
                </form>
            </div>

        </nav>
    )
}

export default Navbar;