import React, { Component } from 'react';
import './css/Footer.css';


// Footer class
class Footer extends Component {
    render() {
        return (
            <div className='footer-container container'>
                <div className='footer-text'>
                    <a href='#'>京ICP备17000000号-1</a>
                    <a href='#'>Copyright ©2012-2018</a>
                    <a href='#'>全国展览保险网</a>
                </div>
            </div>
        );
    }
}


export default Footer;