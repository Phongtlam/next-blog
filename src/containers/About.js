import React from 'react';
import '../styles/About.scss';

const About = () => (
  <div className="App-About">
    <h1>Who am I?</h1>
    <p>
      I am a versatile full-stack software developer living in San Francisco. I
      {/* eslint-disable-next-line */}
      believe in creating beautiful and responsive UI components&hellip; one{' '}
      <code>&lt;div&gt;</code>
      &nbsp;at a time.
    </p>

    <p>
      <img className="avatar" src="../../static/avatar-PL.jpg" alt="avatar" />
    </p>

    <p>
      I hope to learn something new every day. I want to constantly update
      myself with the flow of technology. I am on a journey of self-development,
      to get better at programming, at interacting with technology, to learn how
      we and machines can act together for the advancement of human kind.
    </p>
  </div>
);

export default About;
