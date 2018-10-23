import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import '../styles/Home.scss';
import ButtonIcon from '../components/ButtonIcon';
import HtmlParser from '../components/HtmlParser';
import PortfolioCard from '../components/PortfolioCard';
import { fileDataShape } from '../utils/propTypesShapes';
import ParticlesWrapper from '../components/Particles';

const Home = props => {
  const { appData, className, loadMarkdownFormData, loadModalData } = props;
  return (
    <div className={classnames('App-Home', className)}>
      <ParticlesWrapper />
      <div className="App-Home-header">
        <ButtonIcon
          className={classnames('header-btn')}
          buttonType="primary"
          iconName="fas fa-plus"
          callback={() => {
            loadMarkdownFormData({ isOpen: true, type: 'portfolio' });
          }}
        >
          Create
        </ButtonIcon>
      </div>
      <div className="App-Home-content">
        {appData.map(datum => (
          <PortfolioCard
            key={datum._id}
            cardData={datum}
            loadMarkdownFormData={loadMarkdownFormData}
            loadModalData={loadModalData}
          />
        ))}
      </div>
    </div>
  );
};

Home.propTypes = {
  appData: PropTypes.arrayOf(PropTypes.shape(fileDataShape)),
  setHtml: PropTypes.func,
  loadMarkdownFormData: PropTypes.func,
  className: PropTypes.string,
  loadModalData: PropTypes.func
};

Home.defaultProps = {
  appData: [],
  setHtml: PropTypes.func,
  className: null,
  loadModalData: () => {},
  loadMarkdownFormData: () => {}
};

export default Home;
