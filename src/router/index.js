/**
 *
 * name: index
 * date: 2019-05-11
 * author: cengfucheng
 * about: route config
 *
 */
import React, {Component} from 'react';
import { HashRouter, Route, Switch, Redirect} from 'react-router-dom';
import { createHashHistory } from 'history';
import App from '@/App.js';
import { layoutComponent, noLayoutComponent } from './config';

import { inject, observer } from "mobx-react";

import PrivateRouter from '@/components/privateRouter';

const history = createHashHistory();


@inject('userStore')
@inject('appStore')
@observer
class InjectStore extends Component{
    // 封装一下路由组件，将 store 传入到单个组件，
    constructor(props) {
        super(props)
    }

    render() {
        let props = this.props;
        return <PrivateRouter {...props}/>
    }
}
// 改版，所有路由变成组件
//
const routeComponents = routers => routers.map( (route, index) => {
    return <InjectStore key={index + 'route'} {...route}/>
});


const LayoutView = routeComponents(layoutComponent);
const NoLayoutView = routeComponents(noLayoutComponent);


export default
class Router extends Component{
// export default function () {
        render() {
            return (
                <div className='app-main'>
                    <HashRouter>
                        <Route render ={ (props) => {
                            console.log('路由跳转',props)
                            return (
                                <div>
                                    <Switch>
                                        {NoLayoutView}
                                        <Route render ={ props => {
                                            // console.log(LayoutView,'组件列表')
                                            return (
                                                <App {...props}>
                                                    <Route render ={() => {
                                                        return (
                                                            <Switch>
                                                                {LayoutView}
                                                                <Redirect exact from='/' to='/home'/>
                                                                <Redirect exact from='*' to='/404'/>
                                                            </Switch>
                                                        )
                                                    }}/>
                                                </App>
                                            )
                                        }}>
                                        </Route>
                                        <Redirect exact from='*' to='/404'/>
                                    </Switch>
                                </div>
                            )
                        }}/>
                    </HashRouter>
                </div>
            )
        }

}