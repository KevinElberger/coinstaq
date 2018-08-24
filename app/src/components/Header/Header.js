import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link, withRouter } from 'react-router-dom';
import { Menu, Segment } from 'semantic-ui-react';
import styles from './styles.css';

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
        <Menu pointing secondary id={styles.nav}>
          <Menu.Item
            onClick={this.handleOnClick}
            active={active === 'portfolio'}            
            className={active === 'portfolio' ? styles.selected : styles.link}                      
            name='portfolio'
          />
          <Menu.Item
            onClick={this.handleOnClick}
            active={active === 'dashboard'}
            className={active === 'dashboard' ? styles.selected : styles.link}            
            name='dashboard'
          />
          <Menu.Item
            onClick={this.handleOnClick}
            active={active === 'news'}            
            className={active === 'news' ? styles.selected : styles.link}                      
            name='news'
          />
        </Menu>
      </div>
    )
  }
}

export default withRouter(Header);
