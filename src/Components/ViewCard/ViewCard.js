import React from "react";
import { Link } from "react-router-dom";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PermPhoneMsgIcon from "@material-ui/icons/PermPhoneMsg";
import LanguageIcon from "@material-ui/icons/Language";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import TelegramIcon from "@material-ui/icons/Telegram";
import "./ViewCard.css";

const ViewCard = ({ card }) => {
  const bgColor = card?.color;

  const style = {
    backgroundColor: bgColor?.toLowerCase(),
  };

  return (
    <div style={style} className="viewcard">
      <img src={card?.image} className="viewcard__logo" alt="" />

      <p className="name"> {card?.name} </p>
      <p className="job"> {card?.job} </p>

      <div className="viewcard__socialIcons">
        {card?.linkedin && (
          <a href={`//${card.linkedin}`} target={"_blank"}>
            <LinkedInIcon />
          </a>
        )}
        {card?.insta && (
          <a href={card.insta} target={"_blank"}>
            {" "}
            <InstagramIcon />
          </a>
        )}
        {card?.facebook && (
          <a href={card.facebook} target={"_blank"}>
            {" "}
            <FacebookIcon />
          </a>
        )}
        {card?.github && (
          <a href={card.github} target={"_blank"}>
            {" "}
            <GitHubIcon />
          </a>
        )}
        {card?.telegram && (
          <a href={card.telegram} target={"_blank"}>
            {" "}
            <TelegramIcon />
          </a>
        )}
      </div>

      <div className="viewcard__details">
        {card?.place && (
          <div className="place">
            <LocationOnIcon />
            <p> {card?.place} </p>
          </div>
        )}
        {card?.mobile && (
          <div className="mobile">
            <PermPhoneMsgIcon /> <p> {card?.mobile} </p>
          </div>
        )}
        {card?.email && (
          <div className="email">
            {" "}
            <EmailIcon />
            <p> {card?.email} </p>
          </div>
        )}
        {card?.website && (
          <div className="website">
            {" "}
            <LanguageIcon />
            <p> {card?.website} </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewCard;
