import React, {Component} from 'react';
import './css/Banner.css';

import banner from './res/banner.png';
import computer from './res/computer.png';
import wechat from './res/wechat.png';


class Banner extends Component {
    render() {
        return(
            <div className="container">
                <img alt="banner" src={banner} />
                <div className="left">
                    <img alt="left" src={computer} />
                    <div className="button">
                        在线投保
                    </div>
                </div>
                <div className="right">
                    <div className="button">
                        微信投保
                    </div>
                    <img alt="right" src={wechat} />
                </div>
            </div>
        );
    }
}


export default Banner;