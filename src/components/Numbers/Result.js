import React, {Component} from 'react';

export default class Result extends Component {
    componentDidUpdate() {
        console.log('result udpate');
    }
    render() {
        return <li>{this.props.result}</li>;
    }
}