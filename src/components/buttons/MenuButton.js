import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const MenuButton = props => (
  <div
    className={classnames('App-MenuButton', props.className, {
      active: props.isMenuButtonActive
    })}
    onKeyDown={props.onMenuButtonClick}
    role="button"
    tabIndex={0}
    onClick={props.onMenuButtonClick}
  >
    <div className="top bar" />
    <div className="middle bar" />
    <div className="bottom bar" />
  </div>
);

MenuButton.propTypes = {
  className: PropTypes.string,
  isMenuButtonActive: PropTypes.bool,
  onMenuButtonClick: PropTypes.func
};

MenuButton.defaultProps = {
  className: '',
  isMenuButtonActive: false,
  onMenuButtonClick: () => {}
};

export default MenuButton;
