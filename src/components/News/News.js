import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

import './styles.css';
import NewsItem from './NewsItem/NewsItem';
import Spinner from '../Spinner/Spinner';

export class News extends Component {

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
  }

  static defaultProps = {
    country: "in",
    category: "general",
    pageSize: 12,
  }

  apiKey = process.env.REACT_APP_NEWS_API;

  articlesFetched = 0;

  constructor() {
    super();
    
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalArticles: 0
    }
  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  getNews = async () => {
    let endpoint = "https://newsapi.org/v2/top-headlines";
    let url = `${endpoint}?&country=${this.props.country}&category=${this.props.category}&apiKey=${this.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.props.setProgress(10);
    let data = await fetch(url);
    let parsedData = await data.json();
    this.props.setProgress(100);
    this.articlesFetched += this.props.pageSize;
    return parsedData;
  }

  async componentDidMount() {
    let parsedData = await this.getNews();
    this.setState({
      articles: parsedData.articles,
      loading: false,
      totalArticles: parsedData.totalResults
    });
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    let parsedData = await this.getNews();
    this.setState({ articles: this.state.articles.concat(parsedData.articles), loading: false });
  }

  render() {

    let newsCategory = this.capitalizeFirstLetter(this.props.category);

    return (
      <div className='news-section'>
        <div className="container">

          {/* The below syntax means that show the spinner while the data is loading */}
          {this.state.loading && <Spinner />}
          {!this.state.loading && <h1 className="section-heading">Top {newsCategory} Headlines</h1>}

          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.articlesFetched < this.state.totalArticles}
            loader={<Spinner />}
          >
            <div className="news-item-container">

              {this.state.articles.map((element) => {
                return <NewsItem
                  key={element.url ? element.url : "/"}
                  imgUrl={element.urlToImage ? element.urlToImage : "/logo.png"}
                  title={element.title ? element.title : "No title available."}
                  description={element.description ? element.description : "No description aviailable."}
                  newsUrl={element.url ? element.url : "/"}
                  author={element.author ? element.author : "Unknown"}
                  date={element.publishedAt ? new Date(element.publishedAt).toUTCString() : new Date().toUTCString()}
                  source={element.source.name ? element.source.name : "Unknown"}
                />
              })}

            </div>
          </InfiniteScroll>

        </div>
      </div>
    )
  }
}

export default News;
