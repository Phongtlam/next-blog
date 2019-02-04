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
import Carousel from '../components/utils/Carousel';

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
    rating: '4/5'
  },
  {
    name: 'React Native',
    rating: '3.5/5'
  },
  {
    name: 'NextJS',
    rating: '4/5'
  },
  {
    name: 'Angular 5/6',
    icon: 'fab fa-angular',
    rating: '3/5'
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
    name: 'HTML5',
    rating: '4/5'
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
    name: 'Me',
    ref: 'section1',
    imgSrc: '../../static/About/avatar-PL.jpg'
  },
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
  },
  {
    name: 'walmart-labs',
    ref: 'section7',
    imgSrc: '../../static/About/walmart-labs-small-logo.png'
  }
];

const CAROUSEL_ITEMS = [
  {
    label: 'Aspera',
    alt: 'aspera-logo',
    imgSrc: '../../static/About/aspera-logo.jpg',
    dimension: {
      width: 750,
      height: 500
    }
  },
  {
    label: 'Proud Moment of My Engineering Career',
    alt: 'ibm-badge',
    imgSrc: '../../static/About/ibm-badge.jpg'
  },
  {
    label: 'IBM Blue Page',
    alt: 'ibm-blue-page',
    imgSrc: '../../static/About/ibm-internal.png',
    dimension: {
      width: 1520,
      height: 472
    }
  },
  {
    label: 'IBM Featured Article about Me',
    alt: 'ibm-article',
    imgSrc: '../../static/About/ibm-article.jpg',
    dimension: {
      width: 1024,
      height: 863
    }
  },
  {
    label: 'Me on IBM apprenticeship',
    alt: 'ibm-apprentice',
    imgSrc: '../../static/About/ibm-apprentice.png'
  }
];

const paragraph =
  'I am a versatile, highly motivated and efficient full-stack software engineer living in San Francisco. With experience in both sales and engineering, I have the keen eye for creating beautiful UI and highly user-friendly products.\n' +
  'I believe that we all live in the age where anything is possible through technology. I want to connect with others who share a similar mindset to chat over a cup of coffee, to discuss about the joy of learning and development, or even just to share a great new book.\n' +
  'This page is my live resume, chronicling my journey in software development as I learn and apply the newest, most up-to-date technologies to create an interactive timeline of my career.';

class About extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      headerParagraph: ''
    };

    this.sectionRef = {};
    this.IntersectionObserver = null;

    this._goToSection = this._goToSection.bind(this);
  }

  componentDidMount() {
    if (canUseDOM) {
      this._createIntersectionObserver();
      this._typing(paragraph);
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

  async _typing(texts) {
    const randomTyping = (min, max) =>
      new Promise(res =>
        setTimeout(res, Math.floor(Math.random() * (max - min + 1)) + min)
      );
    let currText = '';
    for (let i = 0; i < texts.length; i += 1) {
      await randomTyping(10, 50);
      currText += texts.charAt(i);
      this.setState({
        headerParagraph: currText
      });
    }
  }

  render() {
    const { headerParagraph } = this.state;
    const { getCurrentBreakpoint } = this.props;

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
              <i className="App-About-header-content-cursor fa-3x fas fa-terminal" />
              <p>{headerParagraph}</p>
              <p className="App-About-header-content-p4">
                Feel free to shoot me a message &nbsp;
                <Link href="/Getintouch">
                  <ButtonIcon iconName="far fa-envelope" callback={() => {}}>
                    here
                  </ButtonIcon>
                </Link>
              </p>
            </div>
          </div>

          <ul className="App-About-ratings flex-container">
            {SKILLS.map(skill => (
              <li className="App-About-ratings-item" key={skill.name}>
                {/* eslint-disable-next-line */}
                <span>{skill.name}:</span>
                {/* <i className={`fa-2x ${skill.icon}`} /> */}
                <StarRating rating={skill.rating} />
              </li>
            ))}
          </ul>
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
            <Image
              className="App-About-section3-content-logo"
              width={1643}
              height={231}
              src="../../static/About/hack-reactor-horizontal-logo.png"
              alt="hackreactor"
            />
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
            <i className="fa-3x fas fa-code" />
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

          <Carousel
            getCurrentBreakpoint={getCurrentBreakpoint}
            items={CAROUSEL_ITEMS.map(el => (
              <React.Fragment>
                <Image
                  width={
                    el.dimension && el.dimension.width
                      ? el.dimension.width
                      : 500
                  }
                  height={
                    el.dimension && el.dimension.height
                      ? el.dimension.height
                      : 500
                  }
                  src={el.imgSrc}
                  alt={el.alt}
                />
                <h4 className="App-About-section6-content-label">{el.label}</h4>
              </React.Fragment>
            ))}
          />

          <ul className="App-About-section6-content-description">
            <li>
              <i className="icon fas fa-caret-right" />
              &nbsp;Joining IBM under the Hybrid Cloud Division
            </li>
            <li>
              <i className="icon fas fa-caret-right" />
              &nbsp;Directly contributed in rebuilding Aspera on Cloud from
              Greenfield to Production
            </li>
            <li>
              <i className="icon fas fa-caret-right" />
              &nbsp;Build a full featured D3 visualization component library for
              Aspera Analytics
            </li>
          </ul>
        </div>

        <div
          className={classnames('App-About-section App-About-section7', {
            animate: this.state.section7
          })}
          id="section7"
          ref={el => {
            this.sectionRef.section7 = el;
          }}
        >
          <Image
            className="App-About-section7-image"
            width={1280}
            height={247}
            src="../../static/About/walmart-labs.png"
            alt="walmart-labs-logo"
          />
        </div>

        <div>
          <h2>My Journey thus far...</h2>
          <ul className="App-About-summary">
            {HISTORY_BUTTONS.map(el => (
              <li key={el.ref} className="App-About-summary-item">
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
        </div>

        <br />
        <div className="App-About-disclaimer">
          <h3>DISCLAIMER</h3>
          <p>
            All product and company names are trademarks™ or registered®
            trademarks of their respective holders. Use of them does not imply
            any affiliation with or endorsement by them.
          </p>
        </div>
      </div>
    );
  }
}

About.propTypes = {
  ClientDimensions: PropTypes.shape({
    viewportWidth: PropTypes.number,
    viewportHeight: PropTypes.number
  }),
  getCurrentBreakpoint: PropTypes.func
};

About.defaultProps = {
  ClientDimensions: {
    viewportWidth: 0,
    viewportHeight: 0
  },
  getCurrentBreakpoint: () => {}
};

export default About;
