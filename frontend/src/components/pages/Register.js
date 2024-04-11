import React from 'react';
import '../App.css';
import '../index.css';
import './register/Register.css';
import Register from './register/Register.jsx';
import LogoIcon from './brand.jsx';



function Reg(props) {
  return (
    <>
    <div className="main">
      <LogoIcon/>
      <Register/>
    </div>
      
    </>
  );
};

export default Reg;
