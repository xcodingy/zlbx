import React, {Component} from 'react';
import logo from './res/logofull.png';
import './css/Navbar.css'


class Navbar extends Component {
    render() {
        return (
            <div className="nav container">
                <a id="logo" href="#">
                    <img alt="logo" src={logo} />
                </a>
                <ul className="menu">
                    <li><a href="#">回到主页</a></li>
                    <li><a href="#">资料下载</a></li>
                    <li><a href="#">联系我们</a></li>
                    <li><a href="#">注册</a></li>
                    <li><a href="#">登录</a></li>
                </ul>
            </div>
        );
    }
}


export default Navbar;