import React from 'react';
import Logo from '../images/amazon-logo-transparent.png';
import '../style/LoginPage.css';
import { Link } from 'react-router-dom';

function LoginPage() {
    return (
        <div className="loginPage">
            <div className="outerBox">
                <Link to="/">
                    <img src={Logo} alt="login" className="loginLogo"/>
                </Link>
            </div>
            <div className="innerBox">
                <div className="innerElements">
                    <h1>Login</h1>
                    <p>Enter your email id</p>
                    <input type="field" className="loginInput" />
                    <p>Enter your password</p>
                    <input type="field" className="loginInput" />
                    <button className="loginButton">Continue</button>
                    <span className="terms">By logging in you are agreeing to the Terms and Conditions</span>
                </div>
            </div>
            <div className="register">
                <div className="aDivider">
                    <h5><span className="line">New to Amazon?</span></h5>
                </div>
                <div className="registerationButton">
                    <button className="registerButton">Create a new Amazon account</button>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
