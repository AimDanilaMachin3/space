import React, { Component, useEffect } from "react";
import "./New.css";
import { useNavigate  } from 'react-router-dom'

const New = (props) => {
    let publishedAtTime = props.news.updatedAt.slice(11,16);
    let publishedAtYear = props.news.updatedAt.slice(0,4);
    let publishedAtMonth = props.news.updatedAt.slice(5,7);
    let publishedAtDay = props.news.updatedAt.slice(8,10);

    const navigate = useNavigate();

    function handleClick() {
        navigate('/new/'+ props.news.id);
    }

    return (
        <div className="newWrapper">
            <img src={props.news.imageUrl} 
                alt="imageUrl" className="imgNew"/>
            <div className="post">
                <h1>{props.news.title}</h1>
                <div className="dispFlex">
                    <a href={props.news.url} target="_blank">
                        {props.news.newsSite}
                    </a>
                    <p>
                        {publishedAtTime}, {publishedAtDay}.{publishedAtMonth}.{publishedAtYear}
                    </p>
                </div>
                <button type="button" className="button" onClick={handleClick}>
                    Подробнее
                </button>
            </div>
        </div>
    );
}

export default New;