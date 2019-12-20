import React from 'react';
import { Link } from 'react-router-dom';

var Navigacija = (props) => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Dovanos</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/admin" className="nav-link">Admin</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/laiskai" className="nav-link">Laiskai</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div >
    );
}

export default Navigacija;