import React from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';
import ButtonIcon from './ButtonIcon';

const BlogCard = props => {
  const { isoDate, title, guid, categories, loadHtmlParser } = props;
  return (
    <div className="App-BlogCard">
      <header className="header">
        <a href={guid} target="_blank" rel="noopener noreferrer">
          <ButtonIcon
            iconName="fas fa-link"
            className="to-blog-button"
            callback={() => {}}
          >
            Direct Link to Article on Medium
          </ButtonIcon>
        </a>
        <div className="date-display">
          <strong>Published on:</strong>
          &nbsp;
          <span className="date">{isoDate.split('T')[0]}</span>
        </div>
      </header>
      <button
        type="button"
        className="clickable-title"
        onClick={() => {
          // loadHtmlParser(props['content:encoded']);
          Router.push({
            pathname: `/Blog/${title.split(' ').join('-')}`,
            query: { guid: guid.split('https://')[1] }
          });
        }}
      >
        <h2>{title}</h2>
      </button>
      <footer>
        {categories.map(cat => (
          <span className="category" key={cat}>
            {cat}
          </span>
        ))}
      </footer>
    </div>
  );
};

BlogCard.propTypes = {
  isoDate: PropTypes.string,
  title: PropTypes.string,
  guid: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.string),
  // eslint-disable-next-line no-useless-computed-key
  ['content:encoded']: PropTypes.string
};

BlogCard.defaultProps = {
  isoDate: '',
  title: '',
  guid: '',
  categories: [],
  // eslint-disable-next-line no-useless-computed-key
  ['content:encoded']: ''
};

export default BlogCard;
