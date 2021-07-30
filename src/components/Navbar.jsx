import React, { useContext } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';
import { AuthTypes } from '../types/AuthTypes';

const Navbar = () => {


    const history = useHistory();

    const {dispatch} = useContext(AuthContext)


    const handleLogout = () => {

        dispatch({type: AuthTypes.logout})
        history.replace('/login')

    }

    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
        <h2 className="navbar-brand" href="#">DRAGON BALL</h2>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <NavLink activeClassName='active text-white' className="nav-link" aria-current="page" to='/men'>Men</NavLink>
            </li>
            <li className="nav-item">
            <NavLink activeClassName='active text-white' className="nav-link" to='/women'>Women</NavLink>
            </li>
            <li className="nav-item">
            <NavLink activeClassName='active text-white' className="nav-link" to='/search'>Busqueda</NavLink>
            </li>
        </ul>
        <div className='d-flex'>
            <button className='btn btn-danger btn-sm' onClick={handleLogout}>Logout</button>
        </div>
        </div>
    </div>
    </nav>

    )
}

export default Navbar
