import React, { useContext, useEffect, useState } from 'react'
import '../style/header.css'
import Logo from '../images/logo.png'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import { LoginContext } from '../Context/LoginContext';
import Axios from 'axios';

function Header() {
    const {userInfo, setUserInfo} = useContext(LoginContext);
    const [userLogin, setUserLogin] = useState();
    const [userName, setUserName] = useState("");

    Axios.defaults.withCredentials = true;
    
    useEffect(() => {
        Axios.get('http://localhost:3001/login').then((response) => {
            console.log(response)
            if (response.data.loggedIn === true) {
                console.log(response.data.userSession);
                setUserInfo(response.data);
                // setUserName(userInfo.userSession.name)
                console.log(userInfo);
            } else {
                setUserInfo(response.data);
                setUserName("Sign In");
            }
        })
    }, []);

    // console.log(userLogin);
    // setUserInfo(userLogin);
    // console.log(userInfo);

    // const signedIn = async (userInfo) => {
    //     try {
    //     if (await userInfo.loggedIn) {
    //         return await userInfo.userSession.name;
    //     } else {
    //         return "Sign In";
    //     }} catch (err) {
    //         console.log(err);
    //     }
    // }

    return (
        <div className="header">
            <Link to="/">
                <img src={Logo} alt="logo" className="logo" />
            </Link>
            <div className="headerSearch">
                <input className="searchBar" type="text" />
                <SearchIcon className="headerSearchIcon" fontSize="large"/>
            </div>
            <Link to="/login" style={{ textDecoration: "none" }}>
                <div className="headerOptions">
                    <span className="lineOne">Hello,</span>
                    <span className="lineTwo">{userName}</span>
                </div>
            </Link>
            <div className="headerOptions">
                <span className="lineOne">Returns</span>
                <span className="lineTwo">& Orders</span>
            </div>
            <div className="headerOptions2">
                <ShoppingCartIcon />
                <p>Cart (0)</p>
            </div>
        </div>
    )
}

export default Header;
