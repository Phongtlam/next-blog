import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import ButtonIcon from '../components/ButtonIcon';
import PortfolioCard from '../components/PortfolioCard';
import { fileDataShape } from '../utils/propTypesShapes';

const Portfolio = props => {
  const {
    appData,
    className,
    loadMarkdownFormData,
    loadModalData,
    loadHtmlParser,
    isCreateBtnHidden = false,
    isBackBtnHidden = false
  } = props;
  return (
    <div className={classnames('App-Portfolio', className)}>
      <div className="App-Portfolio-header">
        <ButtonIcon
          className={classnames({
            hidden: isCreateBtnHidden
          })}
          buttonType="primary"
          iconName="fas fa-plus"
          callback={() => {
            loadMarkdownFormData({
              isOpen: true,
              type: 'portfolio',
              order: appData.length + 1,
              _id: '-1'
            });
          }}
        >
          Create
        </ButtonIcon>
        <ButtonIcon
          className={classnames({
            hidden: isBackBtnHidden
          })}
          buttonType="primary"
          callback={() => {
            loadHtmlParser('');
          }}
          iconName="fas fa-chevron-left"
        >
          Back
        </ButtonIcon>
      </div>
      <div
        className={classnames('App-Portfolio-content', {
          hidden: !isBackBtnHidden
        })}
      >
        {appData.map(datum => (
          <PortfolioCard
            key={datum._id}
            cardData={datum}
            loadMarkdownFormData={loadMarkdownFormData}
            loadModalData={loadModalData}
            loadHtmlParser={loadHtmlParser}
          />
        ))}
      </div>
    </div>
  );
};

Portfolio.propTypes = {
  appData: PropTypes.arrayOf(PropTypes.shape(fileDataShape)),
  loadHtmlParser: PropTypes.func,
  loadMarkdownFormData: PropTypes.func,
  className: PropTypes.string,
  loadModalData: PropTypes.func,
  isCreateBtnHidden: PropTypes.bool,
  isBackBtnHidden: PropTypes.bool
};

Portfolio.defaultProps = {
  appData: [],
  loadHtmlParser: () => {},
  className: null,
  loadModalData: () => {},
  loadMarkdownFormData: () => {},
  isCreateBtnHidden: false,
  isBackBtnHidden: false
};

export default Portfolio;
