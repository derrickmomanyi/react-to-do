import React from 'react';
import {NavLink, Link} from 'react-router-dom';

const Header = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to='/'>
                    <h2 className="navbar-brand">Navbar</h2>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink to='/' className="nav-link">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/create' className="nav-link">Add New ToDo Item</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/login' className="nav-link">Login</NavLink>
                    </li>

                </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Header