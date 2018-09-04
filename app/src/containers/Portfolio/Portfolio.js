import React, { Component } from 'react';
import CountUp from 'react-countup';
import { Icon, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './styles.css';

class Portfolio extends Component {
  render() {
    const hasCoins = this.props.portfolioCoins.length > 0;

    return (
      <div id="portfolio">
        { hasCoins ?
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
          :
          <div className="no-coins">
            <img src="../app/assets/wallet.png" />
            <h1>No Coins</h1>
            <p>Add coins to start tracking your portfolio!</p>
          </div>
        }
          <div className={ hasCoins ? 'add-wrapper' : 'add-wrapper-empty'}>
            <Button id="add" size='mini' labelPosition='left'>
              <Icon name='bitcoin' />
              Add Coin
            </Button>
          </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  portfolioCoins: state.portfolio.portfolioCoins
});

export default withRouter(connect(
  mapStateToProps
)(Portfolio));