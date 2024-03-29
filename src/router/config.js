/**
 *
 * name: config
 * date: 2019-05-19
 * author: cengfucheng
 * about:
 *
 */


import React from 'react';
// import AsyncComponent from '@/components/asyncComponent';
import MobxLoadCompoent from '@/components/mobxLoadCompoent';
// const importCompoent = filesPath => AsyncComponent(() => import(`${viewPath}${filesPath}`));
// const importCompoent = filesPath => MobxLoadCompoent(() => import(`@/containers/${filesPath}`));
const importCompoent = filesPath => MobxLoadCompoent(() => import('@/containers/'+filesPath));

export const layoutComponent = [

    // {
    //     path: '/home/:id',
    //     name: 'home',
    //     // exact: true,
    //     component: importCompoent('home/Home')
    // },
    {
        path: '/home',
        name: 'home',
        // exact: true,
        component: importCompoent('home/Home')
    },
    {
        path: '/about',
        name: 'about',
        login: true,            // 是否需要登录
        exact: true,
        component: importCompoent('about')
    },
    {
        path: '/editGoods/:id',
        name: 'editGoods',
        exact: true,
        component: importCompoent('editGoods')
    },
    // {
    //     path: '/',
    //     name: 'home',
    //     exact: true,
    //     component: importCompoent('home/Home')
    // },
];

export const noLayoutComponent = [
    // 不含layout结构，也就是，不包含在app页面内。和app页面平级
    {
        path: '/login',
        name: 'login',
        exact: true,
        component: importCompoent('login')
    },
    {
        path: '/register',
        name: 'register',
        exact: true,
        component: importCompoent('register/register')
    },
    {
        path: '/404',
        name: '404',
        exact: true,
        component: importCompoent('error')
    },
];