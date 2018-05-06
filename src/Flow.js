import React, {Component} from 'react';
import './css/Flow.css';
import './css/ArrowDiv.css';
import './css/HexDiv.css';

import hexborder from './res/hexborder.png';
import greenhex from './res/greenhex.png';
import bluehex from './res/bluehex.png';
import delimiter from './res/delimiter.png';
import arrow from './res/arrow.png';
import arrow_l from './res/arrow_l.png';


class ArrowDiv extends Component {
    constructor(args) {
        super(args);
    }

    componentDidMount() {
        // console.log(this.refs['arrow_1'].getAttribute('src'));
        this.timerID = setInterval(
            () => this.updateArrow(), 200
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    updateArrow() {
        let a = this.refs['arrow_1'].getAttribute('src');
        let b = this.refs['arrow_2'].getAttribute('src');
        let c = this.refs['arrow_3'].getAttribute('src');

        this.refs['arrow_2'].setAttribute('src', a);
        this.refs['arrow_3'].setAttribute('src', b);
        this.refs['arrow_1'].setAttribute('src', c);
    }

    render() {
        return (
            <div className='connector'>
                <img alt='arrow' className='arrow_1' src={arrow_l} ref='arrow_1' />
                <img alt='arrow' className='arrow_2' src={arrow} ref='arrow_2' />
                <img alt='arrow' className='arrow_3' src={arrow} ref='arrow_3' />
            </div>
        );
    }
}


class HexDiv extends Component {
    constructor(args) {
        super(args);

        let img_src = hexborder;
        if(this.props.flow === '1') {
            img_src = bluehex;
        }

        else if(this.props.flow === '2') {
            img_src = greenhex;
        }

        this.state = {
            div_class: 'hex_div ' + this.props.name,
            src: img_src
        };
    }

    render() {
        return (
            <div className={this.state.div_class}>
                <div className='hex_text'>
                    <span className='line_1'>{this.props.line1}</span>
                    <span className='line_2'>{this.props.line2}</span>
                </div>
                <img alt='border' src={this.state.src} />
            </div>
        );
    }
}


class Flow extends Component {
    line1_texts = ['扫码', '在线', '填写', '支付', '完成']
    line2_texts = ['关注', '投保', '保单', '保费', '投保']

    render() {
        return (
            <div className='flow-container container'>
                <div className='flow_1 flow'>
                    <div className='flow_title'>
                        在线投保流程
                    </div>
                    <HexDiv line1={this.line1_texts[1]} line2={this.line2_texts[1]} name='hex_div_0' />
                    <ArrowDiv />
                    <HexDiv line1={this.line1_texts[2]} line2={this.line2_texts[2]} name='hex_div_1' />
                    <ArrowDiv />
                    <HexDiv line1={this.line1_texts[3]} line2={this.line2_texts[3]} name='hex_div_2' />
                    <ArrowDiv />
                    <HexDiv line1={this.line1_texts[4]} line2={this.line2_texts[4]} name='hex_div_3' flow='1' />
                </div>
                <div className='delimiter'>
                    <img alt='delimiter' src={delimiter} />
                </div>
                <div className='flow_2 flow'>
                    <div className='flow_title'>
                        微信投保流程
                    </div>
                    <HexDiv line1={this.line1_texts[0]} line2={this.line2_texts[0]} name='hex_div_0' />
                    <ArrowDiv />
                    <HexDiv line1={this.line1_texts[2]} line2={this.line2_texts[2]} name='hex_div_1' />
                    <ArrowDiv />
                    <HexDiv line1={this.line1_texts[3]} line2={this.line2_texts[3]} name='hex_div_2' />
                    <ArrowDiv />
                    <HexDiv line1={this.line1_texts[4]} line2={this.line2_texts[4]} name='hex_div_3' flow='2' />
                </div>
            </div>
        );
    }
}


export default Flow