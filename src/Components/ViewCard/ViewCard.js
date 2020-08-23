import React from "react";

import "./ViewCard.css";

const ViewCard = ({ card }) => {
  const bgColor = card?.color;

  const style = {
    backgroundColor: bgColor?.toLowerCase(),
  };

  return (
    <div style={style} className="viewcard">
      <img src={card?.image} className="viewcard__logo" alt="" />

      <div className="viewcard__details">
        <div className="name">
          <p> {card?.name} </p>
        </div>
        <div className="job">
          {" "}
          <p> {card?.job} </p>
        </div>
        <div className="mobile">
          {" "}
          <p> {card?.mobile} </p>
        </div>
        <div className="email">
          {" "}
          <p> {card?.email} </p>
        </div>
        <div className="website">
          {" "}
          <p> {card?.website} </p>
        </div>
      </div>
    </div>
  );
};

export default ViewCard;
