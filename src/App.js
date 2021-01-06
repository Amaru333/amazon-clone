import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import { LoginContext } from './Context/LoginContext';
import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [userInfo, setUserInfo] = useState({});

  return (
    <Router>
      <LoginContext.Provider value={{ userInfo, setUserInfo }}>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/login" exact>
              <LoginPage />
            </Route>
            <Route path="/register" exact>
              <RegisterPage />
            </Route>
          </Switch>
        </div>
      </LoginContext.Provider>
    </Router>
  );
}

export default App;
