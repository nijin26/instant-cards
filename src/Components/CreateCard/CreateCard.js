import React, { useState } from "react";

import "./CreateCard.css";

import ViewCard from "../ViewCard/ViewCard";
import { useStateValue } from "../../store/StateProvider";

const CreateCard = () => {
  const [_, dispatch] = useStateValue();

  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [image, setImage] = useState("");
  const [color, setColor] = useState("");

  const previewHandler = (e) => {
    e.preventDefault();

    const card = {
      name,
      job,
      mobile,
      email,
      website,
      image,
      color,
    };
    dispatch({ type: "ADD_CARD_DETAILS", card: card });
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
        />
        <p>Company Logo or Personal Image:</p>
        <input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          type="text"
        />
        <p>Background Colour:</p>
        <input
          value={color}
          onChange={(e) => setColor(e.target.value)}
          type="text"
        />
        <button onClick={previewHandler} className="createcard__btn">
          {" "}
          Preview{" "}
        </button>
      </form>
      <hr />
      <button className="createcard__btn"> Publish </button>
    </div>
  );
};

export default CreateCard;
