/**
 *
 * project: react-cli-3
 * fileName: Tabs
 * date: 2019-09-22 22:34
 * author: cengfucheng
 * ide: WebStorm
 * about: 标签页组件
 *
 */

import React from 'react';
import { Tabs, Pagination } from 'antd';

const { TabPane } = Tabs;

export default ({list, index= '1', ListData = {}}) => {
    if(!Array.isArray(list)) {
        return <div></div>
    }
    return(
        <Tabs defaultActiveKey={index}>
            {list.map( (value, key) => {
                return (
                    <TabPane tab={value.text} key={value.text + value}>
                        {ListData[value.text] && <Pagination defaultCurrent={'1'} total={ListData[value.text].total}></Pagination>}
                    </TabPane>
                )
            })}
        </Tabs>
    )
}