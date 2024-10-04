import React from 'react';
import './LoginForm.css';
import { FaUser, FaLock} from "react-icons/fa6";

const LoginForm = () =>{
    return (
        <>
        <div className='wrapper-login' >
            <form action="http://127.0.0.1:5000/auth/login" method='post'>
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" name='username' placeholder='Username' required/>
                    <FaUser className='icon'/>
                </div>
                <div className="input-box">
                    <input type="password" name='password' placeholder='Password' required/>
                    <FaLock className='icon' />
                </div>
                <div className="remember-forgot">
                    <label htmlFor=""><input type="checkbox" /> Remember me</label>
                    <a href="/">Forgot password?</a>
                </div>
                <div className="but">
                    <button type= "submit">Login</button>
                </div>
                

                <div className="register-link">
                    <p>Don't have an account? <a href="/register"> Register</a></p>
                </div>
            </form>
        </div>
        </>
    );
};

export default LoginForm;