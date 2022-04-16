import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import New from "../New/New";
import "./News.css";

function News() {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    axios.get(`https://api.spaceflightnewsapi.net/v3/articles`).then((res) => {
      const news = res.data;
      setNews(news);
    });
  }, []);

  const handleSort = () => {
    axios
      .get(`https://api.spaceflightnewsapi.net/v3/articles?_sort=publishedAt`)
      .then((res) => {
        const news = res.data;
        setNews(news);
      });
  };

  useEffect(() => {
    console.log("effect 2");
    axios
      .get("https://api.spaceflightnewsapi.net/v3/articles?_start=" + page)
      .then((res) => {
        setNews(res.data);
      });
  }, [page]);

  const next = () => {
    setPage(page + 10);
  };

  const prev = async () => {
    if (page >= 10) {
      setPage(page - 10);
    }
  };

  return (
    <div>
      <div className="sort">
        <a className="sort" onClick={handleSort}>
          Сортировка по дате публикации
        </a>
      </div>

      <div className="sort">
        <a className="sort" onClick={next}>
          2
        </a>
      </div>

      <div className="sort">
        <a className="sort" onClick={prev}>
          1
        </a>
      </div>

      {news.map((news) => (
        <New news={news} key={news.id} />
      ))}
    </div>
  );
}

export default News;
