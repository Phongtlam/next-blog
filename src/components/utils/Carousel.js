import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { canUseDOM } from 'exenv';
import ButtonIcon from '../buttons/ButtonIcon';
import { EXTRA_SMALL } from '../../enums/client-dimensions';

class Carousel extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      carouselDisplayItemCurrentIndex: 0,
      carouselDisplayItemLastIndex: -1,
      carouselForward: true,
      touchstartLoc: null,
      touchendLoc: null
    };

    this.CarouselRef = React.createRef();
    this._onCarouselNavigate = this._onCarouselNavigate.bind(this);
    this._onTouchstart = this._onTouchstart.bind(this);
    this._onTouchend = this._onTouchend.bind(this);
  }

  componentDidMount() {
    if (canUseDOM) {
      this.CarouselRef.current.addEventListener(
        'touchstart',
        this._onTouchstart
      );
      this.CarouselRef.current.addEventListener('touchend', this._onTouchend);
    }
  }

  componentWillUnmount() {
    this.CarouselRef.current.removeEventListener(
      'touchstart',
      this._onTouchstart
    );
    this.CarouselRef.current.removeEventListener('touchend', this._onTouchend);
  }

  _onTouchstart(event) {
    if (event.touches.length === 1) {
      // just one finger touched
      this.setState({
        touchstartLoc: event.touches.item(0).clientX
      });
    } else {
      // a second finger hit the screen, abort the touch
      this.setState({
        touchstartLoc: null
      });
    }
  }

  _onTouchend(event) {
    const {
      touchstartLoc,
      touchendLoc,
      carouselDisplayItemCurrentIndex
    } = this.state;
    const { items } = this.props;
    const offset = 100; // at least 100px are a swipe

    if (touchstartLoc) {
      // the only finger that hit the screen left it
      this.setState({
        touchendLoc: event.changedTouches.item(0).clientX
      });

      let nextIndex;
      if (touchendLoc > touchstartLoc + offset) {
        // a left -> right swipe
        nextIndex = carouselDisplayItemCurrentIndex + 1;
        if (nextIndex >= items.length) {
          nextIndex = 0;
        }
        this._onCarouselNavigate(true, nextIndex);
      }
      if (touchendLoc < touchstartLoc - offset) {
        // a right -> left swipe
        nextIndex = carouselDisplayItemCurrentIndex - 1;
        if (nextIndex < 0) {
          nextIndex = items.length - 1;
        }
        this._onCarouselNavigate(false, nextIndex);
      }
    }
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
      getCurrentBreakpoint,
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
          className,
          {
            isMobile: getCurrentBreakpoint() === EXTRA_SMALL
          }
        )}
      >
        <div className="App-Carousel flex-container">
          <ButtonIcon
            className="hide-content-max-l"
            iconName={leftIconName}
            buttonType={leftButtonType}
            iconSize={leftIconSize}
            callback={() => {
              onLeftClick();
              this._onCarouselNavigate(false);
            }}
          />
          <ul ref={this.CarouselRef} className="App-Carousel-list flex-container">
            {items.map((item, index) => (
              <li
                key={index} // eslint-disable-line react/no-array-index-key
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
            className="hide-content-max-l"
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
          <ButtonIcon
            className="black-button"
            iconName="fas fa-caret-left"
            buttonType={leftButtonType}
            callback={() => {
              onLeftClick();
              this._onCarouselNavigate(false);
            }}
          />
          {items.map((_, index) => (
            <li
              key={index} // eslint-disable-line react/no-array-index-key
              className="App-Carousel-pagination-item"
            >
              <button
                className={classnames({
                  'fas fa-circle': carouselDisplayItemCurrentIndex === index,
                  'far fa-circle': carouselDisplayItemCurrentIndex !== index
                })}
                type="button"
                onClick={() => {
                  if (carouselDisplayItemCurrentIndex !== index) {
                    this._onCarouselNavigate(
                      index > carouselDisplayItemCurrentIndex,
                      index
                    );
                  }
                }}
              />
            </li>
          ))}
          <ButtonIcon
            className="black-button"
            iconName="fas fa-caret-right"
            buttonType={rightButtonType}
            callback={() => {
              onRightClick();
              this._onCarouselNavigate();
            }}
          />
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
  }),
  getCurrentBreakpoint: PropTypes.func.isRequired
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
