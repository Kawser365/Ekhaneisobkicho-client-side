import logo from './logo.svg';
import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import Admin from './components/Admin/Admin';
import Login from './components/Login/Login';
import Products from './components/Products/Products';
import Checkout from './components/Checkout/Checkout';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">এখানেই সবকিছু</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav justify-content-end">
          <li className="nav-item">
              <Link className="nav-link" to="/home">হোম</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/admin">এডমিন</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/orders">অর্ডার</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/login">লগইন</Link>
              </li>
              <li className="nav-item">
              <p className="nav-link" style={{color:'red'}}>{loggedInUser.name}</p>
              </li>
          </ul>
            </div>
          </div>
        </nav>
        <Switch>
          <PrivateRoute path="/admin">
            <Admin/>
          </PrivateRoute>
          <PrivateRoute path="/orders">
            <Orders/>
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <PrivateRoute path="/checkout/:name">
            <Checkout/>
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
