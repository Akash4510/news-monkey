import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import logo from '../../images/logo.png';

export class Navbar extends Component {

  componentDidMount() {
    let header = document.querySelector(".nav-bar");
    window.addEventListener("scroll", () => {
      header.classList.toggle("shadow", window.scrollY > 0);
    });
  }
  
  render() {
    return (
      <nav className="nav-bar">
        <div className="container">
          <div className="logo">
            <Link to="/"><img className="img" src={logo} alt="logo" /></Link>
            <Link to="/" className="text">N<span>M</span></Link>
          </div>

          <div className="menu">
            <ul>
              <li><Link className="nav-link" to="/">Home</Link></li>
              <li><Link className="nav-link" to="/business">Business</Link></li>
              <li><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
              <li><Link className="nav-link" to="/general">General</Link></li>
              <li><Link className="nav-link" to="/health">Health</Link></li>
              <li><Link className="nav-link" to="/science">Science</Link></li>
              <li><Link className="nav-link" to="/sports">Sports</Link></li>
              <li><Link className="nav-link" to="/technology">Technology</Link></li>
              <li><Link className="nav-link" to="/about">About</Link></li>
            </ul>
            <button className="btn btn-primary login-btn">
              <a href="/">Login</a>
            </button>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar;
