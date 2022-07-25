import React from 'react';
import {FaBars} from 'react-icons/fa'
import './styles.css';

function App() {
  return (
    <div className='navbar'>
      <li className='navbar-list'>
        <ul><FaBars className='tabs'/></ul>
        <ul className='navbar-element'>Three</ul>
      </li>
    </div>
  );
}

export default App;
