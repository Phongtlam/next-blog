import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withRouter } from 'next/router';
import HtmlParser from './HtmlParser';
import ButtonIcon from './buttons/ButtonIcon';
import { BLOG, PORTFOLIO } from '../enums/page-types';

const BlogPage = props => {
  let displayContent;

  if (props['_data-type'] === BLOG) {
    displayContent =
      props.appData && props.appData.items ? (
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
    displayContent =
      props.appData && props.appData[props.router.query.index] ? (
        <HtmlParser
          htmlParserData={props.appData[props.router.query.index].markdownTexts}
        />
      ) : null;
  }

  return (
    <div className="App-BlogPage">
      <ButtonIcon
        className={classnames('back-button', {
          hidden: props.isSideMenuOpen
        })}
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
  appData: PropTypes.oneOfType([
    PropTypes.shape({
      items: PropTypes.array
    }),
    PropTypes.array
  ]),
  router: PropTypes.shape({
    query: PropTypes.shape({
      index: PropTypes.string
    }),
    back: PropTypes.func
  }),
  isSideMenuOpen: PropTypes.bool,
  '_data-type': PropTypes.oneOf([BLOG, PORTFOLIO])
};

BlogPage.defaultProps = {
  appData: {
    items: []
  },
  isSideMenuOpen: false,
  router: {
    query: {
      index: null
    },
    back: () => {}
  },
  '_data-type': PORTFOLIO
};

export default withRouter(BlogPage);
