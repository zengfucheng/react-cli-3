/**
 *
 * name: index
 * date: 2019-05-09
 * author: cengfucheng
 * about:  时间组件
 *
 */

import React from 'react';

export default function({date = 123}) {
    return (

        <div>
            <span>时间</span>
            <span>{date}</span>
        </div>
    )
}