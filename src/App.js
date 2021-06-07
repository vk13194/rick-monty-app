import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Details from "./components/Details";

const App = () => {
  return (
    <Router>
      <Navbar />
  <Switch>
      <Route path="/" component={Home} exact/>
      <Route path ="/details/:id" component={Details} exact/>
      </Switch>
    </Router>
  );
};

export default App;
