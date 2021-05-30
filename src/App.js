import React from "react";
import './App.css';
import Navbar from "./Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Banner from "./Banner";
import Blocks from "./Blocks";
import About from "./About";

function App() {
  return (

    <div className="App">
        <Router>
            <Switch>
            <Route path={"/about"}>
              <About />
            </Route>
            <Route path={"/"}>
               <Navbar />
               <Banner />
               <Blocks />
            </Route>

            </Switch>
        </Router>
    </div>

  );
}

export default App;
