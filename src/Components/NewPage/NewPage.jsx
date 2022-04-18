import "./NewPage.css";
import { useParams } from 'react-router';
import React, { Component, useEffect, useState } from "react";
import axios from "axios";

const NewPage = () => {
    const [newEntity, setNewEntity]  = useState({publishedAt: ''});
    const params = useParams();

    useEffect(() => {
        console.log("effect 2");
        axios
          .get("https://api.spaceflightnewsapi.net/v3/articles/" + params.id)
          .then((res) => {
            setNewEntity(res.data);
          });
      }, [params]);

    return (
        <div className='cardWrapper'>
            <div className='publushInfo'>
                <p>
                    {newEntity.publishedAt.slice(11,16)}, 
                    {newEntity.publishedAt.slice(0,4)}.
                    {newEntity.publishedAt.slice(5,7)}.
                    {newEntity.publishedAt.slice(8,10)},
                </p>
                <a href={newEntity.url} target="_blank" className='sourceLink'>
                    {newEntity.newsSite}
                </a>
            </div>
            <h1>{newEntity.title}</h1>
            <img 
            src={newEntity.imageUrl} 
            alt="newImage"
            className='newImg' />

            <p className='newSummary'>{newEntity.summary}</p>
        </div>
    );
};

export default NewPage;