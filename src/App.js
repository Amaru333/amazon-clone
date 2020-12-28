import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import LoginPage from './components/LoginPage';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login" exact>
            <LoginPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
