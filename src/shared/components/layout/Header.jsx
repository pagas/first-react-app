import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../images/logo.svg';

const Header = props => {
  // destructuring js feature used
  const {
    title = 'Welcome to React!',
    url = 'http://localhost:3000'
  } = props;

  return (
    <header className="App-header">
      <a href={url}>
        <img src={logo} className="App-logo" alt="logo" />
      </a>
      <h1 className="App-title">{title}</h1>
    </header>
  );
};

// Here you can define your PropTypes.
// this is just for validating properties you have passed
// even with Functional components we are able to validate our PropTypes
Header.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string
};

export default Header;
