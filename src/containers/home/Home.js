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


export default
@inject('appStore')
@inject('userStore')
@observer
class HomePage extends Component{

    // constructor(props) {
    //     super(props)
    // }

    componentDidMount() {
        // console.log(this.props,' stroe数据')
        // console.log('查看组件 ',this)
        // console.log('路由数据',this.props.match.params)
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

        console.log('点击');
        this.$Api.fetch_login_user(JSON.stringify({name: 'zfccc',psw: '12345678'}))
            .then(data => {
                console.log('返回数据' ,data)
            })
            .catch(err => console.log('错误',err));
    }

    render() {
        let { props } = this;
        const { match } = this.props;
        let obj = {...props.userStore.user};
        let advertiseList = [...props.appStore.advertiseList];
        let appPath = props.appStore.appPath;
        return (
            <div className={`${style['home-box']}`}>
                <div style={{width: '5rem'}}>
                    {/*<Carousel autoplay className={`${style['adertise-box']} zfc`}>*/}
                    {/*    { advertiseList && advertiseList.map( (item, index) => {*/}
                    {/*        return (*/}
                    {/*            <div key={index+'ad'}>*/}
                    {/*                <img src={appPath+item}/>*/}
                    {/*            </div>*/}
                    {/*        )*/}
                    {/*    })}*/}
                    {/*</Carousel>*/}
                </div>

                home page
                {this.props.userStore.user.userNo}
                <div onClick={this.fetchData}>
                    456
                </div>
                <br/>
                <br/>
                <br/>
                <DateView date={123}/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Switch>
                    <Route path={`${match.path}/log`} component={MobxLoadCompoent( () => import('@/containers/log'))} date={456}/>
                </Switch>

            </div>
        )
    }
}