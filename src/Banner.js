import React, {Component} from 'react';
import './css/Banner.css';

import banner from './res/banner.png';
import computer from './res/computer.png';
import wechat from './res/wechat.png';


class Banner extends Component {
    render() {
        return(
            <div className='banner-container container'>
                <img alt='banner' src={banner} />
                <div className='left'>
                    <img alt='left' src={computer} />
                    <div className='button'>
                        <a href='#'><span>在 线 投 保</span></a>
                    </div>
                </div>
                <div className='right'>
                    <div className='button'>
                        <a href='#'><span>微 信 投 保</span></a>
                    </div>
                    <img alt='right' src={wechat} />
                </div>
            </div>
        );
    }
}


export default Banner;