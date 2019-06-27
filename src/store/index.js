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
export default store;
// import appStore from './appStore';
// import userStore from './userStore';
//

// function load(url) {
//     console.log('模块路径',url)
//     return new Promise( (resolve => {
//         (() => import(url))()
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
// // Promise.resolve((() => import('./appStore.js'))()).then( ({default: modules}) => {
// //     console.log('数据库查看z',modules);
// //     return modules;
// // })
// // console.log('数据查看h',(() => import('./appStore.js'))())
//     // console.log('数据库查看',Promise.resolve(() => import('./appStore.js')).then( ({default: modules}) => modules))
// const store = {
//     appStore: abs('./appStore'),
//     // userStore: import(() => './userStore.js'),
//     userStore: abs('./userStore'),
// }
// // console.log(store.appStore,123456123)
// export default store;