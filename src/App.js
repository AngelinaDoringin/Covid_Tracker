import React from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import { Global, Indonesia, Provinsi } from "./pages";

const App = () => {
  return (
    <Router>
      <div>
      <nav>
          <ul>
            <li>
              <Link to="/">Global</Link>
            </li>
            <li>
              <Link to="/about">Indonesia</Link>
            </li>
            <li>
              <Link to="/users">Provinsi</Link>
            </li>
          </ul>
        </nav>  
      <Switch>
        <Route path="/global">
          <Global />
        </Route>
        <Route path="/indonesia">
          <Indonesia />
        </Route>
        <Route path="/provinsi">
          <Provinsi />
        </Route>
      </Switch>
      </div>
    </Router>
  )
}

export default App;