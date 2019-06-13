/**
 *
 * name: shop-api
 * date: 2019-06-12
 * author: cengfucheng
 * about:
 *
 */

import * as base from '@/constants/api/baseUrl';
import axios from '@/constants/api/AxiosServer';



export function shop_list(userData) {
    console.log('导入了 shop～')
    return axios.post(`${base.dem}/home`,{
        data: userData
    })
}