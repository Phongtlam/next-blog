import React from 'react';
import PropTypes from 'prop-types';
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
      appData.items.map((item, index) => (
        <BlogCard key={item.isoDate} index={index} {...item} />
      ))}
  </div>
);

Blog.propTypes = {
  appData: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.object)
  })
};

Blog.defaultProps = {
  appData: {
    items: []
  }
};

export default Blog;
