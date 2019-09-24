/**
 *
 * name: index
 * date: 2019-08-28
 * author: cengfucheng
 * about:
 *
 */

import React, { Component } from 'react';
import { Icon } from "antd";
// export default function ({type, text}) {
//     return (
//         <span style={{marginTop: 5, display: 'inline-block'}}>
//             <Icon type={type} style={{marginRight: 8}} />
//             {text}
//         </span>
//     )
// }

export default class IconText extends Component{
    constructor(props) {
        super(props);
    }

    onclick = (e) => {
        const { onBtnClick } = this.props;
        onBtnClick && onBtnClick(e);
    }

    render() {
        const { type, text } = this.props;
        return (
            <span style={{marginTop: 5, display: 'inline-block'}} onClick={this.onclick}>
                <Icon type={type} style={{marginRight: 8}} />
                    {text}
            </span>
        )
    }
}