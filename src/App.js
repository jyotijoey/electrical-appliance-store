import React from "react";
import './App.css';
import Navbar from "./Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Banner from "./Banner";

function App() {
  return (

    <div className="App">
        <Router>
            <Switch>
            <Route path={"/"}>
               <Navbar />
               <Banner />
            </Route>

            </Switch>
        </Router>
    </div>

  );
}

export default App;
