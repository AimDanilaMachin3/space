import "./NewPage.css";
import { useParams } from "react-router";
import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import SimilarNews from "../SimilarNews/SimilarNews";

const NewPage = () => {
  const [newEntity, setNewEntity] = useState({ publishedAt: "", title: "" });
  const params = useParams();

  useEffect(() => {
    axios
      .get("https://api.spaceflightnewsapi.net/v3/articles/" + params.id)
      .then((res) => {
        setNewEntity(res.data);
      });  
  }, [params]);

  return (
    <div className="cardWrapper">
      <div>
        <div className="publushInfo">
          <p>
            {newEntity.publishedAt.slice(11, 16)},
            {newEntity.publishedAt.slice(0, 4)}.
            {newEntity.publishedAt.slice(5, 7)}.
            {newEntity.publishedAt.slice(8, 10)},
          </p>
          <a href={newEntity.url} target="_blank" className="sourceLink">
            {newEntity.newsSite}
          </a>
        </div>
        <h1>{newEntity.title}</h1>
        <img src={newEntity.imageUrl} alt="newImage" className="newImg" />

        <p className="newSummary">{newEntity.summary}</p>
      </div>   
      <div className="similarNews">
        <SimilarNews news={newEntity.title.slice(0, 10)} key={newEntity.id}/>  
      </div>
    </div>
  );
};

export default NewPage;
