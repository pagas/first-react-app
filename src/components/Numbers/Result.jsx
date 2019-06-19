import React, { Component } from 'react';

export default class Result extends Component {
  componentDidUpdate() {
    console.log('result udpate');
  }

  render() {
    const { result } = this.props;
    return <li>{result}</li>;
  }
}
