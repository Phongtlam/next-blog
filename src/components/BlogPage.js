import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import HtmlParser from './HtmlParser';
import ButtonIcon from './buttons/ButtonIcon';

const BlogPage = props => {
  let displayContent;

  if (props['_data-type'] === 'blog') {
    displayContent = props.appData && props.appData.items ? (
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
    ) : null;
  } else {
    displayContent = props.appData && props.appData[props.router.query.index] ? (
      <HtmlParser
        htmlParserData={
          props.appData[props.router.query.index].markdownTexts
        }
      />
    ) : null;
  }

  return (
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
      {displayContent}
    </div>
  );
};

BlogPage.propTypes = {
  appData: PropTypes.oneOfType([PropTypes.shape({
    items: PropTypes.array
  }), PropTypes.array]),
  router: PropTypes.shape({
    query: PropTypes.shape({
      index: PropTypes.string
    }),
    back: PropTypes.func
  }),
  '_data-type': PropTypes.oneOf(['blog', 'portfolio'])
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
  },
  '_data-type': 'portfolio'
};

export default withRouter(BlogPage);
