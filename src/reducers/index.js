/**
 *
 * name: index
 * date: 2019-05-09
 * author: cengfucheng
 * about:  整合 reducers
 *
 */

import { combineReducers, replaceReducer } from 'redux';

// import XX from './XX'
import userReducer from './UserReducer';

let allReducer = {
    // XX:  XX,
    userReducer: userReducer
}

const rootReducer = combineReducers(allReducer);

export default rootReducer;