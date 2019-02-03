/* global IntersectionObserver */

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Link from 'next/link';
// import IntersectionObserver from 'intersection-observer';
import { canUseDOM } from 'exenv';

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

const HISTORY_BUTTONS = [
  {
    name: 'cs50',
    ref: 'section2',
    imgSrc: '../../static/About/cs50.png'
  },
  {
    name: 'hack-reactor',
    ref: 'section3',
    imgSrc: '../../static/About/hack-reactor-logo.png'
  },
  {
    name: 'menlo-technologies',
    ref: 'section5',
    imgSrc: '../../static/About/menlo-technologies.png'
  },
  {
    name: 'ibm',
    ref: 'section6',
    imgSrc: '../../static/About/ibm-logo.png'
  }
];

const CAROUSEL_ITEMS = [
  {
    name: 'ibm-badge',
    imgSrc: '../../static/About/ibm-badge.jpg'
  },
  {
    name: 'ibm-internal-profile',
    imgSrc: '../../static/About/ibm-internal.png'
  },
  {
    name: 'ibm-article',
    imgSrc: '../../static/About/ibm-article.jpg'
  }
];

class About extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      carouselDisplayItemIndex: 0
    };

    this.sectionRef = {};
    this.IntersectionObserver = null;

    this._goToSection = this._goToSection.bind(this);
    this._onCarouselNavigate = this._onCarouselNavigate.bind(this);
  }

  componentDidMount() {
    if (canUseDOM) {
      this._createIntersectionObserver();
    }
  }

  componentWillUnmount() {
    const refsKeys = Object.keys(this.sectionRef);
    refsKeys.forEach(ref => {
      this.IntersectionObserver.unobserve(this.sectionRef[ref]);
    });
  }

  _createIntersectionObserver() {
    this.IntersectionObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          this.setState({
            [entry.target.id]: entry.isIntersecting
          });
        });
      },
      {
        rootMargin: '0px 0px -25% 0px'
      }
    );

    const refsKeys = Object.keys(this.sectionRef);
    refsKeys.forEach(ref => {
      this.IntersectionObserver.observe(this.sectionRef[ref]);
    });
  }

  _goToSection(ref) {
    this.sectionRef[ref].scrollIntoView({ behavior: 'smooth' });
  }

  _onCarouselNavigate(forward = true) {
    const { carouselDisplayItemIndex } = this.state;

    let nextIndex;
    if (forward) {
      nextIndex =
        CAROUSEL_ITEMS.length - 1 === carouselDisplayItemIndex
          ? 0
          : carouselDisplayItemIndex + 1;
    } else {
      nextIndex =
        carouselDisplayItemIndex === 0
          ? CAROUSEL_ITEMS.length - 1
          : carouselDisplayItemIndex - 1;
    }
    this.setState({
      carouselDisplayItemIndex: nextIndex
    });
  }

  render() {
    const { carouselDisplayItemIndex } = this.state;

    return (
      <div className="App-About">
        <div
          className={classnames('App-About-section App-About-section1', {
            animate: this.state.section1
          })}
          id="section1"
          ref={el => {
            this.sectionRef.section1 = el;
          }}
        >
          <h1 className="App-About-title">Who am I?</h1>
          <div className="App-About-header">
            <p className="App-About-header-avatar">
              <img
                className="avatar"
                src="../../static/About/avatar-PL.jpg"
                alt="avatar"
              />
            </p>

            <div className="App-About-header-content">
              <p className="App-About-header-content-p1">
                I am a versatile, highly motivated and efficient full-stack
                software engineer living in San Francisco. With experience in
                both sales and engineering, I have the keen eye for creating
                beautiful UI and highly user-friendly products.
              </p>
              <p className="App-About-header-content-p2">
                I believe that we all live in the age where anything is possible
                through technology. I want to connect with others who share a
                similar mindset to chat over a cup of coffee, to discuss about
                the joy of learning and development, or even just to share a
                great new book.
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

        <div
          className={classnames('App-About-section App-About-section2', {
            animate: this.state.section2
          })}
          id="section2"
          ref={el => {
            this.sectionRef.section2 = el;
          }}
        >
          <div className="App-About-section2-content">
            <h2 className="App-About-section2-content-header">The beginning</h2>
            <Image
              width={300}
              height={300}
              src="../../static/About/cs50.png"
              alt="cs50"
            />
          </div>
          <h3 className="App-About-section2-content-h3">
            My first introduction
          </h3>
          <h3 className="App-About-section2-content-h3">
            to Computer Science and Programming
          </h3>
        </div>

        <div
          className={classnames('App-About-section App-About-section3', {
            animate: this.state.section3
          })}
          id="section3"
          ref={el => {
            this.sectionRef.section3 = el;
          }}
        >
          <div className="App-About-section3-content">
            <h2>Hack Reactor</h2>
            <Image
              className="App-About-section3-content-image"
              width={750}
              height={450}
              src="../../static/About/hack-reactor.jpg"
              alt="hackreactor"
            />
            <h3 className="App-About-section3-content-h3">
              From different paths of life
            </h3>
            <h2 className="App-About-section3-content-h2">
              We told our stories
            </h2>
            <h3>
              Here is&nbsp;
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://medium.com/@phongtlam/chasing-the-silicon-valley-dream-my-1-year-journey-through-a-coding-bootcamp-54456833d019"
              >
                mine
              </a>
            </h3>
          </div>
        </div>

        <div
          className={classnames('App-About-section App-About-section4', {
            animate: this.state.section4
          })}
          id="section4"
          ref={el => {
            this.sectionRef.section4 = el;
          }}
        >
          <div className="App-About-section4-content">
            <i className="fa-3x fab fa-js" />
            <i className="fa-3x fab fa-react" />
            <i className="fa-3x fab fa-node" />
            <i className="fa-3x fas fa-database" />
          </div>
        </div>

        <div
          className={classnames('App-About-section App-About-section5', {
            animate: this.state.section5
          })}
          id="section5"
          ref={el => {
            this.sectionRef.section5 = el;
          }}
        >
          <div className="App-About-section5-content">
            <h2 className="App-About-section5-content-title">
              Menlo Technologies
            </h2>
            <div className="App-About-section5-content-1">
              <Image
                className="App-About-section5-content-image"
                width={300}
                height={150}
                src="../../static/About/project-management.png"
                alt="project-management"
              />
              <ul className="App-About-section5-content-taskList">
                <li>
                  <i className="icon fas fa-caret-right" />
                  <span className="taskList item1">
                    Project Management Software
                  </span>
                </li>
                <li>
                  <i className="icon fas fa-caret-right" />
                  <span className="taskList item2">
                    Rebuild the entire front-end stack
                  </span>
                </li>
                <li>
                  <i className="icon fas fa-caret-right" />
                  <span className="taskList item3">
                    Testing, Deployment and Integration
                  </span>
                </li>
                <li>
                  <i className="icon fas fa-caret-right" />
                  <span className="taskList item4">
                    Full ownership of the project
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className={classnames('App-About-section App-About-section6', {
            animate: this.state.section6
          })}
          id="section6"
          ref={el => {
            this.sectionRef.section6 = el;
          }}
        >
          <Image
            className="App-About-section6-content-image"
            width={300}
            height={120}
            src="../../static/About/ibm-cloud-logo.png"
            alt="ibm-logo"
          />

          <div className="App-About-section6-content-carousel-container">
            <ButtonIcon
              iconName="far fa-caret-square-left"
              buttonType="borderless"
              iconSize="3x"
              callback={() => this._onCarouselNavigate(false)}
            />
            <ul className="App-About-section6-content-carousel flex-container">
              {CAROUSEL_ITEMS.map((el, index) => (
                <li
                  className={classnames(
                    'App-About-section6-content-carousel-item',
                    {
                      current: carouselDisplayItemIndex === index
                    }
                  )}
                >
                  <Image
                    className="App-About-section6-content-carousel-item-image"
                    width={500}
                    height={500}
                    src={el.imgSrc}
                    alt={el.name}
                  />
                </li>
              ))}
            </ul>
            <ButtonIcon
              iconName="far fa-caret-square-right"
              buttonType="borderless"
              iconSize="3x"
              callback={this._onCarouselNavigate}
            />
          </div>
        </div>

        <ul className="App-About-summary">
          {HISTORY_BUTTONS.map(el => (
            <li className="App-About-summary-item">
              <button
                className="App-About-summary-item-overlay"
                onClick={() => this._goToSection(el.ref)}
                type="button"
              />
              <Image
                className={`App-About-summary-item-button App-About-summary-item-button-${
                  el.name
                }`}
                width={300}
                height={300}
                src={el.imgSrc}
                alt={el.name}
              />
            </li>
          ))}
        </ul>

        <ul className="App-About-stuff">
          {SKILLS.map(skill => (
            <li className="App-About-stuff-item" key={skill.name}>
              {/* eslint-disable-next-line */}
              <span>{skill.name}:</span>
              <StarRating rating={skill.rating} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

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
