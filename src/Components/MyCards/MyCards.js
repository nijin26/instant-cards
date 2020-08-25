import React, { useEffect, useState } from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import VisibilityIcon from "@material-ui/icons/Visibility";
import axios from "axios";

import "./MyCard.css";

import Loader from "../UI/Loader";
import ViewCard from "../ViewCard/ViewCard";
import { useStateValue } from "../../store/StateProvider";

const MyCards = React.memo(() => {
  const [{ card }] = useStateValue();

  const userId = localStorage.getItem("userId");
  const [cards, setCards] = useState([]);
  const [loader, setLoader] = useState(false);
  const [empty, setEmpty] = useState(false);

  useEffect(() => {
    const query =
      userId.length === 0 ? "" : '?orderBy="userId"&equalTo="' + userId + '"';

    setLoader(true);

    axios
      .get(`https://visiting-card-maker-ea6b0.firebaseio.com/card.json${query}`)
      .then((res) => {
        const loadedCards = [];
        for (const key in res.data) {
          if (res.data[key].userId === userId) {
            loadedCards.unshift({ cardkey: key, ...res.data[key] });
            setLoader(false);
          } else {
            setEmpty(true);
          }
        }
        setCards(loadedCards);
        setLoader(false);
      })
      .catch((err) => {
        alert("404 ERROR ! Cards data is unavailable " + err.message);
        setLoader(false);
        setEmpty(true);
      });
  }, [card]);

  const deleteCard = (id) => {
    setLoader(true);

    fetch(`https://visiting-card-maker-ea6b0.firebaseio.com/card/${id}.json`, {
      method: "DELETE",
    })
      .then((res) => {
        const cardsCopy = cards;
        const updatedCards = cardsCopy.filter((card) => card.cardkey !== id);
        setCards(updatedCards);
        setLoader(false);
      })
      .catch((err) => {
        alert("404 ERROR ! Cards data is unavailable " + err.message);
        setLoader(false);

        setEmpty(true);
      });
  };

  let cardCollection = loader ? (
    <Loader />
  ) : (
    <ul className="card__item">
      {cards.map((cardItems) => (
        <li key={cardItems.cardkey}>
          {" "}
          <ViewCard card={cardItems} />{" "}
          <div className="cards__icon">
            <a
              href={`${window.location.protocol}//${window.location.host}/public/${cardItems?.cardkey}/${cardItems?.userId}`}
              target="__black"
              className="option__one"
            >
              <VisibilityIcon />{" "}
            </a>
            <DeleteForeverIcon
              className="option__two"
              onClick={() => deleteCard(cardItems?.cardkey)}
            />
          </div>
        </li>
      ))}
    </ul>
  );

  if (empty) {
    cardCollection = (
      <h3 style={{ color: "red", textAlign: "center", margin: "20px" }}>
        {" "}
        Your Card Collection is Empty or Some Network Error{" "}
      </h3>
    );
  }

  return <div className="mycards">{cardCollection}</div>;
});

export default MyCards;
