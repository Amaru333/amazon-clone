import React from 'react'
import '../style/header.css'
import Logo from '../images/logo.png'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <div className="header">
            <img src={Logo} alt="logo" className="logo" />
            <div className="headerSearch">
                <input className="searchBar" type="text" />
                <SearchIcon className="headerSearchIcon" fontSize="large"/>
            </div>
            <div className="headerOptions">
                <span className="lineOne">Hello,</span>
                <span className="lineTwo">Sign In</span>
            </div>
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
