import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">React-MUApp</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link" aria-current="page" to="/">Buttons</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/typographyc">Typography</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/gridsys">Grid System</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/cards">Cards</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/appbarcmp">AppBar (Navigation)</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/theming">Theming</Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}
