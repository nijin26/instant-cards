import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import "./App.css";

import NavBar from "./Components/Navigation/NavBar/NavBar";
import Home from "./Components/Home/Home";
import { useStateValue } from "./store/StateProvider";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/mycards"></Route>
        <Route path="/login"></Route>
        <Route path="/">
          <NavBar />
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
