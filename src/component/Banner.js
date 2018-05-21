import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';

import '../css/Banner.css';
import banner from '../res/banner.png';
import computer from '../res/computer.png';
import wechat from '../res/wechat.png';


// Banner class
class Banner extends Component {
    constructor(args) {
        super(args);

        this.state = {
            showLogModal: 'none'
        }

        this.handleOpenLogModal = this.handleOpenLogModal.bind(this);
        this.handleCloseLogModal = this.handleCloseLogModal.bind(this);
        this.addBlur = this.addBlur.bind(this);
        this.removeBlur = this.removeBlur.bind(this);
        this.blur = 10;
        this.blurInterval = 30;
    }

    handleOpenLogModal() {
        this.setState({
            showLogModal: 'block'
        });

        this.addBlur();
    }

    handleCloseLogModal() {
        this.setState({
            showLogModal: 'none'
        });

        this.removeBlur();
    }

    addBlur() {
        let val = 0;
        let banner_obj = this.refs['banner'];

        let blurID = setInterval(
            () => {
                banner_obj.style.filter = 'blur(' + val + 'px)';
                val ++;

                if (val === this.blur) {
                    clearInterval(blurID);
                }
            }, this.blurInterval
        );
    }

    removeBlur() {
        let val = this.blur;
        let banner_obj = this.refs['banner'];

        let blurID = setInterval(
            () => {
                banner_obj.style.filter = 'blur(' + val + 'px)';
                val ++;

                if (val === 0) {
                    clearInterval(blurID);
                }
            }, this.blurInterval
        );
    }

    getParent() {
        return document.getElementById('banner');
    }

    render() {
        return(
            <div>
                <Modal show={this.state.showLogModal} ref='modal' />
                <div className='banner-container container' id='banner' ref='banner'>
                    <img alt='banner' src={banner} />
                    <div className='left'>
                        <img alt='left' src={computer} />
                        <div className='button'>
                            <Link to='registration'><span>在 线 投 保</span></Link>
                        </div>
                    </div>
                    <div className='right'>
                        <div className='button'  onClick={this.handleOpenLogModal}>
                            <div><span>微 信 投 保</span></div>
                        </div>
                        <img alt='right' src={wechat} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;