import React from 'react';
import './Register.css';
import { FaUser, FaLock} from "react-icons/fa6";

const Register = () =>{
    return (
        <>
        <div className='main-register'>
        <div>
            <img src="/assets/logo.png"/>
        </div>
        <div className='wrapper-register' id="registerform">
            <form action="http://127.0.0.1:5000/auth/signup" method='post'>
                <h1>Signup</h1>
                <div className="input-box">
                    <input type="text" placeholder='Name' name='name' required/>
                </div>
                <select name="gender" className='gender' id='box' >
                        <option value="">Please select your gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                </select>
                
                <div className="input-box">
                    <input type="text" id='' placeholder='username' name='username' required/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder='password' name="password"/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder='confirm password' name='confirmPassword'/>
                </div>
                <div className="but">
                    <button type= "submit" id='submit'>Login</button>
                </div>
                
            </form>
        </div>
        </div>
        </>
    );
};

export default Register;