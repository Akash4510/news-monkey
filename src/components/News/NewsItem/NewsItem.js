import React, { Component } from 'react';

import './styles.css';

export class NewsItem extends Component {

  render() {
    let { imgUrl, title, description, newsUrl, author, date, source } = this.props;

    return (
      <div className="news-item card">
        <img src={ imgUrl } alt="" className="card-img" />
        <p className="source">Source: <span>{source}</span></p>
        <h2 className="card-title">{ title }</h2>
        <p className="card-text">{description}</p>
        <p className="author">Published by <span>{author}</span> at <span>{date}</span></p>
        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-secondary card-btn">
          Read More<span><i className="fa-solid fa-arrow-right"></i></span>
        </a>
      </div>
    )
  }
}

export default NewsItem;
