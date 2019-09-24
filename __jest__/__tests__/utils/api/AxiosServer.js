/**
 *
 * name: AxiosServer
 * date: 2018-12-11
 * author: cengfucheng
 * about: 轻便型请求接口
 *
 */

import axios from 'axios';
import store from '@/store/';

// const CancelToken = axios.CancelToken;

// if(process.env.NODE_ENV == 'development') {
//
//     axios.defaults.baseURL = 'http://148.70.42.97:80'
// }

const Axios = axios.create({ timeout: 15000 });

Axios.interceptors.request.use(
    config => {
        store.userStore.user.userNo = 'lz shi shabi';
        if(config.data && typeof config.data != 'string') {
            config.data = JSON.stringify(config.data);
        }


        let method = config.method.toLowerCase();
        if (method === 'get' || method === 'head') {
            if (config.data) {
                config.params = config.data;
                config.maxContentLength = 147483648;
                delete config.data
            }
        } else {
            if (config.data) {
                // config.data = config.data;
                config.maxContentLength = 2147483648;
            }
        }
        config.headers = {
            ...config.headers,
            // 'Content-Type': 'application/x-www-form-urlencoded',
            // 'Accept-Encoding': 'gzip,deflate',
            'Content-Type': 'application/json'
        }
        return config;
    },
    error => {
        console.log('请求错误：', error.response);
        return Promise.reject(error);
    }
);
Axios.interceptors.response.use(
    config => {
        let data = Promise.resolve(config);
        // console.log('请求结果：',Promise.resolve(config), '类型 ', typeof data);
        // return Promise.resolve(config);
        return Promise.resolve(config.data);
    },
    error => {
        console.log('请求结果错误：', error.toJSON());
        return Promise.reject(error);
    }
);

export default Axios;
