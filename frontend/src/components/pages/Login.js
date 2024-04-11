import React from 'react';
import '../App.css';
import '../index.css';
import './loginForm/LoginForm.css';
import LoginForm from './loginForm/LoginForm.jsx';
import LogoIcon from './brand.jsx';



function Log(props) {
  return (
    <>
    <div className="main">
      <LogoIcon/>
      <LoginForm/>
    </div>
    </>
  );
};

export default Log;
