import React from "react";

import "./Home.css";
import { useStateValue } from "../../store/StateProvider";

import CreateCard from "../CreateCard/CreateCard";
import ViewCard from "../ViewCard/ViewCard";

const Home = () => {
  const [{ card }] = useStateValue();

  return (
    <div className="Home">
      <div className="Home__left">
        <h1> Create a Visiting Card </h1>

        <CreateCard />
      </div>
      <div className="Home__right">
        <h2> Preview </h2>

        <ViewCard card={card} />
      </div>
    </div>
  );
};

export default Home;
