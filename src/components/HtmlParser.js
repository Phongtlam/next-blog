import React from 'react';
import PropTypes from 'prop-types';
import showdown from 'showdown';
import classnames from 'classnames';

const converter = new showdown.Converter();

const HtmlParser = ({ className, htmlParserData }) => (
  <div
    className={classnames('App-HtmlParser', className)}
    // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML={{
      __html: converter.makeHtml(htmlParserData)
    }}
  />
);

HtmlParser.propTypes = {
  className: PropTypes.string,
  htmlParserData: PropTypes.string
};

HtmlParser.defaultProps = {
  htmlParserData: '',
  className: null
};

export default HtmlParser;
