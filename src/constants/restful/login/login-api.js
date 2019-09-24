/**
 *
 * name: login-api
 * date: 2019-06-12
 * author: cengfucheng
 * about:
 *
 */
import * as base from '@/constants/api/baseUrl';
import axios from '@/constants/api/AxiosServer';

export function login_user(userData) {
    // login
    return axios.post(`${base.dem}/login/login`, {
        data: userData
    })
}

export function register(userData) {
    return axios.post(`${base.dem}/login/register`, {
        data: userData
    })
}

export function registerId(data) {
    return axios.post(`${base.dem}/login/registerid`, {
        data
    })
}

export function advertise(userData) {
    // 查询广告
    return axios.post(`${base.dem}/setting/advertise`, {
        data: userData
    })
}

export function menuList(userData) {
    // 查询菜单
    console.log('开始菜单')
    return axios.post(`${base.dem}/setting/menu`, {
        data: userData
    })
}
