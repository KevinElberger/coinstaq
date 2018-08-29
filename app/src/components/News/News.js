import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import {shell} from 'electron';
import './styles.css';

export default class News extends Component {
  handleLink(url) {
    shell.openExternal(url);
  }

  render() {
    return (
      <div>
        <div className='news-header'>
          <h3>Recent News</h3>
          <Button circular icon='refresh' size='mini'></Button>
          <span className='news-last-updated'>Last updated 12 minutes ago</span>
        </div>
        <div className='news-articles'>
          <div className='article-wrapper'>
            <div className='article'>
              <img src='https://images.cryptocompare.com/news/default/blokt.png' />
              <p className='article-title'>New York Crypto Firm CabbageTech Found Guilty of Fraud, Faces Lifetime Ban</p>
            </div>
          </div>
          <div className='article-wrapper'>
            <div className='article'>
              <img src='https://images.cryptocompare.com/news/trustnodes/a664xak5gbg.jpeg' />
              <p className='article-title'>Continuing Uptrend Says This Week’s Technical Analysis</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}