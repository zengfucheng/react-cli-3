/**
 *
 * name: index
 * date: 2019-05-30
 * author: cengfucheng
 * about:
 *
 */

import React, { Component } from 'react';
import { Layout, Form, Input, Icon, Tooltip, Cascader, Select, Row, Col, Button} from "antd";

const { Option } = Select;
const regFirstNum = /^[A-Za-z]{1}/g;       // 首字母校验
const regSf = /^[^\s]*$/g;                  // 不匹配空格
const regNum = /^[A-Za-z0-9\-\_]*$/g;
const regIsEn = /^[^\u4e00-\u9fa5]*$/;

const regUser = /^([A-Za-z]{1}[^\s\u4e00-\u9fa5][A-Za-z0-9\-\_]{6,16})$/;       // 账号校验，首字母+不能有空格+不能有汉字+字母和数字下划线等组成

export default
@Form.create({name: 'register_page'})
class Register extends Component{
    constructor(props) {
        super(props);
        console.log('register',props);

        this.state.userRule = this.onRegToyoung(regUser);
    }

    state = {
        userNumMin: 8,          // 账号最小位
        userNumMax: 18,         // 账号最大位
        userOk: false,          // 用户名是否可以用
        userStatus: '',

        userRule: {},           // 用户名校验
        // firstLetterRule: {},    // 首字母检验
        // spacesRule: {},         // 空格校验

    }

    onRegToyoung = (reg) => {
        return function (value, err = '') {
            return new Promise( (resolve, reject) => {
                let data = value.match(reg);
                if(!data) return reject(err);
                return resolve(data);
            });
        }
    }

    obSubmitClick = (e) => {
        e.preventDefault();
        const rm = this;
        const { props } = rm;
        console.log(rm)
        const { validateFields, setFields } = rm.props.form;
        validateFields( async (err, values) => {
            if(err) {
                console.log(err);
                return err;
            };
            try {
                const rsp = await rm.$Api.fetch_register(JSON.stringify(values));
                console.log('注册结果',rsp)
                if(rsp.errorcode == 'EO1234') return;
                props.history.push('/login');

            }catch (e) {
                console.log(e);
            }


            console.log(values);

        });

    }

    usernameRule = async (rule, value, callback) => {
        // 账户规则
        if(!value) {
            this.setState({
                userOk: true,
                userStatus: 'error'
            });
            return callback('请输入你的账号')
        };
        const rm = this;
        const { userRule } = rm.state;
        // const { setFields } = this.props.form;
        try {
            await userRule(value, '用户名不符合规则');
            const rspData = await rm.$Api.fetch_registerid(JSON.stringify({username: value}));
            if(rspData.errorcode != 'SC0000') {
                throw new Error(rspData.msg);
            }
            this.setState({
                userOk: true,
                userStatus: 'success'
            });
            // setFields({
            //     username: {
            //         value,
            //     }
            // });
            return callback(rspData.msg);
        }catch (err) {
            this.setState({
                userOk: true,
                userStatus: 'error'
            });
            // setFields({
            //     username: {
            //         value,
            //         errors: ['error']
            //     }
            // });
            return callback(err);
        }

        // if(!value.match(regFirstNum)) {
        //     this.setState({
        //         userStatus: 'error'
        //     });
        //     return callback('首字必须为字母');
        // }
        // if(!value.match(regSf)) return callback('账号不能有空格');
        // if(!value.match(regNum)) return callback('账号不符合规范');

        // const len = value.length;
        // let state = this.state;
        // if(len < state.userNumMin || len > state.userNumMax) {
        //     return callback('账号位数不符合规范');
        // }
        // if(this.state.userOk) {
        //     this.setState({
        //         userOk: false
        //     })
        // }
        return callback();
    }

    passwordRule = (rule, value, callback) => {
        // 密码规则
        if(!value) return callback();
        if(!value.match(regIsEn)) return callback('密码不能有汉字');
        return callback();
    }

    comfirmRule = (rule, value, callback) => {
        // 确认密码规则
        if(!value) return callback();
        let { getFieldValue } = this.props.form;
        let psw = getFieldValue('password');
        if(value != psw) return callback('二次密码不一致');
        return callback();
    }

    phoneRule = (rule, value, callback) => {
        // 手机校验规则
        if(!value) return callback();
        if(value.length != 11) return callback('不合法的手机号');
        return callback();
    }

    render() {
        const state = this.state;
        const { getFieldDecorator } = this.props.form;
        const userWarn = `账号由${state.userNumMin}-${state.userNumMax}位大小写字母和数字以及横线，下划线组成，且首位必须为字母。`;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: 86
        })(
            <Select style={{width: 70}}>
                <Option value='86'>+86</Option>
                <Option value='87'>+87</Option>
            </Select>
        );
        return (
            //<div>
            <Layout style={{display: "block",height: '100%'}}>
                    <Form {...formItemLayout} onSubmit={this.obSubmitClick} style={{marginTop: 100}}>
                        {/*<Form.Item label='username' extra={userWarn} hasFeedback={state.userOk} validateStatus={state.userStatus}>*/}
                        <Form.Item label='username' extra={userWarn} hasFeedback validateStatus={state.userStatus}>
                            {
                                getFieldDecorator('username', {
                                    // initialValue: '请输入你的账号',

                                    // 采用配置方式，缺点：页面结果代码太长，有碍观瞻。还是采用自定义方法来校验
                                    rules: [
                                        {
                                            validator: this.usernameRule
                                        }
                                    ],
                                    // rules: [
                                    //     {
                                    //         required: true,
                                    //         message: 'please input your name',
                                    //         validator(rule, value, cb) {
                                    //             if(!value) {
                                    //                 state.userStatus = 'error';
                                    //                 return cb(rule.message);
                                    //             }
                                    //             return cb();
                                    //         }
                                    //     },
                                    //     {
                                    //         pattern: regUser,
                                    //         message: '用户名不符合规则',
                                    //         validator(rule, value, cb) {
                                    //             if(!value.match(rule.pattern)) {
                                    //                 state.userStatus = 'error';
                                    //                 return cb(rule.message);
                                    //             }
                                    //             return cb();
                                    //         }
                                    //     },
                                    //     {
                                    //         validator: this.usernameRule
                                    //     }
                                    // ],
                                    validateFirst: true,                // 前条规则不通过，后面的就不再校验
                                    validateTrigger: 'onBlur'           // 校验的时机, 默认为 onChange
                                })(<Input placeholder='请输入你的账号' />)
                            }
                        </Form.Item>
                        {/*<Form.Item label='Password' hasFeedback>*/}
                        <Form.Item label='Password'>
                            {
                                getFieldDecorator('password',  {
                                    rules: [
                                        {
                                            required: true,
                                            message: 'please input your password'
                                        },
                                        {
                                            validator: this.passwordRule
                                        }
                                    ]
                                })(<Input.Password />)
                            }
                        </Form.Item>
                        {/*<Form.Item label='Comfirm Password' hasFeedback>*/}
                        <Form.Item label='Comfirm Password'>
                            {
                                getFieldDecorator('confirm', {
                                    rules: [
                                        {
                                            required: true,
                                            message: 'please comfirm your password'
                                        },
                                        {
                                            validator: this.comfirmRule
                                        }
                                    ]
                                })(<Input.Password/>)
                            }
                        </Form.Item>
                        <Form.Item label='E-mail'>
                            {
                                getFieldDecorator('email', {
                                    rules: [
                                        {
                                            type: 'email',
                                            message: 'The input is not valid E-mail!'
                                        },
                                        {
                                            required: true,
                                            message: 'please input your email'
                                        }
                                    ]
                                })(<Input />)
                            }
                        </Form.Item>
                        <Form.Item label='Phone Number'>
                            {
                                getFieldDecorator('phone', {
                                    rules: [
                                        {
                                            required: true,
                                            message: 'please input your phone number'
                                        },
                                        {
                                            validator: this.phoneRule
                                        }
                                    ]
                                })(<Input addonBefore={prefixSelector} style={{width: '100%'}} />)
                            }
                        </Form.Item>
                        <Form.Item label='Captcha'>
                            <Row gutter={8}>
                                <Col span={8}>
                                    {
                                        getFieldDecorator('captcha', {
                                            rules: [
                                                {
                                                    required: true,
                                                    message: 'please input your captcha'
                                                }
                                            ]
                                        })(<Input/>)
                                    }
                                </Col>
                                <Col span={8}>
                                    <Button>Get captcha</Button>
                                </Col>
                            </Row>
                        </Form.Item>
                        <Form.Item {...tailFormItemLayout}>
                            <Button type='primary' htmlType='submit'>
                                Register
                            </Button>
                        </Form.Item>
                    </Form>
            </Layout>
            // </div>
        )
    }
}