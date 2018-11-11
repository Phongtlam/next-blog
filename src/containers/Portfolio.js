import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import ButtonIcon from '../components/buttons/ButtonIcon';
import PortfolioCard from '../components/PortfolioCard';
import { fileDataShape } from '../utils/propTypesShapes';
import { PORTFOLIO_TYPE } from '../enums/api-routes';

const Portfolio = props => {
  const {
    appData,
    className,
    loadMarkdownFormData,
    loadModalData,
    isCreateBtnHidden = false,
    isBackBtnHidden = false,
    Token
  } = props;
  return (
    <div className={classnames('App-Portfolio', className)}>
      <div className="App-Portfolio-header">
        {Token && (
          <ButtonIcon
            className={classnames({
              hidden: isCreateBtnHidden
            })}
            buttonType="primary"
            iconName="fas fa-plus"
            callback={() => {
              loadMarkdownFormData({
                isOpen: true,
                type: PORTFOLIO_TYPE,
                order: appData.length + 1,
                _id: '-1'
              });
            }}
          >
            Create
          </ButtonIcon>
        )}
      </div>
      <div
        className={classnames('App-Portfolio-content', {
          hidden: !isBackBtnHidden
        })}
      >
        {appData.map((datum, index) => (
          <PortfolioCard
            key={datum._id}
            cardData={datum}
            loadMarkdownFormData={loadMarkdownFormData}
            loadModalData={loadModalData}
            Token={Token}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

Portfolio.propTypes = {
  appData: PropTypes.arrayOf(PropTypes.shape(fileDataShape)),
  loadMarkdownFormData: PropTypes.func,
  className: PropTypes.string,
  loadModalData: PropTypes.func,
  isCreateBtnHidden: PropTypes.bool,
  isBackBtnHidden: PropTypes.bool,
  Token: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

Portfolio.defaultProps = {
  appData: [],
  className: null,
  loadModalData: () => {},
  loadMarkdownFormData: () => {},
  isCreateBtnHidden: false,
  isBackBtnHidden: false,
  Token: null
};

export default Portfolio;
