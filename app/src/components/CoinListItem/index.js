import React from 'react';
import { Input, Button } from 'semantic-ui-react';

const CoinListItem = (props) => {
  return (
    <div className='coin-list-item'>
      <img src={ props.image } />
      <p>
        { props.fullName } 
        <span>{ props.symbol }</span>
      </p>
      <Input 
        icon='paper plane'
        placeholder='Enter # of coins to add' 
      />
      <Button icon='plus' />
    </div>
  );
};

export default ChatBox;