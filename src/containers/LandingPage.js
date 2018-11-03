import React from 'react';
import Link from 'next/link';
import ParticlesWrapper from '../components/Particles';

import '../styles/LandingPage.scss';

const LANDING_PAGE_ROW = [
  {
    href: '/About',
    linkDisplay: 'About',
    imageSrc: '../../static/about-img.jpeg',
    imageAlt: 'About'
  },
  {
    href: '/Portfolio',
    linkDisplay: 'Portfolio',
    imageSrc: '../../static/portfolio-img.jpeg',
    imageAlt: 'Portfolio'
  },
  {
    href: '/Blog',
    linkDisplay: 'Blog',
    imageSrc: '../../static/blog-img.jpeg',
    imageAlt: 'Blog'
  },
  {
    href: '/Getintouch',
    linkDisplay: 'Contact',
    imageSrc: '../../static/contact-img.jpeg',
    imageAlt: 'Contact'
  }
];

const LandingPage = () => (
  <div className="App-LandingPage">
    <div className="tilt" />
    {LANDING_PAGE_ROW.map(row => (
      <div className="tilt content">
        <Link href={row.href}>
          <button type="button" className={`tilt-title ${row.linkDisplay}`}>
            {row.linkDisplay}
          </button>
        </Link>
        <img
          className={`tilt-img ${row.linkDisplay}`}
          src={row.imageSrc}
          alt={row.imageAlt}
        />
      </div>
    ))}
    <div className="tilt last-item" />
    <ParticlesWrapper />
  </div>
);

export default LandingPage;
