import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import { LoginContext } from "./Context/LoginContext";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./components/Profile";
import ManageAddress from "./components/ManageAddress";
import AddAddress from "./components/AddAddress";
import EditProfile from "./components/EditProfile";
import EditUserDetails from "./components/EditUserDetails";

function App() {
  const [userInfo, setUserInfo] = useState({});

  const isUserLoggedIn = (uData) => {
    // console.log('executed');
    window.localStorage.setItem("amazoneUser", JSON.stringify(uData));
    setUserInfo(uData);
    console.log(userInfo);
  };

  return (
    <Router>
      <LoginContext.Provider value={{ userInfo, setUserInfo }}>
        <div className="App">
          <Header userData={userInfo} />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/login" exact>
              <LoginPage
                isUserLoggedIn={(userData) => isUserLoggedIn(userData)}
              />
            </Route>
            <Route path="/register" exact>
              <RegisterPage />
            </Route>
            <Route path="/profile" exact>
              <Profile />
            </Route>
            <Route path="/profile/user/address" exact>
              <ManageAddress />
            </Route>
            <Route path="/profile/user/address/add" exact>
              <AddAddress />
            </Route>
            <Route path="/profile/user" exact>
              <EditProfile />
            </Route>
            <Route path="/profile/user/edit" exact>
              <EditUserDetails
                isUserLoggedIn={(userData) => isUserLoggedIn(userData)}
              />
            </Route>
          </Switch>
        </div>
      </LoginContext.Provider>
    </Router>
  );
}

export default App;
