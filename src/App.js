import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';

export class App extends Component {
  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color='#e2752c'
            progress={this.state.progress}
            onLoaderFinished={() => this.setProgress(0)}
          />
          <Hero />

          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress}  key="general" category="general" />} />
            <Route exact path="/business" element={<News setProgress={this.setProgress}  key="business" category="business" />} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress}  key="entertainment" category="entertainment" />} />
            <Route exact path="/general" element={<News setProgress={this.setProgress}  key="general" category="general" />} />
            <Route exact path="/health" element={<News setProgress={this.setProgress}  key="health" category="health" />} />
            <Route exact path="/science" element={<News setProgress={this.setProgress}  key="science" category="science" />} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress}  key="sports" category="sports" />} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress}  key="technology" category="technology" />} />
          </Routes>

        </Router>
      </div>
    )
  }
}

export default App;
