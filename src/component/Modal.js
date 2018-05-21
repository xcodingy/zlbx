import React, {Component} from 'react';
import '../css/Modal.css';


class Modal extends Component {
    render() {
        let style = {
            display: this.props.show
        }

        return (
            <div className='modal' style={style}>
                <div className='modal-content'>

                </div>
                <div className='modal-background'>

                </div>
            </div>
        );
    }
}


export default Modal;