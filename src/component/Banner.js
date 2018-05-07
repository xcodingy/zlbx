import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import ReactModal from 'react-modal';

import '../css/Banner.css';
import banner from '../res/banner.png';
import computer from '../res/computer.png';
import wechat from '../res/wechat.png';


// Banner class
class Banner extends Component {
    constructor(args) {
        super(args);

        this.state = {
            showLogModal: false
        }

        this.handleOpenLogModal = this.handleOpenLogModal.bind(this);
        this.handleCloseLogModal = this.handleCloseLogModal.bind(this);
    }

    handleOpenLogModal() {
        this.setState({
            showLogModal: true
        });
    }

    handleCloseLogModal() {
        this.setState({
            showLogModal: false
        });
    }

    getParent() {
        return document.getElementById('banner');
    }

    render() {
        return(
            <div className='banner-container container' id='banner'>
                <ReactModal
                    isOpen={this.state.showLogModal}
                    contentLabel="Minimal Modal Example"
                    ariaHideApp={false}
                    parentSelector={this.getParent}
                    className='modal'
                    overlayClassName='overlay'
                >
                    <button onClick={this.handleCloseLogModal}>Close Modal</button>
                </ReactModal>
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
        );
    }
}

export default Banner;