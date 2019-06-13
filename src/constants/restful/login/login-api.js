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
    return axios.post(`${base.dem}/home`, {
        data: userData
    })
}

export function advertise(userData) {
    // 查询广告
    return axios.post(`${base.dem}/setting/advertise`, {
        data: userData
    })
}
