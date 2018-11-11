import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const ButtonIcon = ({
  className,
  callback,
  iconName,
  iconSize = 'lg',
  buttonType = 'normal',
  children,
  ...moreprops
}) => (
  <button
    className={classnames('App-ButtonIcon', buttonType, className)}
    type="button"
    onClick={() => callback()}
    {...moreprops}
  >
    <i className={classnames('icon', iconName, `fa-${iconSize}`)} />
    {children ? <span className="text">{children}</span> : null}
  </button>
);

ButtonIcon.propTypes = {
  callback: PropTypes.func.isRequired,
  className: PropTypes.string,
  iconName: PropTypes.string.isRequired,
  iconSize: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  buttonType: PropTypes.oneOf([
    'normal',
    'primary',
    'danger',
    'borderless',
    'borderless-danger'
  ]),
  moreprops: PropTypes.shape({})
};

ButtonIcon.defaultProps = {
  className: '',
  iconSize: 'lg',
  buttonType: 'normal',
  children: null,
  moreprops: {}
};

export default ButtonIcon;
