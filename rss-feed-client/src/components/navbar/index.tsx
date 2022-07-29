import React from 'react';
import {FaBars} from 'react-icons/fa'
import './styles.css';

function Navbar(){
    return(
    <nav>
        <li className='navbar-list'>
            <ul><FaBars className='tabs' /></ul>
            <ul className='navbar-element'>Three</ul>
            <ul className='navbar-element'>two</ul>
        </li>
    </nav>
    );
}

export default Navbar;