import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ButtonIcon from '../buttons/ButtonIcon';

class Carousel extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      carouselDisplayItemCurrentIndex: 0,
      carouselDisplayItemLastIndex: -1,
      carouselForward: true
    };

    this._onCarouselNavigate = this._onCarouselNavigate.bind(this);
  }

  _onCarouselNavigate(forward = true, index) {
    const { carouselDisplayItemCurrentIndex } = this.state;
    const { items } = this.props;

    let nextIndex;

    if (index !== undefined) {
      nextIndex = index;
    } else if (forward) {
      nextIndex =
        items.length - 1 === carouselDisplayItemCurrentIndex
          ? 0
          : carouselDisplayItemCurrentIndex + 1;
    } else {
      nextIndex =
        carouselDisplayItemCurrentIndex === 0
          ? items.length - 1
          : carouselDisplayItemCurrentIndex - 1;
    }


    this.setState(prevState => ({
      carouselDisplayItemCurrentIndex: nextIndex,
      carouselDisplayItemLastIndex: prevState.carouselDisplayItemCurrentIndex,
      carouselForward: forward
    }));
  }

  render() {
    const {
      carouselDisplayItemCurrentIndex,
      carouselDisplayItemLastIndex,
      carouselForward
    } = this.state;

    const {
      className,
      items,
      leftButton: {
        onClick: onLeftClick = () => {},
        buttonType: leftButtonType,
        iconSize: leftIconSize,
        iconName: leftIconName
      },
      rightButton: {
        onClick: onRightClick = () => {},
        buttonType: rightButtonType,
        iconSize: rightIconSize,
        iconName: rightIconName
      }
    } = this.props;

    return (
      <div
        className={classnames(
          'App-Carousel-container flex-container',
          className
        )}
      >
        <div className="App-Carousel flex-container">
          <ButtonIcon
            iconName={leftIconName}
            buttonType={leftButtonType}
            iconSize={leftIconSize}
            callback={() => {
              onLeftClick();
              this._onCarouselNavigate(false);
            }}
          />
          <ul className="App-Carousel-list flex-container">
            {items.map((item, index) => (
              <li
                className={classnames('App-Carousel-list-item', {
                  current: carouselDisplayItemCurrentIndex === index,
                  last: carouselDisplayItemLastIndex === index,
                  reverse: !carouselForward
                })}
              >
                {item}
              </li>
            ))}
          </ul>
          <ButtonIcon
            iconName={rightIconName}
            buttonType={rightButtonType}
            iconSize={rightIconSize}
            callback={() => {
              onRightClick();
              this._onCarouselNavigate();
            }}
          />
        </div>
        <ul className="App-Carousel-pagination flex-container">
          {items.map((_, index) => (
            <li className="App-Carousel-pagination-item">
              <button
                type="button"
                onClick={() => {
                  if (carouselDisplayItemCurrentIndex !== index) {
                    this._onCarouselNavigate(index > carouselDisplayItemCurrentIndex, index);
                  }
                }}
              >
                <i
                  className={classnames({
                    'fas fa-circle': carouselDisplayItemCurrentIndex === index,
                    'far fa-circle': carouselDisplayItemCurrentIndex !== index
                  })}
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Carousel.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.element).isRequired,
  leftButton: PropTypes.shape({
    onClick: PropTypes.func,
    buttonType: PropTypes.string,
    iconSize: PropTypes.string,
    iconName: PropTypes.string
  }),
  rightButton: PropTypes.shape({
    onClick: PropTypes.func,
    buttonType: PropTypes.string,
    iconSize: PropTypes.string,
    iconName: PropTypes.string
  })
};

Carousel.defaultProps = {
  className: null,
  leftButton: {
    onClick: () => {},
    buttonType: 'borderless',
    iconSize: '3x',
    iconName: 'far fa-caret-square-left'
  },
  rightButton: {
    onClick: () => {},
    buttonType: 'borderless',
    iconSize: '3x',
    iconName: 'far fa-caret-square-right'
  }
};

export default Carousel;
