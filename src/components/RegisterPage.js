import React, { useState } from 'react';
import Logo from '../images/amazon-logo-transparent.png';
import '../style/LoginPage.css';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";
import Axios from 'axios';

function RegisterPage() {

    const [registerName, setRegisterName] = useState("");
    const [registerMail, setRegisterMail] = useState("");
    const [registerMobile, setRegisterMobile] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    
    const registerUser = () => {
        Axios.post('http://localhost:3001/createUser', {
            name: registerName,
            mail: registerMail,
            mobile: registerMobile,
            password: registerPassword
        }).then(() => {
            console.log("Success");
        });
    };

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
                    <input type="field" className="loginInput" onChange={(e) => {
                        setRegisterName(e.target.value);
                    }} />
                    <p>Enter your email id</p>
                    <input type="field" className="loginInput" onChange={(e) => {
                        setRegisterMail(e.target.value);
                    }} />
                    <p>Enter your mobile number</p>
                    <input type="field" className="loginInput" onChange={(e) => {
                        setRegisterMobile(e.target.value);
                    }} />
                    <p>Enter your password</p>
                    <input type="password" className="loginInput" onChange={(e) => {
                        setRegisterPassword(e.target.value);
                    }} />
                    <p>Confirm password</p>
                    <input type="password" className="loginInput" />
                    <button className="loginButton" onClick={registerUser}>Create an account</button>
                    <span className="terms">By creating an account in our website, you are agreeing to the Terms and Conditions</span>
                </div>
            </div>
            <div className="register">
                <div className="aDivider">
                    <h5><span className="line">Already have an account?</span></h5>
                </div>
                <div className="registerationButton">
                    <Link to="/login">
                        <button className="registerButton">Click here to Sign In</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage
