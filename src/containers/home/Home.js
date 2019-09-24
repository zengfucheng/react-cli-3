/**
 *
 * name: Home
 * date: 2019-05-09
 * author: cengfucheng
 * about: home page
 *
 */

import React, { Component, PureComponent } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import propTypes from 'prop-types';         // 属性类型监控

import { Switch, Route, Link, Redirect, Router } from 'react-router-dom';
import {Carousel, List, Avatar, Icon, Layout} from "antd";

// import ReactSvg from 'react-svg';

import Actions from '@/actions';

import DateView from '@/components/dateView';
import Tabs from '@/components/tabs/Tabs';
import { login_user } from 'Restful/login/login-api';

import store from '@/store';

import style from './index.module.less';
import MobxLoadCompoent from '@/components/mobxLoadCompoent';
import IconText from '@/components/iconText';


// mobx 实现
import { observer, inject} from "mobx-react";

// export default @connect(mapState, mapPropsEvent) class HomePage extends Component{
//     constructor(props) {
//         super(props)
//     }
//
//     static propTypes = {
//         username: propTypes.string,
//     }
//
//
//     componentDidMount() {
//         // const { store } = this.context;
//     }
//
//     onLogin = (data) => {
//
//         this.props.action.LoginByUsername('zfc','123','login');
//         store.getState().userReducer.username = 'lz';
//         console.log(store.getState(),1234);
//         this.props.history.push('about');
//         console.log(this.props.history,1234)
//     }
//
//     render() {
//         let props = this.props
//         let { username } = store.getState().userReducer
//         return (
//             <div onClick={this.onLogin}>
//                 <span>:{props.username}</span>
//                 <span>:{username}</span>
//                 home
//                 <DateView date={123}/>
//                 <main>
//                     {/*<Route exact path='/home' component={Login}/>*/}
//                 </main>
//             </div>
//         )
//     }
// }
//
// function mapState(state) {
//     return {
//         username: state.userReducer.username
//     }
// }
//
// function mapPropsEvent(dispatch) {
//     return {
//         action: bindActionCreators(Actions, dispatch)
//     }
// }
// // export default connect(mapState, mapPropsEvent)(HomePage);

// 148.70.42.97

import LoadBottom from '@/components/loadBottom';
import Errorsvg from '@/assets/404.svg';

export default
@inject('appStore')
@inject('userStore')
@observer
class HomePage extends Component{

    constructor(props) {
        super(props)
        this.HomeBox = React.createRef();
    }

    state = {
        loading: false,
        loader: null,
        allowLoad: false,
        // list: ['a','b','c','b','e','f','h','j','k','m']
        list: [
            {
                title: 'next a',
                avatar: 'images/avatars-man.png',
                codeNo: 'a12',
                content: '我的你的阿大',
                description: '我的你的阿大我的你的阿大我的你的阿大',
                collectionstatus: '0',          // 未收藏
                thumbstatus: '0',               // 未点赞
                collectionNm: '5',              // 收藏数
                thumbUpNm: '2',                 // 点赞数
                commentNm: '1',                 // 评论数
            },
            {
                title: 'next b',
                avatar: 'images/avatars-man.png',
                codeNo: 'b07',
                content: '我的你的阿大',
                description: '我的你的阿大我的你的阿大我的你的阿大',
                collectionstatus: '0',          // 未收藏
                thumbstatus: '0',               // 未点赞
                collectionNm: '15',              // 收藏数
                thumbUpNm: '2',                 // 点赞数
                commentNm: '1',                 // 评论数
            },
            {
                title: 'next c',
                avatar: 'images/avatars-man.png',
                codeNo: 'c8234',
                content: '我的你的阿大',
                description: '我的你的阿大我的你的阿大我的你的阿大',
                collectionstatus: '0',          // 未收藏
                thumbstatus: '0',               // 未点赞
                collectionNm: '95',              // 收藏数
                thumbUpNm: '2',                 // 点赞数
                commentNm: '1',                 // 评论数
            }
        ]
    }

