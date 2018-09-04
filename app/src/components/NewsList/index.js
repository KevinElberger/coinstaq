import React from 'react';
import PropTypes from 'prop-types';
import { Button, Loader } from 'semantic-ui-react';

const prettyMs = require('pretty-ms');

const NewsList = ({ newsList, handleLink }) => {
  const articles = newsList.map((item, i) => (
    <div key={item.id} className='article-wrapper' onClick={ () => { handleLink(item.url) }}>
      <div className='article'>
        <img src={item.imageurl} />
        <p className='article-title'>{item.title}</p>
        <span className='published'>
          { prettyMs(new Date().getTime() - item.published_on * 1000, { compact: true }) }
        </span>
      </div>
    </div>
  ));

  return (
    <div className='news-articles'>
      { articles }
    </div>
  );
};

NewsList.propTypes = {
  newsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,      
      imageurl: PropTypes.string.isRequired,
      published_on: PropTypes.number.isRequired
    }).isRequired
  ).isRequired,
  handleLink: PropTypes.func.isRequired
};

export default NewsList;