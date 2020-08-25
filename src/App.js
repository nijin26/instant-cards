import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";

import "./App.css";

import NavBar from "./Components/Navigation/NavBar/NavBar";
import Home from "./Components/Home/Home";
import Auth from "./Components/Auth/Auth";
import MyCards from "./Components/MyCards/MyCards";
import { useStateValue } from "./store/StateProvider";
import { auth } from "./Components/Auth/firebase";
import PublicCardViewer from "./Components/PublicCardViewer/PublicCardViewer";

const App = () => {
  const [{ user }, dispatch] = useStateValue();

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const unsubcribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({ type: "SET_USER", user: authUser });
        localStorage.setItem("userId", authUser.uid);
      } else {
        dispatch({ type: "SET_USER", user: null });
      }
    });
    return () => {
      unsubcribe();
    };
  }, []);

  let router = (
    <Switch>
      <Route path="/public/:cardId/:userId">
        <PublicCardViewer />
      </Route>
      <Route path="/login">
        <Auth />
      </Route>
      <Route path="/">
        <NavBar />
        <Home />
      </Route>
    </Switch>
  );

  if (user) {
    router = (
      <Switch>
        <Route path="/mycards">
          <NavBar />
          <MyCards />
        </Route>
        <Route path="/public/:cardId/:userId">
          <PublicCardViewer />
        </Route>
        <Route path="/">
          <NavBar />
          <Home />
        </Route>
      </Switch>
    );
  }

  return <BrowserRouter>{router}</BrowserRouter>;
};

export default App;
