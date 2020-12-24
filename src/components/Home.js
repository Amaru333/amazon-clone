import React from 'react';
import '../style/home.css';
import HomeProduct from './HomeProduct';

function Home() {
    return (
        <div className="home">
            <div className="homeContainer">
                <div className="maskImage">
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/HeroDec-20/Dec_AuCC_Seasonal_1X._CB414979991_.jpg" alt="homepage" className="imageContainer"/>
                </div>
                <div className="ProductLine">
                    <HomeProduct />
                    <HomeProduct />
                </div>
                <div className="ProductLine">
                    <HomeProduct />
                    <HomeProduct />
                    <HomeProduct />               
                </div>
                <div className="ProductLine">
                    <HomeProduct />
                </div>
            </div>
        </div>
    )
}

export default Home;
