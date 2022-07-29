import React from 'react';
import SearchBar from '../searchBar';
import {FaBars} from 'react-icons/fa'
import './styles.css';

function Navbar(){
    return(
    <nav>
        <li className='navbar-list'>
            <ul className='navbar-element'><FaBars/></ul>
            <ul className='navbar-element'><SearchBar/></ul>
        </li>
    </nav>
    );
}

export default Navbar;