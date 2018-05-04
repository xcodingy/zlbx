import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import Banner from './Banner';
import Flow from './Flow';

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Banner />
                <Flow />
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
