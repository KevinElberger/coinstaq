import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <ul>
              <li><Link to="/">Dashboard</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/news">News</Link></li>
            </ul>
          </nav>
        </header>
      </div>
    )
  }
}