/**
 *
 * name: index
 * date: 2019-05-09
 * author: cengfucheng
 * about: home page
 *
 */

import React, { Component, PureComponent } from 'react';
import {Link} from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import propTypes from 'prop-types';         // 属性类型监控

// import ReactSvg from 'react-svg';

import Actions from '@/actions';

import DateView from '@/components/dateView';

import store from '@/store';
import {inject, observer} from "mobx-react";



// mobx 实现
export default
@inject('appStore')
@observer
class AboutPage extends Component{
    constructor(props) {
        super(props)
        // console.log(this);
    }
    componentDidMount() {
        // const { store } = this.context;
        // console.log(store,this.context,1111)
    }

    onLogin = (data) => {
        // this.props.history.push('home');
        // this.props.history.goBack();
    }

    render() {
        let props = this.props
        // let { username } = store.getState().userReducer
        return (
            <div onClick={this.onLogin}>
                about
                <Link to={'/home/1'}>
                    home
                </Link>
                <Link to={'/home/log'}>
                    log
                </Link>
                {/*<img src='static/images/zfc.jpg'/>*/}
            </div>
        )
    }
}

// redux 实现
// class AboutPage extends Component{
//     constructor(props) {
//         super(props)
//         // console.log(this);
//     }
//     componentDidMount() {
//         // const { store } = this.context;
//         // console.log(store,this.context,1111)
//     }
//
//     onLogin = (data) => {
//         this.props.history.push('home');
//         // this.props.history.goBack();
//     }
//
//     render() {
//         let props = this.props
//         let { username } = store.getState().userReducer
//         return (
//             <div onClick={this.onLogin}>
//                 about
//                 {/*<img src='static/images/zfc.jpg'/>*/}
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
// export default connect(mapState, mapPropsEvent)(AboutPage);