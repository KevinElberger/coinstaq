import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Dropdown, Button, Input } from 'semantic-ui-react';
import './styles.css';

class CoinForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coin: null,
      coinSelected: false
    };
    this.handleDropdown = this.handleDropdown.bind(this);
  }

  handleDropdown(event, target) {
    // Use lowercase to match crypto icon filename
    const value = target.value.toLowerCase() + '.png';
    
    this.setState({
      coin: value,
      coinSelected: true
    });
  }

  render() {
    const { coin, coinSelected } = this.state;
    const options = this.props.coinList.map(coin => {
      return { key:coin.name, text: coin.fullName, value: coin.symbol };
    });
    const imageUrl = '../node_modules/cryptocurrency-icons/32/color/';

    return (
      <div className='coin-form'>
        <Dropdown 
          floating
          search
          selection
          id='coin-input'
          options={ options }
          onChange={ this.handleDropdown }
          placeholder='Search for a coin'
        />
        <div>
          <Button size='medium' className='add-coin-btn'>Add Coin</Button>
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