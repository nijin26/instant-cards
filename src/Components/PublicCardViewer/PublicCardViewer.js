import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import axios from "axios";

import "./PublicCardViewer.css";

import ViewCard from "../ViewCard/ViewCard";
import Loader from "../UI/Loader";

const PublicCardViewer = React.memo(({ match }) => {
  const [cards, setCard] = useState({});
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const userId = match.params.userId;
    const key = match.params.cardId;

    const query =
      userId.length === 0 ? "" : '?orderBy="userId"&equalTo="' + userId + '"';

    axios
      .get(`https://visiting-card-maker-ea6b0.firebaseio.com/card.json${query}`)
      .then((res) => {
        const fetchedCard = Object.assign(res.data[key]);
        setCard({ ...fetchedCard });
        setLoader(false);
      })
      .catch((err) => {
        alert("404 ERROR ! Card data is unavailable");
        setLoader(false);
      });
  }, []);

  return (
    <div className="publicCardViewer">
      {!loader ? <ViewCard card={cards} /> : <Loader />}
    </div>
  );
});

export default withRouter(PublicCardViewer);
