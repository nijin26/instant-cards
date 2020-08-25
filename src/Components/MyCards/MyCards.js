import React, { useEffect, useState } from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import VisibilityIcon from "@material-ui/icons/Visibility";
import axios from "axios";

import "./MyCard.css";

import Loader from "../UI/Loader";
import ViewCard from "../ViewCard/ViewCard";
import { useStateValue } from "../../store/StateProvider";

const MyCards = () => {
  const [{ card }] = useStateValue();

  const userId = localStorage.getItem("userId");
  const [cards, setCards] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const query =
      userId.length === 0 ? "" : '?orderBy="userId"&equalTo="' + userId + '"';

    axios
      .get(`https://visiting-card-maker-ea6b0.firebaseio.com/card.json${query}`)
      .then((res) => {
        const loadedCards = [];
        for (const key in res.data) {
          loadedCards.unshift({ cardkey: key, ...res.data[key] });
        }
        setCards(loadedCards);
        setLoader(false);
      })
      .catch((err) => {
        alert("404 ERROR ! Cards data is unavailable " + err.message);
        setLoader(false);
      });
  }, [card]);

  return (
    <div className="mycards">
      {loader ? (
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
                <DeleteForeverIcon className="option__two" />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyCards;
