import React from 'react'
import '../style/header.css'
import Logo from '../images/logo.png'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';

function Header() {
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
                    <span className="lineTwo">Sign In</span>
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
