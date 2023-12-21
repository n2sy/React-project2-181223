import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/">Accueil</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/cv">CV</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/cv/add">AjouterCV</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="#">Login</NavLink>
            </li>
        </ul>
    )
}

export default Navbar