import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { Dropdown, Button, Card, Image, Input, Icon, Divider } from 'semantic-ui-react';
import './styles.css';

class CoinForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coin: null,
      goBack: false,
      coinSelected: false
    };
    this.handleGoBack = this.handleGoBack.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleGoBack() {
    this.setState({ goBack: true });
  }

  handleChange(event, target) {
    // Use lowercase to match crypto icon filename
    const value = target.value.toLowerCase();
    
    this.setState({
      coin: value,
      coinSelected: true
    });
  }

  render() {
    if (this.state.goBack) {
      return <Redirect to="/portfolio" />
    }
    const { coin, coinSelected } = this.state;
    const options = this.props.coinList.map(coin => {
      return { key:coin.name, text: coin.fullName, value: coin.symbol };
    });
    const defaultVal = options.find(coin => coin.name === 'Bitcoin');
    const imageUrl = '../node_modules/cryptocurrency-icons/32/black/' + coin + '.png';

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
        <div className='search-results'>
          <p className='search-results-header'>Search Results</p>
          <Divider />
        </div>
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