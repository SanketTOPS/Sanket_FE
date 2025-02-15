import React from 'react'
import { Outlet, Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">TOPS</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/aboutpg">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contactpg">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/profilepg">Profile</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
    )
}
