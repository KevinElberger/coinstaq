import React, { Component } from 'react';
import CountUp from 'react-countup';
import { Icon, Button } from 'semantic-ui-react';
import './styles.css';

export default class Portfolio extends Component {
  render() {
    return (
      <div id="portfolio">
        <div className="wallet">
          <h5 className="title">Your Portfolio</h5>
          <h1 className="wallet-amount">
            <span className="symbol">$</span>
            <CountUp 
              end={9238.518}
              duration={2}
              decimals={3}
              decimal="."
            />
          </h1>
          <p className="wallet-diff">
            + $170.25 (22.1%)
            <Icon className="increase" name='long arrow alternate up' />
          </p>
        </div>
        <div className="add-wrapper">
          <Button id="add" size='mini' labelPosition='left'>
            <Icon name='bitcoin' />
            Add Coin
          </Button>
        </div>
      </div>
    )
  }
}