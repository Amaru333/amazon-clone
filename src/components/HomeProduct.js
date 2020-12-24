import React from 'react';
import '../style/homeproduct.css';

function HomeProduct() {
    return (
        <div className="homeProduct">
            <img src="https://images-na.ssl-images-amazon.com/images/I/71dGb%2B7qhQL._SL1500_.jpg" alt="Samsung Curved Monitor" className="homeProductImage" />
            <div className="homeProductInfo">
                <p className="homeProductTitle">Samsung 24inch Curved monitor with AMD Freesync, 144hz refresh rate and Full HD resolution (1920x1080 pixels) with HDMI cable</p>
                <div className="homeProductPrice">
                    <small>₹</small>
                    <strong>13,999</strong>
                </div>
                <div className="homeProductRating">
                    <p>⭐</p>
                    <p>⭐</p>
                    <p>⭐</p>
                </div>
            </div>
            <button className="homeAddToCart">Add to cart</button>
        </div>
    )
}

export default HomeProduct
