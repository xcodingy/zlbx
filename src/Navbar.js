import React, {Component} from 'react';
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
                <a id='logo' href='#'>
                    <img alt='logo' src={logo} />
                </a>
                <ul className='menu'>
                    <li><a href='#'>回到主页</a></li>
                    <li><a href='#'>资料下载</a></li>
                    <li><a href='#'>联系我们</a></li>
                    <li><a href='#'>注册</a></li>
                    <li><a href='#'>登录</a></li>
                </ul>
            </div>
        );
    }
}


export default Navbar;