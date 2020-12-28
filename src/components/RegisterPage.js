import React from 'react';
import Logo from '../images/amazon-logo-transparent.png';
import '../style/LoginPage.css';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";

function RegisterPage() {
    return (
        <div className="registerPage">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Register a new account</title>
            </Helmet>
            <div className="outerBox">
                <Link to="/">
                    <img src={Logo} alt="login" className="loginLogo"/>
                </Link>
            </div>
            <div className="innerBox">
                <div className="innerElements">
                    <h1>Create a new account</h1>
                    <p>Enter your name</p>
                    <input type="field" className="loginInput"/>
                    <p>Enter your email id</p>
                    <input type="field" className="loginInput"/>
                    <p>Enter your mobile number</p>
                    <input type="field" className="loginInput" />
                    <p>Enter your password</p>
                    <input type="password" className="loginInput" />
                    <p>Confirm password</p>
                    <input type="password" className="loginInput" />
                    <button className="loginButton">Create an account</button>
                    <span className="terms">By creating an account in our website, you are agreeing to the Terms and Conditions</span>
                </div>
            </div>
            <div className="register">
                <div className="aDivider">
                    <h5><span className="line">Already have an account?</span></h5>
                </div>
                <Link to="/login">
                    <div className="registerationButton">
                        <button className="registerButton">Click here to Sign In</button>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default RegisterPage