    // static HomeBox = Symbol('homebox');
    static HomeBox = Symbol('homebox');

    componentDidMount() {
        console.log('svg文件样式',Errorsvg)
        // console.log(this.props,' stroe数据')
        // console.log('查看组件 ',this)
        // console.log('路由数据',this.props.match.params)
        // window.addEventListener('scroll', this.onHomeScroll, false)
    }

    componentWillUnmount() {
        // window.removeEventListener('scroll', this.onHomeScroll, false);
        const { props } = this;
        const { history } = props;
        console.log('离开了', history)
    }


    fetchData = async () => {
        console.log('点击.');
        // this.$Api.fetch_login_user(JSON.stringify({name: 'zfccc',psw: '12345678'}))
        try {
            const data = await login_user(JSON.stringify({username: 'zeng0613',password: '123456'}))
            console.log('返回数据' ,data)
            // this.props.appStore.names = data.result[0].user;
        }catch(err) {
            console.log('错误',err)
        }

    }

    onHomeScroll = (e) => {
        console.log(e,'滑动')
        // console.log(this.refs.HomeBox)
        console.log(this.HomeBox)
    }

    onLoadChange = (e) => {
        if(this.state.loading) return;
        this.setState({
            loading: true
        })

        let str = 'qwertyuiopasdfghjklzxcvbnm';
        let step = 5;
        let arr = [...this.state.list];
        for(let i = 0; i < step; i++) {
            arr.push(str[Math.floor(Math.random() * str.length)])
        }
        // this.setState({
        //     list: [...arr]
        // })
        console.log('滚动加载', 123);
        setTimeout(() => {
            this.setState({
                loading: false,
                list: [...arr]
            })
            if(this.state.list.length > 15) {
                this.setState({
                    allowLoad: true
                })
            }
        },5000);
        console.log(this.state.list.length,1122)
    }

    onClickItem = (e, item, index) => {
        const { history } = this.props;
        console.log(e ,item, index);
        history.push({pathname: `/editGoods/:${item}`});
    }


    onCollection = (e, item, index) => {
        // console.log(e, item, index);
        let list = this.state.list;
        let num = ~~item.collectionNm;
        item.collectionNm = num + 1 + '';
        if(item.collectionstatus == 0 ){
            item.collectionstatus = 1;
        } else {
            item.collectionstatus = 0;
        }
        // this.state.list.splice(index,1,item);
        // this.setState({
        //     list: list
        // }, () => {
        //     console.log( this.state.list,123)
        // })
        console.log( this.state.list,123);
        this.setState({
            loading: false
        })
        // this.setState( state => {
        //     list: state.list.map( (key, i) => {
        //             if(i == index) {
        //                 return {
        //                     ...key,
        //                     ...item
        //                 }
        //             }
        //             return key;
        //         });
        // });

    }
    onThumb = (e, item, index) => {
        console.log(e, item, index)
    }
    onComment = (e, item, index) => {
        console.log(e, item, index,1)
    }


