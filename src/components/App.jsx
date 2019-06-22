import React, { Component } from 'react';
import '../App.css';
import './Person/Popup.css';
import Popup from 'react-popup';
import Helmet from 'react-helmet';
import Header from '../shared/components/layout/Header';
import Footer from '../shared/components/layout/Footer';
import Content from '../shared/components/layout/Content';

import Home from './Home/Home';
import Todo from './Todo/Todo';
import Timer from './Pomodoro/Timer';
import Coins from './Coins/Coins';
import Notes from './Notes/Notes';
import Chart from './Chart/Chart';
import Animation from './Animation/Animation';
import Numbers from './Numbers/Numbers';
import Xss from './Xss/Xss';
import Calculator from './Calculator/Calculator';


// This is our fake data...
import { notes1, notes2 } from './Notes/data';
import Person from './Person/Person';

class App extends Component {
  constructor() {
    super();
    // The first time we load the notes1...
    this.state = {
      notes: notes1,
      chartType: 'line'
    };

    this.columns = [
      ['BTC', 3000, 6000, 10000, 15000, 13000, 11000],
      ['ETH', 2000, 3000, 5000, 4000, 3000, 940],
      ['XRP', 100, 200, 300, 500, 400, 300],
    ];
  }

  componentDidMount() {
    const { notes } = this.state;
    // After 10 seconds (10000 milliseconds) we concatenate our
    // data with notes2...
    setTimeout(() => {
      this.setState({
        notes: [...notes, ...notes2]
      });
    }, 10000);
  }

    setBarChart = () => {
      this.setState({
        chartType: 'bar'
      });
    }

    setLineChart = () => {
      this.setState({
        chartType: 'line'
      });
    }

    render() {
      const { chartType, notes } = this.state;
      return (
        <div className="App">
          <Helmet
            title="Person Information"
            meta={[
              { name: 'title', content: 'Person Information' },
              { name: 'description', content: 'This recipe talks about React Helmet' }
            ]}
          />
          <Header title="The new header title" />
          <Content>
            <Person />
            <Calculator />
            <Xss />
            <Numbers />
            <Animation />
            <Chart
              columns={this.columns}
              chartType={chartType}
            />

            <p>
                  Chart Type
              <button type="button" onClick={this.setBarChart}>Bar</button>
              <button type="button" onClick={this.setLineChart}>Line</button>
            </p>
            <Notes notes={notes} />
            <Coins />
            <Timer />
            <Todo />
            <Home />
          </Content>
          <Footer />
          <Popup />

        </div>
      );
    }
}

export default App;
