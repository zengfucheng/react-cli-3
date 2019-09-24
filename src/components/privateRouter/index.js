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
import store from '@/store';

export default function PrivateRouter({component: Component, ...rest}){
    // console.log(Component,'组件1')
    // console.log({...rest},'组件2')
    // 路由权限管控
    // let Component = router.component;
    console.log('查看属性',{...rest})

    return(
        <Route {...rest} render={ (props) => {
            let logins = Cookies.get('logins');
            // let oldProps = Object.assign({},{...props});
            let oldProps = {...props};
            // props = Object.assign({},{...props},{...rest});
            props = {...props,...rest};
            console.log('组件12',this,props,oldProps,store);

            if(props.login && !store.userStore.isSign) {
                // //角色权限控制, 例如：根据组件配置的 login 字符，判断需要进行权限控制不
                return <Redirect to='/login'/>
            }

            // 暂时解开登陆限制, 要启用，只需解开下面的注释
            if(props.path == '/login') {
                // console.log('跳转',props);
                return <Component {...props}/>
            }

            // isSign: (...)
            // menuIndex: (...)
            // menuList
            // const memulist = [...store.userStore.menuList];
            // for(let [ken, value] of Object.entries(memulist)) {
            //     console.log(value,123)
            // }

            // 登陆限制，和角色权限限制冲突
            // if(store.userStore.isSign && logins && props.location.pathname != '/login'){
                return <Component {...props}/>
            // }else {
            //     return <Redirect to='/login'/>
            //
            // }
        }} />
    )
}
