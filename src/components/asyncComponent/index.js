/**
 *
 * name: index
 * date: 2019-05-11
 * author: cengfucheng
 * about: 异步导入组件
 *
 */

import React, { Component } from 'react'

export default function asyncComponent(importComponent) {

    class AsyncComponent extends Component {

        constructor(props) {
            super(props);

            this.state = {
                component: null,
            };
        }

        async componentDidMount() {

            const { default: component } = await importComponent();
            this.setState({
                component: component
            });
        }

        render() {
            const C = this.state.component;

            return C
                ? <C {...this.props} />
                : null;
        }

    }

    return AsyncComponent;
}