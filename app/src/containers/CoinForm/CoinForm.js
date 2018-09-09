import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { Dropdown, Button, Card, Image, Input } from 'semantic-ui-react';
import './styles.css';

class CoinForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coin: 'btc',
      goBack: false,
      coinSelected: false
    };
    this.handleGoBack = this.handleGoBack.bind(this);
    this.handleDropdown = this.handleDropdown.bind(this);
  }

  handleGoBack() {
    this.setState({ goBack: true });
  }

  handleDropdown(event, target) {
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
        <Card id='coin-card'>
          <Card.Content>
            <Image id='coin-image' size='mini' src={imageUrl} />
            <Dropdown 
              search
              floating
              selection
              compact
              id='coin-input'
              options={ options }
              onChange={ this.handleDropdown }
              placeholder='Search for a coin'
            />
          </Card.Content>
          <Card.Content extra id='card-amount-wrapper'>
            <Input 
              id='amount'
              size='small' 
              type='number' 
              label={{ basic: true, content: 'BTC' }}
              labelPosition='right'
            />
          </Card.Content>
        </Card>
        <div className='buttons-row'>
          <Button id='cancel-btn' onClick={ this.handleGoBack }>
            Go Back
          </Button>
          <Button className='add-coin-btn'>
            Add Coin
          </Button>
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