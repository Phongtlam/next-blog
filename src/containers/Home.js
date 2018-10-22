import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import '../styles/Home.scss';
import MarkDownForm from '../components/MarkDownForm';
import ButtonIcon from '../components/ButtonIcon';
import HtmlParser from '../components/HtmlParser';
import PortfolioCard from '../components/PortfolioCard';
import { fileDataShape } from '../utils/propTypesShapes';
import ParticlesWrapper from '../components/Particles';

class Home extends React.Component {
  static propTypes = {
    appData: PropTypes.arrayOf(PropTypes.shape(fileDataShape)),
    setHtml: PropTypes.func,
    className: PropTypes.string,
    loadModalData: PropTypes.func
  };

  static defaultProps = {
    appData: [],
    setHtml: PropTypes.func,
    className: null,
    loadModalData: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      isOpenMarkDownEdit: false
    };

    this._onOpenMarkDownEdit = this._onOpenMarkDownEdit.bind(this);
  }

  _onOpenMarkDownEdit(isOpen) {
    this.setState({ isOpenMarkDownEdit: isOpen });
  }

  render() {
    const { appData, className } = this.props;
    return (
      <div className={classnames('App-Home', className)}>
        <ParticlesWrapper />
        {/* <ButtonIcon
          className={classnames('header-btn')}
          buttonType="primary"
          iconName="fas fa-plus"
        >
          Create
        </ButtonIcon> */}
        {appData.map(datum => (
          <PortfolioCard
            key={datum._id}
            cardData={datum}
            onOpenMarkDownEdit={this._onOpenMarkDownEdit}
            loadModalData={this.props.loadModalData}
          />
        ))}
      </div>
    );
  }
}

export default Home;
