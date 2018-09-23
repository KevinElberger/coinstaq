import React from 'react';
import { Input, Button } from 'semantic-ui-react';

const CoinListItem = (CoinItem) => {
  const { props } = CoinItem;

  return (
    <div className='coin-list-item'>
      <img src={ props.image } />
      <p>
        { props.symbol }
      </p>
      <Input
        size='small'
        type='number' 
        className='coin-list-amount' 
        placeholder='# of coins' 
      />
      <Button icon='plus' />
    </div>
  );
};

export default CoinListItem;