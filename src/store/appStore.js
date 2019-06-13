/**
 *
 * name: appStore
 * date: 2019-05-26
 * author: cengfucheng
 * about:
 *
 */

import { observable, action, computed } from 'mobx';
import { observer } from "mobx-react";

class AppStore {
    appPath = 'http://127.0.0.1:3000';  // app服务地址
    @observable names = 'z';
    @observable advertiseList = [];         // 广告菜单
}

export default new AppStore();