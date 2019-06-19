import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Result extends Component {
  static propTypes = {
    result: PropTypes.number
  }

  componentDidUpdate() {
  }

  render() {
    const { result } = this.props;
    return <li>{result}</li>;
  }
}
