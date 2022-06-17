import React, { Component } from 'react';

import './styles.css';

export class Hero extends Component {
  render() {
    return (
      <div className='hero' id='hero'>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-heading">Welcome to NewsMonkey</h1>
            <p className="hero-text">
              News Monkey is a place where you can find all the news according to your interest easily. No need to roam around different news site to read what you are interested in all in one place. Click the explore button and start exploring now.
            </p>
            <button className="btn btn-secondary"><a href="/">Explore Now</a></button>
          </div>
        </div>
      </div>
    )
  }
}

export default Hero;
