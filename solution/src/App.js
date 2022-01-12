import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { signInWithGoogle } from './helpers/firebase';
import { BrowserRouter as Routes, Route, Link } from "react-router-dom";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { Container } from 'react-bootstrap';

function App() {
  return (<Container>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={Login}>{Login}</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={Login}>{Login}</Link>
              </li>
              <button onClick={signInWithGoogle}>Sign in with Google</button>
              <li className="nav-item">
                <Link className="nav-link" to={SignUp}>{SignUp}</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Routes>
            <Route exact path='/' element={<Login/>} />
            <Route path="/sign-in" element={<Login/>} />
            <Route path="/sign-up" element={<SignUp/>} />
          </Routes>
        </div>
      </div>
    </div></Container>
  );
}

export default App;