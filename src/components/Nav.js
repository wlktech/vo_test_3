import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav/Nav.css'

export default function Nav() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-secondary navbar-dark shadow">
            <div className="container">
                <NavLink to={'/'} className="navbar-brand">
                    <div className="d-flex">
                        <div className=''>
                            <span className="fw-bold d-block mb-0 pb-0 logo">API Test</span>
                            {/* <span className='sologan mt-0 pt-0'></span> */}
                        </div>
                    </div>
                </NavLink>
                <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to={'/'} className="nav-link">
                                Artist
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={'/albums'} className="nav-link">
                                Albums
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={'/tracks'} className="nav-link">
                                Tracks
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={'/mtv'} className="nav-link">
                                MTV
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    </div>
  )
}
