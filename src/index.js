import React, { createReactContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

// import { Provider } from 'react-redux';
import { Provider } from 'mobx-react';

import store from '@/store';
import Routers from '@/router';
import axios from '@/constants/api/AxiosServer';
// import Api from '@/constants/restful';           // 不再使用集成api


React.Component.prototype.$Axios = axios;
// React.Component.prototype.$Api = Api;

// redux 方式
// <Provider store={store}>
ReactDOM.render(
        <Provider {...store}>
            <div>
                <Routers/>
            </div>
            {/*<HashRouter>*/}
            {/*    <Switch>*/}
            {/*        <Route path='/login' component={MobxLoadCompoent( () => import('@/containers/login'))}></Route>*/}
            {/*        <Route path='/register' component={MobxLoadCompoent( () => import('@/containers/register'))}></Route>*/}
            {/*        <Route path='/404' component={MobxLoadCompoent( () => import('@/containers/error'))}></Route>*/}
            {/*        <Route path='/'>*/}
            {/*            <App>*/}
            {/*                <Routers/>*/}
            {/*            </App>*/}
            {/*        </Route>*/}
            {/*        /!*<Redirect to='/login'/>*!/*/}
            {/*    </Switch>*/}
            {/*</HashRouter>*/}
        </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
