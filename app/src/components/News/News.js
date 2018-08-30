import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { shell } from 'electron';
import { getNews } from '../../utils/cryptoApi';
import './styles.css';

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
    this.handleLink = this.handleLink.bind(this);
  }

  handleLink(url) {
    shell.openExternal(url);
  }

  componentDidMount() {
    getNews()
      .then(results => this.setState({ articles: results }));
  }

  render() {
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
          <span className='news-last-updated'>Last updated 12 minutes ago</span>
        </div>
        <div className='news-articles-wrapper'>
          <div className='news-articles'>
            { articles }
          </div>
        </div>
      </div>
    )
  }
}