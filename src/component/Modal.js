import React, {Component} from 'react';
import '../css/Modal.css';


class Modal extends Component {
    constructor(args) {
        super(args);

        this.fadeInterval = 10;

        this.modalFadeIn = this.modalFadeIn.bind(this);
        this.modalFadeOut = this.modalFadeOut.bind(this);
        this.handleCloseLogModal = this.handleCloseLogModal.bind(this);
    }

    componentDidMount() {
        console.log(this.props.onModal);
        let modalObj = this.refs['modal'];

        modalObj.style.display = 'none';
    }

    componentWillUpdate(nextProps, nextState) {
        let modalObj = this.refs['modal']

        if (nextProps.show) {
            this.modalFadeIn(modalObj);
        }
        else if (!nextProps.show) {
            this.modalFadeOut(modalObj);
        }
    }

    modalFadeIn(modalObj) {
        let opacity = 0;

        modalObj.style.opacity = 0;
        modalObj.style.display = 'block';

        let timerId = setInterval(
            () => {
                modalObj.style.opacity = opacity / 10;
                opacity ++;

                if (opacity === 10) {
                    clearInterval(timerId);
                }
            }, this.fadeInterval
        );
    }

    modalFadeOut(modalObj) {
        let opacity = 10;

        let timerId = setInterval(
            () => {
                modalObj.style.opacity = opacity / 10;
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
                <div className='modal-content'>

                </div>
                <div className='modal-background'>

                </div>
            </div>
        );
    }
}


export default Modal;