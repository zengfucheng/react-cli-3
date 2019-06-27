/**
 *
 * name: userStore
 * date: 2019-05-27
 * author: cengfucheng
 * about: 用户store
 *
 */

import { observable, action} from "mobx";

class UserStore {
    @observable isSign = false;     //状态登陆判断
    @observable user = {            //用户信息
        userNo: '',
    };
    @observable menuIndex = 0;      //菜单显示编号
    @observable menuList = [        //登陆后的菜单列表
        {
            path: '/home',
            icon: 'user',
            key: 0,
            text: 'nav 1'
        },
        {
            path: '/about',
            icon: 'user',
            key: 1,
            text: 'nav 2'
        },
        {
            path: '/editGoods',
            icon: 'user',
            key: 2,
            text: 'nav 3'
        },
        {
            path: '/login',
            icon: 'user',
            key: 3,
            text: 'nav 4'
        }
    ];
    @action onSignUp(item) {
        // this.user.userNo = item.userNo;
        this.user = {...item};
        console.log('返回数据',this.user,item)
    };
}

export default new UserStore();