    render() {
        let { props } = this;
        const { match } = this.props;
        let obj = {...props.userStore.user};
        let advertiseList = [...props.appStore.advertiseList];
        let appPath = props.appStore.appPath;

        {/*全部信息，技术杂谈，奇闻逸事*/}
        const Paglist = [
            {
                text: '全部信息'
            },
            {
                text: '技术杂谈'
            },
            {
                text: '奇闻逸事'
            }
        ]
        const PagPagi = {
            全部信息: {

            },
            技术杂谈: {

            },
            奇闻逸事: {

            }
        }


        console.log('查看菜单123', props.userStore.menuList)
        let list = this.state.list;
        // console.log('home属性',props)
        return (
            <div className={`${style['home-box']}`} ref={this.HomeBox}>
                <div className={style.homeHead }>
                    <div className={style.homeHeadLeft}>
                        {/*<Carousel autoplay className={`${style['adertise-box']} zfc`}>*/}
                        {/*    { advertiseList && advertiseList.map( (item, index) => {*/}
                        {/*        return (*/}
                        {/*            <div key={index+'ad'} >*/}
                        {/*                <img src={appPath+item} style={{height: '20%'}}/>*/}
                        {/*            </div>*/}
                        {/*        )*/}
                        {/*    })}*/}
                        {/*</Carousel>*/}
                    </div>

                    <div className={style.homeHeadRight}>
                        {/*<h3>热门动态</h3>*/}
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                        </ul>
                    </div>
                </div>

                home page
                {props.userStore.user.userNo}
                <div className='adclick' onClick={this.fetchData}>
                    {props.appStore.names ? props.appStore.names : '未登录'}
                </div>
                <br/>
                <br/>
                <br/>
                <DateView/>
                {/*<LoadBottom dataList={[1,2]} onLoadTop={this.onLoadChange}*/}
                {/*            onChange={this.onLoadChange} loading={this.state.loading} allowLoad={this.state.allowLoad}>*/}
                {/*    <div>*/}
                {/*        <ul>*/}
                {/*            {*/}
                {/*                // list && list.map( (item, index) => {*/}
                {/*                //     return (*/}
                {/*                //         <li key={index + item} onClick={(e) => this.onClickItem(e, item, index)}>*/}
                {/*                //             {index}、{item}*/}
                {/*                //         </li>*/}
                {/*                //     )*/}
                {/*                // })*/}
                {/*                list && list.map( (item, index) => {*/}
                {/*                    return (*/}
                {/*                        <Link key={index + item} to={`/editGoods/:${item}`}>*/}
                {/*                            <li>*/}
                {/*                                {index}、{item}*/}
                {/*                            </li>*/}
                {/*                        </Link>*/}
                {/*                    )*/}
                {/*                })*/}
                {/*            }*/}
                {/*        </ul>*/}
                {/*    </div>*/}
                {/*</LoadBottom>*/}
                {/*<List itemLayout='horizontal' dataSource={this.state.list}*/}
                {/*    renderItem={item => (*/}
                {/*        <Link to={`/editGoods/:${item.codeNo}`}>*/}
                {/*            <List.Item>*/}
                {/*                <List.Item.Meta*/}
                {/*                    avatar={<Avatar src={item.avatar}/>}*/}
                {/*                    title={item.title}*/}
                {/*                    description='1234'*/}
                {/*                />*/}
                {/*            </List.Item>*/}
                {/*        </Link>*/}
                {/*    )}>*/}

                {/*</List>*/}

                <Tabs list={Paglist} ListData={PagPagi}/>

                <List itemLayout="vertical"
                      size="large"
                      dataSource={this.state.list}
                      footer={
                          <p>
                              未来由你创造
                          </p>
                      }
                      renderItem={(item, index) => (
                              <List.Item key={item.title}
                                         extra={
                                                 <Link to={`/editGoods/:${item.codeNo}`}>
                                                     <img src='images/zfc.jpg' style={{width: 200}}/>
                                                 </Link>
                                         }
                                    actions={[
                                        <IconText type={item.collectionstatus ? 'star-o' : 'like-o'} text={item.collectionNm} key="list-vertical-star-o" onBtnClick= {(e) => {this.onCollection(e,item, index)}} />,
                                        <IconText type="like-o" text={item.thumbUpNm} key="list-vertical-like-o" onBtnClick= {(e) => {this.onThumb(e,item, index)}} />,
                                        <IconText type="message" text={item.commentNm} key="list-vertical-message" onBtnClick= {(e) => {this.onComment(e,item, index)}} />,
                                    ]}>
                                          <Link to={`/editGoods/:${item.codeNo}`}>
                                              <List.Item.Meta
                                                  avatar={<Avatar src={item.avatar}/>}
                                                  title={item.title}
                                                  description={item.description}
                                              />
                                            {item.content}
                                          </Link>
                              </List.Item>

                      )}>

                </List>


                {/*<Switch>*/}
                {/*    <Route path={`${match.path}/log`} component={MobxLoadCompoent( () => import('@/containers/log'))} date={456}/>*/}
                {/*</Switch>*/}
            </div>
        )
    }
}