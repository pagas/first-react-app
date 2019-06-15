import React, {Component} from 'react';
import PropTypes from 'prop-types';
import logo from '../../../shared/images/logo.svg';

export default class Header extends Component {
    // Here you can define your PropTypes.
    // this is just for validating properties you have passed
    static propTypes = {
        title: PropTypes.string.isRequired,
        url: PropTypes.string
    };

    render() {
        // destructuring js feature used
        const {
            title = 'Welcome to React!',
            url = 'http://localhost:3000'
        } = this.props;

        return <header className="App-header">
            <a href={url}>
                <img src={logo} className="App-logo" alt="logo"/>
            </a>
            <h1 className="App-title">{title}</h1>
        </header>
    }
}
