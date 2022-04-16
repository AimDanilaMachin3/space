import React, { Component } from 'react';
import axios from "axios";
import New from "../New/New";
import Pagination from "../Pagination/Pagination";
import "./News.css";

class News extends Component {
  state = {
    news: [],
    countPage: 0
  };

  componentDidMount() {
    axios.get(`https://api.spaceflightnewsapi.net/v3/articles`)
      .then(res => {
        const news = res.data;
        this.setState({ news });
      })
  }

  handleSort = () => {
    axios.get(`https://api.spaceflightnewsapi.net/v3/articles?_sort=publishedAt`)
    .then(res => {
      const news = res.data;
      this.setState({ news });
    })
  }

  handlePage = () => {
    //debugger;
    this.setState({countPage: this.state.countPage + 10 })
    console.log("next" + this.state.countPage);
    axios.get(`https://api.spaceflightnewsapi.net/v3/articles?_start=` + this.state.countPage)
    .then(res => {
      const news = res.data;
      this.setState({ news });
    })
  }

  handlePageDicr = () => {
    //debugger;
    
    if(this.state.countPage>=10){
      this.setState({countPage: this.state.countPage - 10 })
    }
    console.log("prev" + this.state.countPage);
    axios.get(`https://api.spaceflightnewsapi.net/v3/articles?_start=` + this.state.countPage)
    .then(res => {
      const news = res.data;
      this.setState({ news });
    })
  }

    render() {
        return (
            <div>
                <div className='sort'>
                  <a className='sort' onClick={this.handleSort}>Сортировка по дате публикации</a>
                </div>

                <div className='sort'>
                  <a className='sort' onClick={this.handlePage}>NExt 10step</a>
                </div>

                <div className='sort'>
                  <a className='sort' onClick={this.handlePageDicr}>down 10step</a>
                </div>
                <Pagination />

                {this.state.news.map(news => (
                    <New news={news} key={news.id}/>
                ))}
            </div>
        );
    }
}

export default News;