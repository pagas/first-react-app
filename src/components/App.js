import React, {Component} from 'react';
import '../App.css';
import Header from "../shared/components/layout/Header";
import Home from '../components/Home/Home';
import Footer from "../shared/components/layout/Footer";
import Content from "../shared/components/layout/Content";
import Todo from "./Todo/Todo";
import Timer from "./Pomodoro/Timer";
import Coins from "./Coins/Coins";
import Notes from "./Notes/Notes";

// This is our fake data...
import {notes1, notes2} from './Notes/data';

class App extends Component {
    constructor() {
        super();
        // The first time we load the notes1...
        this.state = {
            notes: notes1
        };

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

                    <Notes notes={this.state.notes}/>
                    <Coins/>
                    <Timer/>
                    <Todo/>
                    <Home/>
                </Content>
                <Footer/>
            </div>
        );
    }
}

export default App;
