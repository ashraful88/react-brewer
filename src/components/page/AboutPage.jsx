import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/about-page.css';

const AboutPage = () => {
  return (
    <div>
      <h2>About Page</h2>
      <p>
      AboutPageAbout PageAboutPage AboutPageAbout PageAboutPage AboutPage AboutPage AboutPage 
      </p>
      <p>
        <Link to="/notfoundlink">Click this 404 link</Link> to see the 404 page.
      </p>
    </div>
  );
};

export default AboutPage;
