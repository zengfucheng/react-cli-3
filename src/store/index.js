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