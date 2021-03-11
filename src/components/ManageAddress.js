import React from "react";
import { Link } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import "../style/manageAddress.css";

let amazoneUserData = JSON.parse(window.localStorage.getItem("amazoneUser"));
if (amazoneUserData) {
  let userName = amazoneUserData.name;
}
function ManageAddress() {
  return (
    <div className="manageAddress">
      <div className="manageAddressContents">
        <div className="navigations">
          <p className="navigationLink">
            <Link to="/profile" className="navigationLink">
              Your Account
            </Link>
          </p>
          <p>&nbsp;&gt;&nbsp;</p>
          <p className="navigationActive"> Your Address</p>
        </div>
        <h1 className="manageAddressTitle">Your Addresses:</h1>
        <div className="manageAddressBox">
          <Link
            to="/profile/user/address/add"
            style={{ textDecoration: "none" }}
          >
            <div className="addAddressBox">
              <AddIcon className="plus" fontSize="large" />
              <h2 className="addAddressText">Add address</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ManageAddress;
