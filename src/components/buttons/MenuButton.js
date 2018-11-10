import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const MenuButton = props => (
  <div
    className={classnames('App-MenuButton', props.className, {
      active: props.isActive
    })}
    onKeyDown={() => props.onClick()}
    role="button"
    tabIndex={0}
    onClick={() => props.onClick()}
  >
    <div className="top bar" />
    <div className="middle bar" />
    <div className="bottom bar" />
  </div>
);

MenuButton.propTypes = {
  className: PropTypes.string,
  isActive: PropTypes.bool,
  onClick: PropTypes.func
};

MenuButton.defaultProps = {
  className: '',
  isActive: false,
  onClick: () => {}
};

export default MenuButton;
