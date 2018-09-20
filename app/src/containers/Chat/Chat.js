import React, { Component } from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client/dist/socket.io';
import { withRouter } from 'react-router-dom';
import ChatBox from '../../components/ChatBox/index';
import { addMessages } from '../../actions/index';
import './styles.css';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // endpoint: 'http://ec2-18-221-55-185.us-east-2.compute.amazonaws.com:3000'
      endpoint: 'http://localhost:3000'
    };
  }

  componentDidMount() {
    const { endpoint } = this.state;
    const socket = io.connect(endpoint);

    socket.emit('add user', 'testAcc');
    
    socket.on('login', (data) => {
      console.log(data);
    });
    //this.props.dispatch(addMessages(messages));
  }

  render() {
    return (
      <div id='chat'>
        <ChatBox />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  messages: state.chat.messages,
  connected: state.chat.connected,
  typing: state.chat.typing
});

export default withRouter(connect(
  mapStateToProps
)(Chat));