import React, { Component } from 'react';
import axios from "axios";
import New from "../New/New";
import "./News.css";

class News extends Component {
  state = {
    news: [],
  };

  componentDidMount() {
    axios.get(`https://api.spaceflightnewsapi.net/v3/articles`)
      .then(res => {
        const news = res.data;
        this.setState({ news });
      })
  }

    render() {
        return (
            <div>
                <div className='sort'>
                  <a href='#' className='sort'>Сортировка по дате публикации</a>
                </div>
                {this.state.news.map(news => (
                    <New news={news} key={news.id}/>
                ))}
            </div>
        );
    }
}

export default News;