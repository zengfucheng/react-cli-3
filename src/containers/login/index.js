/**
 *
 * name: index
 * date: 2019-05-19
 * author: cengfucheng
 * about: login
 *
 */

// import './index.module.less';
import style from './index.module.less';
import React, { Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Cookies from 'js-cookie';

import { Link } from "react-router-dom";
import { Form, Icon, Input, Button, Checkbox } from 'antd'


import { inject, observer} from "mobx-react";


export default
@inject('userStore')
@inject('appStore')
@observer
@Form.create({ name: 'normal_login' })
class LoginPage extends Component{
    constructor(props) {
        super(props);
        this.props.userStore.isSign = false;     // 状态登陆判断

    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        // console.log(nextProps,123321);
        // let { history, location } = nextProps;
        // console.log(nextProps.history.action ,nextProps.history.location, nextProps.location ,1233)
        // if(history.action == 'PUSH' && history.location.pathname == '/') {
        //     history.push('/about');
        // }
        return true;
    }

    onLoginSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('form: ', values);
                this.$Api.fetch_login_user(values)
                    .then(data => {
                        console.log('返回数据' ,data);
                        this.props.userStore.onSignUp(data);
                        this.props.userStore.isSign = true;     // 状态登陆判断
                        Cookies.set('logins','zfc');
                        this.props.userStore.menuIndex = 0;
                        this.props.history.push('/');
                    })
                    .catch(err => console.log('错误',err));
                // fetch('http://127.0.0.1:3000/setting/advertise',{
                //     method: 'POST',
                //     body: JSON.stringify(values),
                //     headers: {
                //         'Content-Type': 'application/json'
                //     },
                //     credentials: 'include'
                // })
                //     .then(res => {
                //         return res.json();
                //     })
                //     .then(data => {
                //         data = JSON.parse(JSON.stringify(data).replace(/\|/g,'/'));
                //         console.log(data);
                //         this.props.appStore.advertiseList = [...data.url];
                //     })
                //     .catch(err => console.log(err));
                // fetch('http://127.0.0.1:3000/login',{
                //     method: 'POST',
                //     body: JSON.stringify(values),
                //     headers: {
                //         'Content-Type': 'application/json'
                //     },
                // })
                //     .then( res => {
                //         return res.json();
                //     })
                //     .then( data => {
                //         console.log(data,123);
                //         this.props.userStore.onSignUp(data);
                //         this.props.userStore.isSign = true;     // 状态登陆判断
                //         Cookies.set('logins','zfc');
                //         this.props.history.push('/');
                //     })
                //     .catch( err => {
                //         console.log(err)
                //     })
                // console.log(this.props,111);
            }
        });
    }

    render() {

        let bgColor = {
            color: 'red',
        }

        const { getFieldDecorator } = this.props.form;
        // console.log(style['login-form'],11223311)
        return (
            <div style={bgColor} className={`${style.login} ${style.zfc}`}>
                <div className={`${style['login-content']}`}>
                    <Form onSubmit={this.onLoginSubmit} className={`${style['login-form']}`}>
                        <Form.Item>
                            {getFieldDecorator('username', {
                                rules: [
                                    {
                                        required: true,
                                        message: '请输入您的账号名'
                                    }]
                            })(
                                <Input prefix={<Icon type='user' style={{color: 'rgba(1,1,1,1)'}} />}
                                       placeholder='账号'
                                />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [
                                    {
                                        required: true,
                                        message: '请输入您的密码'
                                    }
                                ]
                            })(
                                <Input prefix={<Icon type='lock' style={{color: 'rgba(1,1,1,1)'}}/>}
                                       type='password'
                                       placeholder='请输入密码'
                                />
                            )}
                        </Form.Item>
                        <Form.Item>
                            <p>
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(<Checkbox>记住账号</Checkbox>)}
                                <Link style={{float: 'right'}} to='/login'>忘记密码</Link>
                            </p>
                            <Button style={{width:'100%'}} type="primary" htmlType="submit">sign up</Button>
                            <p>
                                <Link to='/register'>注册</Link>
                                {/*<a href='/register'>注册</a>*/}
                            </p>
                        </Form.Item>

                    </Form>
                </div>
            </div>
        )
    }
}



// export default
// @Form.create({ name: 'normal_login' })
// @connect(mapPropsState, mapPropsDispatch)
// class LoginPage extends Component{
//     constructor(props) {
//         super(props)
//     }
//
//     render() {
//         const { getFieldDecorator } = this.props.form;
//         return (
//             <Form>
//                 <Form.Item>
//                     {getFieldDecorator('username', {
//                         rules: [
//                             {
//                                 requestId: true,
//                                 message: '请输入您的账号名'
//                             }]
//                     })(
//                         <Input prefix={<Icon type='user' style={{color: 'rgba(1,1,1,1)'}} />}
//                                placeholder='账号'
//                         />
//                     )}
//                 </Form.Item>
//             </Form>
//         )
//     }
// }
//
// function mapPropsState(state) {
//     return {
//         // state: xx.xx
//     }
// }
//
// function mapPropsDispatch(dispatch) {
//     return {
//         // action: bindActionCreators(Actions, dispatch)
//     }
// }

// 没用装饰器的时候～～～用了装饰器，就不在这么傻了～
// const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(LoginPage);
// export default connect(mapPropsState, mapPropsDispatch)(WrappedNormalLoginForm);

// export default connect(mapPropsState, mapPropsDispatch)(LoginPage);