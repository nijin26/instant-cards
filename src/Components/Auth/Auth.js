import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

import "./Auth.css";

import Loader from "../UI/Loader";

const Auth = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);

  const login = (e) => {
    e.preventDefault();
    setLoader(true);
    auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        history.push("/");
        setLoader(false);
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });
  };

  const register = (e) => {
    e.preventDefault();

    setLoader(true);
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        history.push("/");
        setLoader(false);
      })
      .catch((e) => {
        alert(e.message);
        setLoader(false);
      });
  };

  return (
    <div className="login">
      {loader ? (
        <div className="login__logo">
          <Loader />
        </div>
      ) : (
        <Link to="/">
          <img
            className="login__logo"
            src="https://i.imgur.com/zER5E8p.png"
            alt=""
          />
        </Link>
      )}
      <div className="login__container">
        <h1> Sign in</h1>
        <form>
          <h5> Email: </h5>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          />
          <h5> Password: </h5>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <button onClick={login} type="submit" className="login__signInBtn">
            {" "}
            Sign In
          </button>
        </form>

        <p>
          {" "}
          If you are new here then enter details on the above field and Click on
          the below button.{" "}
        </p>
        <button onClick={register} className="login__signUpBtn">
          {" "}
          Create Your Account
        </button>
      </div>
    </div>
  );
};

export default Auth;
