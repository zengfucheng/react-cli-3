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

import { Switch, Route, Link, Redirect } from 'react-router-dom';
import { Carousel } from "antd";

// import ReactSvg from 'react-svg';

import Actions from '@/actions';

import DateView from '@/components/dateView';

import store from '@/store';

import style from './index.module.less';
import MobxLoadCompoent from '@/components/mobxLoadCompoent';


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
        list: ['a','b','c','b','e','f','h','j','k','m']
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
    }

    fetchData = async () => {
        // axios.post('http://127.0.0.1:3000/home',
        //     {
        //         user: JSON.stringify({name: 'zfc', psw: 123456})
        //     })
        //     .then( data => {
        //         console.log('返回数据', data)
        //     })
        // let data = await this.$axios('http://127.0.0.1:3000/home',{
        //     method: 'POST', data: JSON.stringify({name: 'zfccc',psw: '12345678'}),
        // })

        // let data = await this.$axios('http://127.0.0.1:3000/home',{
        // let data = await this.$axios('/home',{
        //     method: 'POST',
        //     data: JSON.stringify({name: 'zfccc',psw: '12345678'}),
        //     headers: {
        //         Zfc: 15
        //     }
        // });
        // this.$axios('/home',{
        //     method: 'POST',
        //     data: JSON.stringify({name: 'zfccc',psw: '12345678'}),
        //     headers: {
        //         Zfc: 15
        //     }
        // })
        //     .then(data => {
        //         console.log('返回数据, ', data);
        //         return data;
        //     })
        //     .then(data => {
        //         console.log('二次请求', data);
        //         let rsp = this.$axios('/home',{
        //             method: 'POST',
        //             data: JSON.stringify({name: 'zfccc',psw: '12345678'}),
        //             headers: {
        //                 Zfc: 15
        //             }
        //         });
        //         return rsp;
        //     })
        //     .then(data => {
        //         console.log('二次请求返回数据, ', data);
        //         return data;
        //     })
        //     .catch(err => {
        //         console.log('返回错误',err)
        //     })


        // Promise.all([this.$axios('/home',{
        //     method: 'POST',
        //     data: JSON.stringify({name: 'zfccc',psw: '12345678'}),
        //     headers: {
        //         Zfc: 15
        //     }
        // }),this.$axios('/home',{
        //     method: 'POST',
        //     data: JSON.stringify({name: 'zfccc',psw: '12345678'}),
        //     headers: {
        //         Zfc: 15
        //     }
        // })])
        //     .then(data => {
        //         console.log('数组返回',data)
        //     })
        //     .catch(err => {
        //         console.log('返回错误',err.toJSON())
        //     })
            // .then(data => {
            //     console.log('返回数据, ', data)
            // })
        // Promise.resolve(data).then(rsp => {
        //     console.log('返回数据2, ', rsp)
        // })

        console.log('点击.');
        this.$Api.fetch_login_user(JSON.stringify({name: 'zfccc',psw: '12345678'}))
            .then(data => {
                console.log('返回数据' ,data)
            })
            .catch(err => console.log('错误',err));
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
        console.log('滚动加载', 123)
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
        },5000)
        console.log(this.state.list.length,1122)
    }

    onClickItem = (e, item, index) => {
        console.log(e ,item, index)
    }

    render() {
        let { props } = this;
        const { match } = this.props;
        let obj = {...props.userStore.user};
        let advertiseList = [...props.appStore.advertiseList];
        let appPath = props.appStore.appPath;

        let list = this.state.list;

        console.log('home属性',props)
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
                <div onClick={this.fetchData}>
                    456
                </div>
                <br/>
                <br/>
                <br/>
                <DateView/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <LoadBottom dataList={[1,2]} onLoadTop={this.onLoadChange}
                            onChange={this.onLoadChange} loading={this.state.loading} allowLoad={this.state.allowLoad}>
                    <div>
                        <ul>
                            {
                                list && list.map( (item, index) => {
                                    return (
                                        <li key={index + item} onClick={(e) => this.onClickItem(e, item, index)}>
                                            {index}、{item}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </LoadBottom>
                <Switch>
                    <Route path={`${match.path}/log`} component={MobxLoadCompoent( () => import('@/containers/log'))} date={456}/>
                </Switch>

            </div>
        )
    }
}