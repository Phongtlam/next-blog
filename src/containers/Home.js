import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import '../styles/Home.scss';
import ButtonIcon from '../components/ButtonIcon';
import PortfolioCard from '../components/PortfolioCard';
import { fileDataShape } from '../utils/propTypesShapes';
import ParticlesWrapper from '../components/Particles';

const Home = props => {
  const {
    appData,
    className,
    loadMarkdownFormData,
    loadModalData,
    loadHtmlParser,
    isCreateBtnHidden,
    isBackBtnHidden
  } = props;
  return (
    <div className={classnames('App-Home', className)}>
      <ParticlesWrapper />
      <div className="App-Home-header">
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
        className={classnames('App-Home-content', {
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

Home.propTypes = {
  appData: PropTypes.arrayOf(PropTypes.shape(fileDataShape)),
  setAppData: PropTypes.func,
  loadHtmlParser: PropTypes.func,
  loadMarkdownFormData: PropTypes.func,
  className: PropTypes.string,
  loadModalData: PropTypes.func,
  isCreateBtnHidden: PropTypes.bool,
  isBackBtnHidden: PropTypes.bool
};

Home.defaultProps = {
  appData: [],
  setAppData: PropTypes.func,
  loadHtmlParser: () => {},
  className: null,
  loadModalData: () => {},
  loadMarkdownFormData: () => {},
  isCreateBtnHidden: false,
  isBackBtnHidden: false
};

export default Home;
