import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const StarRating = ({ rating }) => {
  const ratingArray = rating.split('/');
  const arr = [];
  arr.length = Number(ratingArray[1]);
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

  return (
    <ul className="App-StarRating">
      {arr.map((el, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={index}>
          <span
            className={classnames('App-StarRating-star', {
              'fa fa-star': el === 1,
              'fas fa-star-half-alt': el === 0.5,
              'far fa-star': el === 0
            })}
          />
        </li>
      ))}
    </ul>
  );
};

StarRating.propTypes = {
  rating: PropTypes.string
};

StarRating.defaultProps = {
  rating: '5/5'
};

export default StarRating;
