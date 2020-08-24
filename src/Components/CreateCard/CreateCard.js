import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import "./CreateCard.css";

import { useStateValue } from "../../store/StateProvider";

const CreateCard = () => {
  const history = useHistory();

  const userId = localStorage.getItem("userId");

  const [{ card, user }, dispatch] = useStateValue();

  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [image, setImage] = useState("");
  const [color, setColor] = useState("");
  const [place, setPlace] = useState("");
  const [linkedin, setLinkedIn] = useState("");
  const [insta, setInsta] = useState("");
  const [facebook, setFacebook] = useState("");
  const [github, setGithub] = useState("");
  const [telegram, setTelegram] = useState("");
  const [bgimage, setBgImage] = useState("");
  const [textcolor, setTextColor] = useState("");

  const previewHandler = (e, key) => {
    if (e === "_") {
      return;
    } else {
      e.preventDefault();
    }

    const card = {
      userId,
      name,
      job,
      mobile,
      email,
      website,
      image,
      color,
      place,
      linkedin,
      insta,
      facebook,
      github,
      telegram,
      bgimage,
      textcolor,
      key,
    };
    dispatch({ type: "ADD_CARD_DETAILS", card: card });
  };

  const publishHandler = () => {
    axios
      .post("https://visiting-card-maker-ea6b0.firebaseio.com/card.json", card)
      .then((response) => {
        dispatch({
          type: "CARD_PUBLISHED",
          key: response.data.name,
        });

        previewHandler("_", response.data.name);

        alert(`Your card with name ${card.name} is Published Successfully ! `);
      })
      .catch((error) =>
        alert(`Click on preview before publishing. ERROR! ${error.message}. `)
      );
  };

  return (
    <div className="createcard">
      <form>
        <p>Full Name:</p>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
        <p>Job Title:</p>
        <input
          value={job}
          onChange={(e) => setJob(e.target.value)}
          type="text"
        />
        <p>Address:</p>
        <input
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          type="text"
        />
        <p>Mobile No:</p>
        <input
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          type="text"
        />
        <p>Email:</p>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
        />
        <p>Website:</p>
        <input
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          type="text"
          placeholder="Avoid prefix https://"
        />
        <p>Company Logo or Personal Image:</p>
        <input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          type="text"
          placeholder="Image address with extension like .jpg, .png"
        />
        <p>Background Colour:</p>
        <input
          value={color}
          onChange={(e) => setColor(e.target.value)}
          type="text"
          placeholder="Enter common colour name or hex code"
        />
        <p>Foreground Colour:</p>
        <input
          value={textcolor}
          onChange={(e) => setTextColor(e.target.value)}
          type="text"
          placeholder="Enter common colour name or hex code"
        />
        <p>Background Image:</p>
        <input
          value={bgimage}
          onChange={(e) => setBgImage(e.target.value)}
          type="text"
          placeholder="Image address with extension like .jpg, .png"
        />

        <h3 style={{ margin: "8px", marginTop: "15px", textAlign: "center" }}>
          {" "}
          Social Icons{" "}
        </h3>
        <p
          style={{
            color: "red",
            margin: "8px",
            textAlign: "center",
            fontSize: "12px",
            fontWeight: "400",
          }}
        >
          {" "}
          (NOTE:- Don't use the prefix "https://")
        </p>

        <p>LinkedIn:</p>
        <input
          value={linkedin}
          onChange={(e) => setLinkedIn(e.target.value)}
          type="text"
        />
        <p>Instagram:</p>
        <input
          value={insta}
          onChange={(e) => setInsta(e.target.value)}
          type="text"
        />
        <p>Facebook:</p>
        <input
          value={facebook}
          onChange={(e) => setFacebook(e.target.value)}
          type="text"
        />
        <p>Github:</p>
        <input
          value={github}
          onChange={(e) => setGithub(e.target.value)}
          type="text"
        />
        <p>Telegram:</p>
        <input
          value={telegram}
          onChange={(e) => setTelegram(e.target.value)}
          type="text"
        />
        <button onClick={previewHandler} className="createcard__btn">
          {" "}
          Preview{" "}
        </button>
      </form>

      <button
        onClick={user ? publishHandler : () => history.push("/login")}
        className="createcard__btn"
      >
        {" "}
        {user ? "Publish" : "SignIn to Publish"}{" "}
      </button>
    </div>
  );
};

export default CreateCard;
