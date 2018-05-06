import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import Banner from './Banner';
import Flow from './Flow';
import Footer from './Footer';

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div id='content'>
                    <Banner />
                    <Flow />
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;