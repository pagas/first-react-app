import React, { PureComponent } from 'react';

export default class ResultPure extends PureComponent {
  componentDidUpdate() {
    console.log('Pure result udpate');
  }

  render() {
    return <li>{this.props.result}</li>;
  }
}
