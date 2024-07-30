import { Link } from "react-scroll"
import "./Navbar.css"

import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar">
        <ul className="navbar-list">
            <li className="navbar-item">
                <Link>Home</Link>
            </li>
            <li className="navbar-item">
                <Link>About</Link>
            </li>
            <li className="navbar-item">
                <Link>Projects</Link>
            </li>
            <li className="navbar-item">
                <Link>Achievements</Link>
            </li>
            <li className="navbar-item">
                <Link>Contact</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar