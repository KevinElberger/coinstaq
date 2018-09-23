import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import CoinListItem from '../../components/CoinListItem/index';
import { Dropdown, Button, Card, Image, Input, Icon, Divider } from 'semantic-ui-react';
import './styles.css';

class CoinForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coin: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, target) {
    // Use lowercase to match crypto icon filename
    const value = target.value.toLowerCase();
    
    this.setState({
      coin: value
    });
  }

  render() {
    const { coin } = this.state;
    const filteredCoins = this.props.coinList.filter(coinObj => {
      return coinObj.fullName.toLowerCase().indexOf(coin.toLowerCase()) > -1;
    });
    const coinList = filteredCoins.map(coin => {
      return (<CoinListItem key={coin.fullName} props={coin} />);      
    });

    return (
      <div className='coin-form'>
        <div className='coin-form-header'>
          <h3>Add Coin to Portfolio</h3>
        </div>
        <div className='search-wrapper'>
          <Input
            id='search'
            size='small'
            type='text'
            iconPosition='left'
            onChange={ this.handleChange }
            placeholder='Search'
          >
            <Icon name='search' />
            <input />
          </Input>
        </div>
        <div className='search-results-header'>
          <p>Search Results</p>
          <Divider />
        </div>
        {
          (coin !== '' && coinList.length > 0)
          ? (<div className='search-results'> { coinList } </div>)
          : (<p className='no-results'>No coins found.</p>)
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  coinList: state.coinList
});

export default withRouter(connect(
  mapStateToProps
)(CoinForm));