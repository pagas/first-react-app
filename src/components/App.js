import React from 'react';
import '../App.css';
import Header from "../shared/components/layout/Header";
//import Home from '../components/Home/Home';
import Footer from "../shared/components/layout/Footer";
import Content from "../shared/components/layout/Content";
import Todo from "./Todo/Todo";

function App() {
    return (
        <div className="App">
            <Header title="The new header title"/>
            <Content>
                <Todo/>
            </Content>
            <Footer/>
        </div>
    );
}

export default App;
