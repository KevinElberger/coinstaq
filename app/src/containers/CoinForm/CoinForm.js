import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Dropdown, Button } from 'semantic-ui-react';
import './styles.css';

class CoinForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const options = this.props.coinList.map(coin => {
      return { key:coin.name, text: coin.fullName, value: coin.fullName };
    });

    return (
      <div className='coin-form'>
        <Dropdown 
          floating
          id='coin-input'
          options={options}
          placeholder='Search for a coin'
          search
          selection
        />
        <Button size='medium' className='add-coin-btn'>Add Coin</Button>
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