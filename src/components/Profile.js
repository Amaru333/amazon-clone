import React from 'react';
import ProfileComponents from './ProfileComponents';
import '../style/Profile.css';

function Profile() {
    return (
        <div className="profile">
            <div className="profileContents">
                <h1 className="profileHeader">Your Account</h1>
                <div className="outerProfileContainer">
                    <ProfileComponents title="Your Orders" description="Track, return or buy things again" src="https://images-na.ssl-images-amazon.com/images/G/31/x-locale/cs/ya/images/Box._CB485927553_.png" />
                    <ProfileComponents title="Login & Security" description="Edit login, name and mobile number" src="https://images-na.ssl-images-amazon.com/images/G/31/x-locale/cs/ya/images/sign-in-lock._CB485931504_.png" />
                    <ProfileComponents title="Your Addresses" description="Edit addresses for orders and gifts" src="https://images-na.ssl-images-amazon.com/images/G/31/x-locale/cs/ya/images/address-map-pin._CB485934183_.png" />
                </div>
            </div>
        </div>
    )
}

export default Profile;