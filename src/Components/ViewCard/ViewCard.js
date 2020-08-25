import React, { useState, useRef } from "react";
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
import FileCopyIcon from "@material-ui/icons/FileCopy";
import VisibilityIcon from "@material-ui/icons/Visibility";
import "./ViewCard.css";

const ViewCard = React.memo(({ card }) => {
  const [copySuccess, setCopySuccess] = useState("");
  const textAreaRef = useRef(null);

  const bgColor = card?.color;

  const style = {
    backgroundColor: bgColor?.toLowerCase(),
    backgroundImage: `url(${card?.bgimage})`,
    color: card?.textcolor,
  };

  const copyToClipboard = (e) => {
    textAreaRef.current.select();
    document.execCommand("copy");
    e.target.focus();
    setCopySuccess("Copied!");
    setTimeout(() => setCopySuccess(""), 3000);
  };

  return (
    <React.Fragment>
      <div style={style} className="viewcard">
        <img src={card?.image} className="viewcard__logo" alt="" />

        <p className="name"> {card?.name} </p>
        <p className="job"> {card?.job} </p>

        {(card?.linkedin ||
          card?.insta ||
          card?.facebook ||
          card?.github ||
          card?.telegram) && (
          <div className="viewcard__socialIcons">
            {card?.linkedin && (
              <a href={`//${card.linkedin}`} target={"_blank"}>
                <LinkedInIcon alt="LinkedIn" />
              </a>
            )}
            {card?.insta && (
              <a href={`//${card.insta}`} target={"_blank"}>
                {" "}
                <InstagramIcon />
              </a>
            )}
            {card?.facebook && (
              <a href={`//${card.facebook}`} target={"_blank"}>
                {" "}
                <FacebookIcon />
              </a>
            )}
            {card?.github && (
              <a href={`//${card.github}`} target={"_blank"}>
                {" "}
                <GitHubIcon />
              </a>
            )}
            {card?.telegram && (
              <a href={`//${card.telegram}`} target={"_blank"}>
                {" "}
                <TelegramIcon />
              </a>
            )}
          </div>
        )}

        <div className="viewcard__details">
          {card?.place && (
            <div className="place">
              <LocationOnIcon />
              <p> {card?.place} </p>
            </div>
          )}
          {card?.mobile && (
            <div className="mobile">
              <PermPhoneMsgIcon />{" "}
              <a
                className="NavLinks"
                href={`//${card?.mobile}`}
                target={"_blank"}
              >
                <p> {card?.mobile} </p>{" "}
              </a>
            </div>
          )}
          {card?.email && (
            <div className="email">
              {" "}
              <EmailIcon />
              <a
                className="NavLinks"
                href={`//${card?.email}`}
                target={"_blank"}
              >
                {" "}
                <p> {card?.email} </p>{" "}
              </a>
            </div>
          )}
          {card?.website && (
            <div className="website">
              {" "}
              <LanguageIcon />
              <a
                className="NavLinks"
                href={`//${card?.website}`}
                target={"_blank"}
              >
                {" "}
                <p> {card?.website} </p>
              </a>
            </div>
          )}
        </div>
      </div>
      {card?.key && (
        <div className="sharelink">
          <input
            type="text"
            ref={textAreaRef}
            value={`${window.location.protocol}//${window.location.host}/public/${card?.key}/${card?.userId}`}
          />
          <a
            href={`${window.location.protocol}//${window.location.host}/public/${card?.key}/${card?.userId}`}
            target="__black"
            className="option__one"
          >
            <VisibilityIcon />{" "}
          </a>

          {document.queryCommandSupported("copy") && (
            <span className="copyarea">
              <FileCopyIcon className="copyicon" onClick={copyToClipboard} />
              {copySuccess}
            </span>
          )}
        </div>
      )}
    </React.Fragment>
  );
});

export default ViewCard;
