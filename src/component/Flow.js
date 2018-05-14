import React, {Component} from 'react';
import '../css/Flow.css';
import '../css/ArrowDiv.css';
import '../css/HexDiv.css';

import hexborder from '../res/hexborder.png';
import greenhex from '../res/greenhex.png';
import bluehex from '../res/bluehex.png';
import delimiter from '../res/delimiter.png';
import arrow from '../res/arrow.png';
import arrow_l from '../res/arrow_l.png';


// Arrow animation class
class ArrowDiv extends Component {
    constructor(args) {
        super(args);

        this.fadeInterval = 20;
        this.stopInterval = 300;
        this.fstInterval = this.fadeInterval * 10 + this.stopInterval;
        this.secInterval = this.fstInterval + this.fadeInterval * 10 + this.stopInterval;
        this.trdInterval = this.secInterval + this.fadeInterval * 10 + this.stopInterval;
    }

    componentDidMount() {
        this.timerID = setInterval(              // set up arrow animation trigger
            () => this.updateArrow(), 2300
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);            //unset arrow animation trigger
    }

    updateArrow() {         // define arrow animation
        let a = this.refs['arrow_1'];
        let b = this.refs['arrow_2'];
        let c = this.refs['arrow_3'];

        this.fadeArrowOut(a);
        setTimeout(
            () => this.fadeArrow(a, b), this.fstInterval
        );
        setTimeout(
            () => this.fadeArrow(b, c), this.secInterval
        );
        setTimeout(
            () => this.fadeArrowIn(c), this.trdInterval
        );
    }

    fadeArrow(arrow_a, arrow_b) {
        let num = 0;

        let fadeID = setInterval(
            () => {
                num ++;
                arrow_a.style.opacity = num/10;
                arrow_b.style.opacity = (10 - num)/10;

                if (num === 10) {
                    clearInterval(fadeID);
                }
            }, this.fadeInterval
        );
    }

    fadeArrowIn(arrow) {
        let num = 0;

        let fadeID = setInterval(
            () => {
                num += 1;
                arrow.style.opacity = num/10;

                if (num === 10) {
                    clearInterval(fadeID);
                }
            }, this.fadeInterval
        )
    }

    fadeArrowOut(arrow) {
        let num = 10;

        let fadeID = setInterval(
            () => {
                num -= 1;
                arrow.style.opacity = num/10;

                if (num === 0) {
                    clearInterval(fadeID);
                }
            }, this.fadeInterval
        )
    }


    render() {
        return (
            <div className='connector'>
                <div className='arrow'>
                    <img alt='arrow' className='arrow-1' src={arrow} ref='arrow_1' />
                    <img alt='arrow' className='arrow-2' src={arrow} ref='arrow_2' />
                    <img alt='arrow' className='arrow-3' src={arrow} ref='arrow_3' />
                </div>
                <div className='arrow-l'>
                    <img alt='arrow' className='arrow-1' src={arrow_l} />
                    <img alt='arrow' className='arrow-2' src={arrow_l} />
                    <img alt='arrow' className='arrow-3' src={arrow_l} />
                </div>
            </div>
        );
    }
}


// Hex show board class
class HexDiv extends Component {
    constructor(args) {
        super(args);
        let img_src = hexborder;

        // set up different image for the last hex board
        if(this.props.flow === '1') {
            img_src = bluehex;
        }

        else if(this.props.flow === '2') {
            img_src = greenhex;
        }

        this.state = {
            div_class: 'hex-div ' + this.props.name,            // set up class state
            src: img_src
        };
    }

    render() {
        return (
            <div className={this.state.div_class}>
                <div className='hex-text'>
                    <span className='line-1'>{this.props.line1}</span>
                    <span className='line-2'>{this.props.line2}</span>
                </div>
                <img alt='border' src={this.state.src} />
            </div>
        );
    }
}


// Work flow container class
class Flow extends Component {
    line1_texts = ['扫码', '在线', '填写', '支付', '完成']        // board text list
    line2_texts = ['关注', '投保', '保单', '保费', '投保']

    render() {
        return (
            <div className='flow-container container'>
                <div className='flow-1 flow'>
                    <div className='flow-title'>
                        在线投保流程
                    </div>
                    <HexDiv line1={this.line1_texts[1]} line2={this.line2_texts[1]} name='hex-div-0' />
                    <ArrowDiv />
                    <HexDiv line1={this.line1_texts[2]} line2={this.line2_texts[2]} name='hex-div-1' />
                    <ArrowDiv />
                    <HexDiv line1={this.line1_texts[3]} line2={this.line2_texts[3]} name='hex-div-2' />
                    <ArrowDiv />
                    <HexDiv line1={this.line1_texts[4]} line2={this.line2_texts[4]} name='hex-div-3' flow='1' />
                </div>
                <div className='delimiter'>
                    <img alt='delimiter' src={delimiter} />
                </div>
                <div className='flow-2 flow'>
                    <div className='flow-title'>
                        微信投保流程
                    </div>
                    <HexDiv line1={this.line1_texts[0]} line2={this.line2_texts[0]} name='hex-div-0' />
                    <ArrowDiv />
                    <HexDiv line1={this.line1_texts[2]} line2={this.line2_texts[2]} name='hex-div-1' />
                    <ArrowDiv />
                    <HexDiv line1={this.line1_texts[3]} line2={this.line2_texts[3]} name='hex-div-2' />
                    <ArrowDiv />
                    <HexDiv line1={this.line1_texts[4]} line2={this.line2_texts[4]} name='hex-div-3' flow='2' />
                </div>
            </div>
        );
    }
}


export default Flow