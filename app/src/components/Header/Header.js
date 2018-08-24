import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link, withRouter } from 'react-router-dom';
import { Menu, Segment } from 'semantic-ui-react';
// import styles from './styles.css';
import './styles.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { active: 'dashboard' };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(e, {name}) {
    this.setState({ active: name });
    this.props.history.push(name);
  }

  render() {
    const { active } = this.state;

    return (
      <div>
        <Menu pointing secondary id='nav'>
          <Menu.Item
            onClick={this.handleOnClick}
            active={active === 'portfolio'}            
            className={active === 'portfolio' ? 'selected' : 'link' }                      
            name='portfolio'
          />
          <Menu.Item
            onClick={this.handleOnClick}
            active={active === 'dashboard'}
            className={active === 'dashboard' ? 'selected' : 'link' }            
            name='dashboard'
          />
          <Menu.Item
            onClick={this.handleOnClick}
            active={active === 'news'}            
            className={active === 'news' ? 'selected' : 'link' }                      
            name='news'
          />
          <a className='link item last'></a>
        </Menu>
      </div>
    )
  }
}

export default withRouter(Header);
