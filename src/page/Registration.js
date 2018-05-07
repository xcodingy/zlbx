import React, { Component } from 'react';


class Registration extends Component {
    render() {
        return (
            <div id='content'>
                <div class='reg-header'>

                </div>
                <div class='reg-content'>
                    <div>
                        <div>
                            <p>保险公司类型</p>
                            <input type='radio' name='company-type' value='0' />参展商
                            <input type='radio' name='company-type' value='1' />搭建商
                        </div>
                        <div>
                            <p>保险公司全称（发票抬头）</p>
                            <input type='text' name='company' id='sign-company' />
                        </div>
                        <div>
                            <p>投保公司统一社会信用代码</p>
                            <input type='text' name='company-ssn' id='sign-company-ssn' />
                        </div>
                        <div>
                            <p>投保人地址（邮寄地址）</p>
                            <input type='text' name='address' id='sign-address' />
                        </div>
                        <div>
                            <p>投保公司联系人</p>
                            <input type='text' name='contact' id='sign-contact' />
                        </div>
                        <div>
                            <p>投保公司联系人手机</p>
                            <input type='text' name='cellphone' id='sign-cellphone' />
                        </div>
                        <div>
                            <p>投保公司联系人E-mail</p>
                            <input type='email' name='email' id='sign-email' />
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>用户名</p>
                            <input type='text' name='uname' id='sign-uname' />
                        </div>
                        <div>
                            <p>密码</p>
                            <input type='password' name='passwd' id='sign-uname' />
                        </div>
                        <div>
                            <p>重复密码</p>
                            <input type='password' name='re-passwd' id='re-passwd' />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Registration;