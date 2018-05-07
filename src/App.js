import React, { Component } from 'react';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';

import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';

import IndexContent from './page/IndexContent';
import Downloads from './page/Downloads';
import Contact from './page/Contact';
import SignUp from './page/SignUp';
import Registration from './page/Registration';


class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={IndexContent}/>
                    <Route path='/downloads' component={Downloads}/>
                    <Route path='/contact' component={Contact}/>
                    <Route path='/signup' component={SignUp}/>
                    <Route path='/registration' component={Registration}/>
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default App;