import React, { Component } from 'react';
import './Home.css';

export default class home extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Carlos'
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        name: 'Cristina'
      });
    });
  }

  render() {
    console.log('re-render is called');
    return (
      <div className="Home">
        <h1>Welcome to Codejobs</h1>

        <p>
Hi my name is
          {this.state.name}
          {' '}

        </p>
        <p>
                In this recipe you will learn how to add styles to
                components. If you want to learn more you can visit
                our Youtube Channel at
          <a href="http://youtube.com/codejobs">Codejobs</a>
.
        </p>
      </div>
    );
  }
}
