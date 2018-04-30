import React, {Component} from 'react';
import banner from './res/banner.png';
import './css/Banner.css';


class Banner extends Component {
    render() {
        return(
            <div className="container">
                <img alt="banner" src={banner} />
                <div className=""></div>
            </div>
        );
    }
}


export default Banner;