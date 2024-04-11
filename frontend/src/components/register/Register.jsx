import React from 'react';
import './Register.css';
import { FaUser, FaLock} from "react-icons/fa6";

const Register = () =>{
    return (
        <>
        <div className='main'>
        <div>
            <img src="/assets/logo.png"/>
        </div>
        <div className='wrapper' id="registerform">
            <form action="">
                <h1>Signup</h1>
                <div className="input-box">
                    <input type="text" placeholder='Name' required/>
                </div>
                <select name="gender" className='gender' id='box'>
                        <option value="">Please select your gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                </select>
                
                <div className="input-box">
                    <input type="text" placeholder='username' required/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder='password'/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder='confirm password'/>
                </div>
                <div className="but">
                    <button type= "input-box" id='submit'>Login</button>
                </div>
                
            </form>
        </div>
        </div>
        </>
    );
};

export default Register;