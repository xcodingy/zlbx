import React, { Component } from 'react';
import logo from './res/logofull.png';
import './App.css';
import Navbar from './Navbar';

class App extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                {/*<div className="App">*/}
                    {/*<div className="App-header">*/}
                        {/*<img src={logo} className="App-logo" alt="logo" />*/}
                        {/*<h1 className="App-title">Welcome to React</h1>*/}
                    {/*</div>*/}
                    {/*<p className="App-intro">*/}
                        {/*To get started, edit <code>src/App.js</code> and save to reload.*/}
                    {/*</p>*/}
                {/*</div>*/}
            </div>
        );
    }
}

export default App;
