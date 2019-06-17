import React, {Component} from 'react';
import '../App.css';
import Header from "../shared/components/layout/Header";
import Footer from "../shared/components/layout/Footer";
import Content from "../shared/components/layout/Content";
// import Home from '../components/Home/Home';
// import Todo from "./Todo/Todo";
// import Timer from "./Pomodoro/Timer";
// import Coins from "./Coins/Coins";
// import Notes from "./Notes/Notes";
// import Chart from "./Chart/Chart";
// import Animation from "./Animation/Animation";
// import Numbers from "./Numbers/Numbers";
//import Xss from "./Xss/Xss";
// import Calculator from "./Calculator/Calculator";


// This is our fake data...
import {notes1, notes2} from './Notes/data';
import Person from "./Person/Person";

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

    componentDidMount() {
        // After 10 seconds (10000 milliseconds) we concatenate our
        // data with notes2...
        setTimeout(() => {
            this.setState({
                notes: [...this.state.notes, ...notes2]
            });
        }, 10000);
    }

    render() {
        return (
            <div className="App">
                <Header title="The new header title"/>
                <Content>
                    <Person/>
                    {/*<Calculator/>*/}
                    {/*<Xss/>*/}
                    {/*<Numbers/>*/}
                    {/*<Animation/>*/}
                    {/*<Chart*/}
                        {/*columns={this.columns}*/}
                        {/*chartType={this.state.chartType}*/}
                    {/*/>*/}

                    {/*<p>*/}
                        {/*Chart Type*/}
                        {/*<button onClick={this.setBarChart}>Bar</button>*/}
                        {/*<button onClick={this.setLineChart}>Line</button>*/}
                    {/*</p>*/}
                    {/*<Notes notes={this.state.notes}/>*/}
                    {/*<Coins/>*/}
                    {/*<Timer/>*/}
                    {/*<Todo/>*/}
                    {/*<Home/>*/}
                </Content>
                <Footer/>
            </div>
        );
    }
}

export default App;
