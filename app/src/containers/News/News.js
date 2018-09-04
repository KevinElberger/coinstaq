import React, { Component } from 'react';
import { Button, Loader } from 'semantic-ui-react';
import NewsList from '../../components/NewsList/index';
import { withRouter } from 'react-router-dom';
import { addNews, updateTick } from '../../actions/index';
import { shell } from 'electron';
import { connect } from 'react-redux';
import { getNews } from '../../utils/cryptoApi';
import './styles.css';

const prettyMs = require('pretty-ms');

class News extends Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
    this.handleRefresh = this.handleRefresh.bind(this);
  }
  
  handleLink(url) {
    shell.openExternal(url);
  }

  componentWillMount() {
    this.loadNews();
  }

  loadNews() {
    this.setState({ loaded: false });

    getNews()
      .then(news => {
        this.setState({ loaded: true });
        this.tick(new Date().getTime());
        this.props.dispatch(addNews(news));
      })
  }

  handleRefresh() {
    const oneMinute = 60000;

    if (this.props.updateTime < oneMinute) return;

    this.loadNews();
  }

  tick(updateTime) {
    const oneMinute = 60000;

    if (this.tickID) {
      clearInterval(this.tickID);
    }
    
    this.tickID = setInterval(() => {      
      this.props.dispatch(updateTick(oneMinute));
    }, oneMinute);
  }

  render() {
    const { loaded } = this.state;
    const { newsList } = this.props;
    const updateTime = prettyMs(this.props.updateTime, { verbose: true });

    return (
      <div>
        <div className='news-header'>
          <h3>Recent News</h3>
          <Button circular icon='refresh' size='mini' onClick={ this.handleRefresh }></Button>
          <span className='news-last-updated'>Last updated { updateTime } ago</span>
        </div>
        <div className='news-articles-wrapper'>
        { loaded ?
          <NewsList 
            newsList={newsList}
            handleLink={this.handleLink}
          />
          :
          <Loader active inline='centered' />
        }   
        </div>       
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loaded: state.news.loaded,
  newsList: state.news.newsList,
  updateTime: state.news.updateTime
});

export default withRouter(connect(
  mapStateToProps
)(News));