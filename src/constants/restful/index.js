/**
 *
 * name: index
 * date: 2019-06-12
 * author: cengfucheng
 * about:  接口
 *
 */

// 一一对应的导入子模块的方法，暂时想到这种动态导入的方法，后期看有没有更优解。不用这样在子模块写一次，在这里写一次。
// 全部在子模块api名前加 fetch   --2019-06-12


// 不利于测试，同时继承度太高，还是单独导入吧 --2019-08-07

/**
 *
 * @type login module
 */
let login = {
    fetch_login_user(data) {
        return import('./login/login-api').then(({login_user}) => login_user(data));
    },
    fetch_advertise(data) {
        return import('./login/login-api').then(({advertise}) => advertise(data));
    },
    fetch_menuList(data) {
        return import('./login/login-api').then(({menuList}) => menuList(data));
    },
    fetch_register(data) {
        return import('./login/login-api').then(({register}) => register(data));
    },
    fetch_registerid(data) {
        return import('./login/login-api').then(({registerId}) => registerId(data));
    },
};

/**
 *
 * @type user module
 */
let user = {

};


export default {
    ...login,
    ...user
}