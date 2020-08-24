import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import "./App.css";

import NavBar from "./Components/Navigation/NavBar/NavBar";
import Home from "./Components/Home/Home";
import Auth from "./Components/Auth/Auth";
import { useStateValue } from "./store/StateProvider";
import { auth } from "./Components/Auth/firebase";
import PublicCardViewer from "./Components/PublicCardViewer/PublicCardViewer";

const App = () => {
  const [{ user }, dispatch] = useStateValue();

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

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/mycards"></Route>
        <Route path="/login">
          <Auth />
        </Route>
        <Route path="/public/:cardId/:userId">
          <PublicCardViewer />
        </Route>
        <Route path="/">
          <NavBar />
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
