/**
 *
 * name: index
 * date: 2019-06-04
 * author: cengfucheng
 * about:
 *
 */


import React, { Component, PureComponent } from 'react';
import {inject, observer} from "mobx-react";



// mobx 实现
export default
@observer
class LogPage extends Component{
    componentDidMount() {
        console.log(111122233311)
    }


    render() {
        return (
            <div>
                log page
            </div>
        )
    }
}