import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import New from "../New/New";
import "./PinNew.css";

const PinNew = () => {
  const [newPins, setNewPins] = useState([{ id: 0 }]);

  var pinnedNews = [];
  if (localStorage.getItem("bookmarks")) {
    pinnedNews = JSON.parse(localStorage.getItem("bookmarks"));
  }

  // useEffect(() => {
  //   let stringOfArr = "";

  //   for (let i = 0; i < pinnedNews.length; i++) {
  //     stringOfArr += `id_in=${pinnedNews[i]}&`;
  //   }

  //   axios
  //     .get(`https://api.spaceflightnewsapi.net/v3/articles?` + stringOfArr)
  //     .then((res) => {
  //       setNewPins(res.data);
  //     });
  // }, []);

  useEffect(() => {
    setNewPins(pinnedNews);
  }, []);

  debugger
  if (pinnedNews.length != 0) {
    return (
      <div>
        {newPins.map((newPins) => (
          <New news={newPins} key={newPins.id} />
        ))}
      </div>
    );
  } else {
    return (
      <>
        <h1 className="emptyPinnedNews">Список ваших закрепленных новостей пуст!</h1>
      </>);
  }
};

export default PinNew;
