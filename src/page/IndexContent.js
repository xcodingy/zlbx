import React, { Component } from 'react';

import Banner from '../component/Banner';
import Flow from '../component/Flow';

class IndexContent extends Component {
    render() {
        return (
            <div id='content'>
                <Banner />
                <Flow />
            </div>
        );
    }
}

export default IndexContent;