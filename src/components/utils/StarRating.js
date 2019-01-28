import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const generateArrayWithLng = (length, item) => {
  const arr = [];
  arr.length = length;
  arr.fill(item);
  return arr;
};

const generateRatingsArray = rating => {
  const ratingArray = rating.split('/');
  const arr = generateArrayWithLng(Number(ratingArray[1]));
  const numerator = Number(ratingArray[0]);

  for (let i = 0; i < arr.length; i += 1) {
    if (i + 1 <= numerator) {
      arr[i] = 1;
    } else if (i + 1 === Math.ceil(numerator)) {
      arr[i] = 0.5;
    } else {
      arr[i] = 0;
    }
  }
  return arr;
};

const initializeState = array => {
  const state = {};
  array.forEach((_, i) => {
    state[i] = false;
  });
  return state;
};

class StarRating extends React.PureComponent {
  static propTypes = {
    rating: PropTypes.string,
    delay: PropTypes.number
  };

  static defaultProps = {
    rating: '5/5',
    delay: 600
  };

  constructor(props) {
    super(props);

    this.starsArray = generateRatingsArray(this.props.rating);

    this.state = {
      visible: initializeState(this.starsArray),
      bounce: initializeState(this.starsArray)
    };
  }

  componentDidMount() {
    this._animating();
  }

  _animating() {
    const { delay = 600 } = this.props;
    for (let i = 0; i < this.starsArray.length; i += 1) {
      const delayTimer = delay + i * 500;

      setTimeout(() => {
        this.setState(prevState => ({
          visible: {
            ...prevState.visible,
            [i]: true
          }
        }));
      }, delayTimer);

      setTimeout(() => {
        this.setState(prevState => ({
          bounce: {
            ...prevState.bounce,
            [i]: true
          }
        }));
      }, delayTimer + 50);
    }
  }

  render() {
    const { visible, bounce } = this.state;
    return (
      <ul className="App-StarRating">
        {this.starsArray.map((el, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={index}>
            <span
              className={classnames('App-StarRating-star', {
                'fa fa-star': el === 1,
                'fas fa-star-half-alt': el === 0.5,
                'far fa-star': el === 0,
                visible: visible[index],
                bounce: bounce[index]
              })}
            />
          </li>
        ))}
      </ul>
    );
  }
}

StarRating.propTypes = {
  rating: PropTypes.string
};

StarRating.defaultProps = {
  rating: '5/5'
};

export default StarRating;
