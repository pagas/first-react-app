import React from 'react';
import '../App.css';
import Header from "../shared/components/layout/Header";
//import Home from '../components/Home/Home';
import Footer from "../shared/components/layout/Footer";
import Content from "../shared/components/layout/Content";
//import Todo from "./Todo/Todo";
import Timer from "./Pomodoro/Timer";


function App() {
    return (
        <div className="App">
            <Header title="The new header title"/>
            <Content>

                <Timer/>
            </Content>
            <Footer/>
        </div>
    );
}

export default App;
