import React, { Component } from 'react';

import './styles.css';
import loading from '../../images/loading.gif';

export class Spinner extends Component {
  render() {
    return (
      <div className="spinner">
        <img src={ loading } alt="loading" />
      </div>
    )
  }
}

export default Spinner;
