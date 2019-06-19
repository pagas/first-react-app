import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class ResultPure extends PureComponent {
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
