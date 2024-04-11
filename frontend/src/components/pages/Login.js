import React from 'react';
import '../loginForm/LoginForm.css';
import LoginForm from '../loginForm/LoginForm.jsx';
import LogoIcon from '../brand.jsx';


function Log(props) {
  return (
    <>
    <div className="main">
      {/* <Header/> */}
      <LogoIcon/>
      <LoginForm/>
    </div>
    </>
  );
};

export default Log;
