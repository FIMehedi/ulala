import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/ulala.png';

const nav = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img src={logo} alt="" height="40" className="d-inline-block align-text-top" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/live-tv" className="nav-link active" aria-current="page">Live TV</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/movies" className="nav-link active" aria-current="page">Movies</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/drama" className="nav-link active" aria-current="page">Drama</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        <ul className="navbar-nav ms-2">
                            <li className="nav-item">
                                <button type="button" className="btn btn-success">Login</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    );
};

export default nav;