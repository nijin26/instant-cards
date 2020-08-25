import React from "react";
import { Link } from "react-router-dom";

import classes from "./NavBar.module.css";

import { useStateValue } from "../../../store/StateProvider";
import { auth } from "../../Auth/firebase";

const NavBar = () => {
  const [{ user }] = useStateValue();

  const logout = () => {
    if (user) {
      auth.signOut();
      localStorage.removeItem("userId");
    }
  };

  return (
    <nav className={classes.navbar}>
      <Link to="/">
        <img
          src="https://i.imgur.com/BoUzMNZ.png"
          className={classes.navbar__logo}
          alt=""
        />
      </Link>

      <div className={classes.navLinks}>
        <Link to="/" className={classes.link}>
          <div className={classes.option}>
            <span className={classes.optionTwo}>Create New Card</span>
          </div>
        </Link>

        {user && (
          <Link to="/mycards" className={classes.link}>
            <div className={classes.option}>
              <span className={classes.optionTwo}>Your Cards</span>
            </div>
          </Link>
        )}

        <Link to={!user && "/login"} className={classes.link}>
          <div onClick={logout} className={classes.option}>
            <span className={classes.optionTwo}>
              {!user ? "Sign In" : "Sign Out"}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
