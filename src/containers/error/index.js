/**
 *
 * name: index
 * date: 2019-06-01
 * author: cengfucheng
 * about: 404
 *
 */

import React, { Component } from 'react';
import errorSy from './index.module.less';

export default class ErrorPage extends Component{

    render() {
        // let style = {
        //     width: '100%',
        //     height: '100%',
        // }
        return (
            <div className={errorSy['error-page']}>
                <div className={errorSy['error-content']}>
                    <h1>404</h1>
                    <p>页面丢失了，请稍后再试</p>
                </div>
            </div>
        )
    }
}