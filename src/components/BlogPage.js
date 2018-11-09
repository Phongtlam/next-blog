import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import HtmlParser from './HtmlParser';
import ButtonIcon from './ButtonIcon';

const BlogPage = props => (
  <div className="App-BlogPage">
    <ButtonIcon
      className="back-button"
      buttonType="primary"
      callback={() => {
        props.router.back();
      }}
      iconName="fas fa-chevron-left"
    >
      Back
    </ButtonIcon>
    {props.appData && props.appData.items ? (
      <div className="blog-content">
        <h2 className="blog-title">
          {props.appData.items[props.router.query.index].title}
        </h2>
        <HtmlParser
          htmlParserData={
            props.appData.items[props.router.query.index]['content:encoded']
          }
        />
      </div>
    ) : null}
  </div>
);

BlogPage.propTypes = {
  appData: PropTypes.shape({
    items: PropTypes.array
  }),
  router: PropTypes.shape({
    query: PropTypes.shape({
      index: PropTypes.number
    }),
    back: PropTypes.func
  })
};

BlogPage.defaultProps = {
  appData: {
    items: []
  },
  router: {
    query: {
      index: null
    },
    back: () => {}
  }
};

export default withRouter(BlogPage);
