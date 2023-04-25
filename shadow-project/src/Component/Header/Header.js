import React from 'react';
import './Header.css';
import Image from '../../assets/logo.png';


function  Header() {
    return (
        <div className="header-container">
      <img src={Image} alt="My Logo"/>
    <h1>La maison Jungle</h1>
        </div>
        
    );
}
export default Header;








