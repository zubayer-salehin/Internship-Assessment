import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <NavLink to="/" className="navbar-brand" >Internship Test</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link me-4" aria-current="page">Layout 1</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/layout2" className="nav-link me-4" >Layout 2</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/layout3" className="nav-link" >Layout 3</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;