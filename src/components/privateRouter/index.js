/**
 *
 * name: index
 * date: 2019-05-23
 * author: cengfucheng
 * about: 路由组件
 *
 */

import React,{ Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function PrivateRouter({component: Component, ...rest}){
    // console.log(Component,'组件1')
    // console.log({...rest},'组件2')
    // 路由权限管控
    // let Component = router.component;
    return(
        <Route {...rest} render={ (props) => {
            let logins = Cookies.get('logins');
            let oldProps = Object.assign({},{...props});
            props = Object.assign({},{...props},{...rest});
            // console.log('组件12',props,oldProps);

            // 暂时解开登陆限制, 要启用，只需解开下面的注释
            // if(props.path == '/login') {
            //     // console.log('跳转',props);
            //     return <Component {...props}/>
            // }
            // if(props.userStore.isSign && logins && props.location.pathname != '/login'){
                return <Component {...props}/>
            // }else {
            //     return <Redirect to='/login'/>
            //
            // }
        }} />
    )
}
