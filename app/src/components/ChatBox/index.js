import React from 'react';
import { Input } from 'semantic-ui-react';

const ChatBox = (props) => {
  return (
    <div id='chat-box'>
      <div className='chat-window'>

      </div>
      <div>
        <Input 
          id='message' 
          icon='paper plane'
          placeholder='Type a message' 
        />
      </div>
    </div>
  );
};

export default ChatBox;