/**
 *
 * name: index
 * date: 2019-05-09
 * author: cengfucheng
 * about:  store
 *
 */

// redux 的实现
// import { createStore } from "redux";
// import { composeWithDevTools } from 'redux-devtools-extension';     // devtool组件，检测store的状态变更情况
//
// import rootReducer from '../reducers';
// export default createStore(rootReducer,composeWithDevTools());

// mobx 的实现
import appStore from './appStore';
import userStore from './userStore';

const store = {
    appStore,
    userStore
}
export default store;
// const store = {
//     appStore: {
//         get() {
//         }
//     },
//     userStore
// }
// let app = () => import('./appStore.js')
//     .then( ({default: modules}) => {
//
//         console.log(modules,'加载库')
//     })
// app()
// import appStore from './appStore';
// import userStore from './userStore';
//

// import appStore1 from './appStore';
// function load(url) {
//     return new Promise( (resolve => {
//         console.log('模块路径',url)
//         import(`${url}`)
//             .then( ({default: modules}) => {
//                 resolve(modules);
//                 // console.log('数据查看： ',modules)
//                 return;
//             })
//     }))
// }
// load('./appStore.js')
//
// async function abs(url) {
//     let data = await load(url);
//     console.log('数据查看： ',data)
//     return data;
// }
// async function abs(url) {
//     let data = await load(url);
//     return data;
// }


// Promise.resolve((() => import('./appStore.js'))()).then( ({default: modules}) => {
//     console.log('数据库查看z',modules);
//     return modules;
// })
// console.log('数据查看h',(() => import('./appStore.js'))())
    // console.log('数据库查看',Promise.resolve(() => import('./appStore.js')).then( ({default: modules}) => modules))
// let _appStore = abs('./appStore');
// let _userStore = abs('./userStore');
// setTimeout( () => {
//     console.log((() => import('./appStore.js'))())
//     console.log('二次查看',_appStore.then( data => data),_userStore.then( data => data))
// },1000)
// const store = {
    // appStore: _appStore,
    // appStore: import('./appStore.js'),
    // appStore: import(`${app}`).then( ({default: modules}) => {
    //     console.log('查看模块',modules)
    //     return modules;
    // }),
    // userStore: import('./userStore.js').then( ({default: modules}) => {
    //     console.log('查看模块',modules)
    //     return modules;
    // }),
    // userStore: _userStore,
    // userStore: import('./userStore.js'),
// }
// console.log(store.appStore,123456123)
// export default store;