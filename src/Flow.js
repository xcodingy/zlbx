import React, {Component} from 'react';
import './css/Flow.css';

import hexborder from './res/hexborder.png';
import delimiter from './res/delimiter.png';
// import connector from './res/connector.png';

var hex_div =

class Flow extends Component {
    render() {
        return(
            <div className='flow-container container'>
                <div className="flow_1 flow">

                </div>
                <div className="delimiter">
                    <img alt="delimiter" src={delimiter} />
                </div>
                <div className="flow_2 flow">

                </div>
            </div>
        );
    }
}


export default Flow