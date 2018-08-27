import React, { Component } from 'react';
import { render } from 'react-dom';
import './styles.css';

export default class Portfolio extends Component {
  render() {
    return (
      <div>
        <div className="wallet">
          <h5 className="title">Your Portfolio</h5>
          <h1 className="wallet-amount"><span className="symbol">$</span>9238.51</h1>
        </div>

      </div>
    )
  }
}