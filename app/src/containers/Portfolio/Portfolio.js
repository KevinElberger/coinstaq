import React, { Component } from 'react';
import Wallet from '../../components/Wallet/index';
import { Icon, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './styles.css';

class Portfolio extends Component {
  render() {
    const hasCoins = false || this.props.portfolioCoins.length > 0;

    return (
      <div id="portfolio">
        { hasCoins ?
          <Wallet />
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