/**
 *
 * name: index
 * date: 2019-06-12
 * author: cengfucheng
 * about:  接口
 *
 */

// 一一对应的导入子模块的方法，暂时想到这种动态导入的方法，后期看有没有更优解。不用这样在子模块写一次，在这里写一次。
// 全部在子模块api名前加 fetch

/**
 *
 * @type login module
 */
const login = {
    fetch_login_user(data) {
        return import('./login/login-api').then(({login_user}) => login_user(data))
    },
    fetch_advertise(data) {
        return import('./login/login-api').then(({advertise}) => advertise(data))
    },
}

/**
 *
 * @type user module
 */
const user = {

}


export default {
    ...login,
    ...user
}