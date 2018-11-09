import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import HtmlParser from '../components/HtmlParser';
import BlogCard from '../components/BlogCard';

const Blog = ({ appData }) => (
  <div className="App-Blog">
    <h1>
      My Blog on&nbsp;
      <a
        href="https://medium.com/@phongtlam"
        target="_blank"
        rel="noopener noreferrer"
      >
        Medium
      </a>
    </h1>
    {appData.items &&
      appData.items.map(item => (
        <BlogCard
          key={item.isoDate}
          {...item}
        />
      ))}
  </div>
);

Blog.propTypes = {
  appData: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.object)
  }),
};

Blog.defaultProps = {
  appData: {
    items: []
  },
};

export default Blog;
