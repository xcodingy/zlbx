import React, {Component} from 'react';
import '../css/Modal.css';

import cross from '../res/cross.png';


class Modal extends Component {
    constructor(args) {
        super(args);

        this.fadeInterval = 5;

        this.modalFadeIn = this.modalFadeIn.bind(this);
        this.modalFadeOut = this.modalFadeOut.bind(this);
        this.handleCloseLogModal = this.handleCloseLogModal.bind(this);
    }

    componentDidMount() {
        let modalObj = this.refs['modal'];

        modalObj.style.display = 'none';
    }

    componentWillUpdate(nextProps, nextState) {
        let modalObj = this.refs['modal'];

        if (nextProps.show === true) {
            this.modalFadeIn(modalObj);
        }
        else if (nextProps.show === false) {
            this.modalFadeOut(modalObj);
        }
    }

    componentWillUnmount() {
        let modalObj = this.refs['modal'];

        modalObj.style.display = 'none';
    }

    modalFadeIn(modalObj) {
        let opacity = 0;

        modalObj.style.opacity = 0;
        modalObj.style.display = 'block';

        let timerId = setInterval(
            () => {
                modalObj.style.opacity = opacity / 20;
                opacity ++;

                if (opacity === 20) {
                    clearInterval(timerId);
                }
            }, this.fadeInterval
        );
    }

    modalFadeOut(modalObj) {
        let opacity = 20;

        let timerId = setInterval(
            () => {
                modalObj.style.opacity = opacity / 20;
                opacity --;

                if (opacity === 0) {
                    clearInterval(timerId);
                    modalObj.style.display = 'none';
                }
            }, this.fadeInterval
        );
    }

    handleCloseLogModal() {
        this.props.onModal();
    }

    render() {

        return (
            <div className='modal' onClick={this.handleCloseLogModal} ref='modal'>
                <div className='modal-background'></div>
                <div className='modal-content'>
                    <img alt='cross' src={cross} id='cross' />
                </div>
            </div>
        );
    }
}


export default Modal;