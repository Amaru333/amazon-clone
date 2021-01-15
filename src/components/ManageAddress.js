import React from 'react';
import { Link } from "react-router-dom";

function ManageAddress() {
    return (
        <div className="manageAddress">
            <div className="manageAddressContents">
                <div className="navigations">
                    <p className="navigation"><Link to='/profile'>Your Account</Link></p>
                    <p className="navigationActive">Your Address</p>
                </div>
                <h1 className="title">Your Address:</h1>
            </div>
        </div>
    )
}

export default ManageAddress;
