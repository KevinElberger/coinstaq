import React, { Component } from 'react';
import { Button, Loader } from 'semantic-ui-react';
import { shell } from 'electron';
import { getNews } from '../../utils/cryptoApi';
import './styles.css';

const prettyMs = require('pretty-ms');

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loaded: false,
      updateTime: new Date().getTime() - new Date().getTime()
    };
    this.handleLink = this.handleLink.bind(this);
  }

  handleLink(url) {
    shell.openExternal(url);
  }

  componentDidMount() {
    const updateTime = new Date().getTime();

    getNews()
      .then(results => {
        this.setState({
          loaded: true,
          articles: results,
          updateTime: new Date().getTime() - updateTime
        })
      });
  }

  render() {
    const { loaded } = this.state;
    const updateTime = prettyMs(this.state.updateTime, { verbose: true });
    const articles = this.state.articles.map((item, i) => (
      <div key={item.id} className='article-wrapper' onClick={ () => { this.handleLink(item.url) }}>
        <div className='article'>
          <img src={item.imageurl} />
          <p className='article-title'>{item.title}</p>
        </div>
      </div>
    ));

    return (
      <div>
        <div className='news-header'>
          <h3>Recent News</h3>
          <Button circular icon='refresh' size='mini'></Button>
          <span className='news-last-updated'>Last updated { updateTime } ago</span>
        </div>
        <div className='news-articles-wrapper'>
          { loaded ? 
            (
            <div className='news-articles'>
              { articles }
            </div>
            )
            :
            <Loader active inline='centered' /> 
          }
        </div>
      </div>
    )
  }
}