import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import logo from './res/logofull.png';
import './css/Navbar.css'


// Navigation bar class
class Navbar extends Component {
    constructor(args) {         // constructor to initial states
        super(args);

        this.state = {
            left: (document.body.clientWidth - 1300) / 2 + 'px'         // set initial state of style 'left'
        }

        this.updateNav = this.updateNav.bind(this);     // bind function so it can work in call back
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateNav);      // set up window size listener
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateNav);       // unset window size listener
    }

    updateNav() {
        this.setState({
            left: (document.body.clientWidth - 1300) / 2 + 'px'     // update state 'left'
        });
    }

    render() {
        return (
            <div className='nav container' ref='nav' style={{left: this.state.left}}>       {/* bind style left to state left */}
                <Link id='logo' to='/'>
                    <img alt='logo' src={logo} />
                </Link>
                <ul className='menu'>
                    <li><Link to='/'>回到主页</Link></li>
                    <li><Link to='/downloads'>资料下载</Link></li>
                    <li><Link to='/contact'>联系我们</Link></li>
                    <li><Link to='/signup'>注册</Link></li>
                    <li><Link to='#'>登录</Link></li>
                </ul>
            </div>
        );
    }
}


export default Navbar;