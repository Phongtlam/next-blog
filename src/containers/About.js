import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import StarRating from '../components/utils/StarRating';
import ButtonIcon from '../components/buttons/ButtonIcon';
import Image from '../components/utils/Image';
import {
  fluidImageContainer,
  fluidImageContent
} from '../utils/fluidImageContainer';
import { LARGE, breakpoints } from '../enums/client-dimensions';

const SKILLS = [
  {
    name: 'Javascript',
    icon: 'fab fa-js',
    rating: '4/5'
  },
  {
    name: 'TypeScript',
    rating: '3/5'
  },
  {
    name: 'React/Redux',
    icon: 'fab fa-react',
    rating: '5/5'
  },
  {
    name: 'React Native',
    rating: '3.5/5'
  },
  {
    name: 'NextJS',
    rating: '4.5/5'
  },
  {
    name: 'Angular 5/6',
    icon: 'fab fa-angular',
    rating: '3.5/5'
  },
  {
    name: 'NodeJS',
    icon: 'fab fa-node',
    rating: '3/5'
  },
  {
    name: 'CSS3',
    icon: 'fab fa-css3-alt',
    rating: '4/5'
  },
  {
    name: 'Sass',
    rating: '4/5'
  },
  {
    name: 'HTML5',
    rating: '4/5'
  },
  {
    name: 'jQuery',
    rating: '3/5'
  },
  {
    name: 'RoR',
    rating: '2.5/5'
  },
  {
    name: 'Git/Mercurial/SVN',
    rating: '3.5/5'
  },
  {
    name: 'MongoDB',
    rating: '3.5/5'
  },
  {
    name: 'Firebase',
    rating: '3.5/5'
  },
  {
    name: 'Redis',
    rating: '3/5'
  }
];

const About = props => {
  const {
    ClientDimensions: { viewportWidth }
  } = props;

  return (
    <div className="App-About">
      <div className="App-About-section1">
        <h1 className="App-About-title">Who am I?</h1>
        <div className="App-About-header">
          <p className="App-About-header-avatar">
            <img
              className="avatar"
              src="../../static/avatar-PL.jpg"
              alt="avatar"
            />
          </p>

          <div className="App-About-header-content">
            <p className="App-About-header-content-p1">
              I am a versatile, highly motivated and efficient full-stack
              software engineer living in San Francisco. With experience in both
              sales and engineering, I have the keen eye for creating beautiful
              UI and highly user-friendly products.
            </p>
            <p className="App-About-header-content-p2">
              I believe that we all live in the age where anything is possible
              through technology. I want to connect with others who share
              similar mindset to chat over a cup of coffee, to discuss about the
              joy of learning and development, or even just to share a great new
              book.
            </p>
            <p className="App-About-header-content-p3">
              Feel free to shoot me a message &nbsp;
              <Link href="/Getintouch">
                <ButtonIcon iconName="far fa-envelope" callback={() => {}}>
                  here
                </ButtonIcon>
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="App-About-section2">
        <div className="App-About-section2-content">
          <h2 className="App-About-section2-content-header">The beginning</h2>
          <Image
            width={750}
            height={450}
            src="../../static/hack-reactor.jpg"
            alt="hackreactor"
          />
          <Image
            width={501}
            height={501}
            src="../../static/cs50.png"
            alt="cs50"
          />
          <h3>We all came from different paths of life</h3>
          <h2>We told our stories</h2>
        </div>
      </div>

      <ul className="App-About-list">
        {SKILLS.map(skill => (
          <li className="App-About-list-item" key={skill.name}>
            {/* eslint-disable-next-line */}
            <span>{skill.name}:</span>
            <StarRating rating={skill.rating} />
          </li>
        ))}
      </ul>
    </div>
  );
};

About.propTypes = {
  ClientDimensions: PropTypes.shape({
    viewportWidth: PropTypes.number,
    viewportHeight: PropTypes.number
  })
};

About.defaultProps = {
  ClientDimensions: {
    viewportWidth: 0,
    viewportHeight: 0
  }
};

export default About;
