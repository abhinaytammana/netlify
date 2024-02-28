import React from 'react';
import logo from "../Asserts/logo.png"

function Header() {
  return (
    <div className="header ">
    <img 
        src={logo} 
        alt="" 
        className=''
        style={{height:"100px",width:"350px",}}
    />
    </div>
  );
}

export default Header;
