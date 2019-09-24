import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './App.less';


import { Layout, Menu, Icon} from "antd";
import { inject } from "mobx-react";

import { menuList, advertise } from 'Restful/login/login-api';

import zfc from '@/assets/logo.png';

const { Header, Sider, Content, Footer } = Layout;
const { SubMenu } = Menu;

@inject('appStore')
@inject('userStore')
class App extends Component{
    constructor(props) {
        super(props)
    }

    state = {
        // collapsed: true,
        menuList: []
    }
    // toggle = () => {
    //     this.setState({
    //         collapsed: !this.state.collapsed,
    //     });
    // }


    onMenuClick = ({item, key, keyPath, domEvent}) => {
        // this.props.userStore.menuIndex = key.split('|')[0];
        const menuList = [...this.props.userStore.menuList];
        let index = menuList.findIndex( findItem => findItem.text == key);
        index && ( this.props.userStore.menuIndex = index + '' );

        console.log('菜单索引',key,this.props.userStore.menuIndex)
    }

    async queryInit() {
        // this.$Api.fetch_menuList()
        //     .then(data => {
        //         console.log('菜单1', data);
        //     })
        //     .catch(e => {
        //         console.log(e)
        //     })

        // const menuData = this.$Api.fetch_menuList();
        // const adData = this.$Api.fetch_advertise();
        const menuData = menuList();
        const adData = advertise();
        const { appStore, userStore } = this.props;
        try{
            let adList = await adData;
            console.log('广告', adList);
            appStore.advertiseList = [...JSON.parse(JSON.stringify(adList.url).replace(/\|/g,'/'))];
            let meunList = await menuData;
            userStore.menuList = [...meunList];
            this.setState({
                menuList: [...meunList]
            });
            //     console.log('菜单', this.props.userStore.menuList,meunList,[...JSON.parse(JSON.stringify(meunList))]);
        }catch (err) {
            console.log(err);
        }
    }

    componentWillMount() {
        // 挂载前
        // 查询广告
        this.queryInit();
        // this.$Api.fetch_advertise()
        //     .then(data => {
        //         // console.log('返回数据，广告' ,data);
        //         let list = data.data;
        //         list = JSON.parse(JSON.stringify(list.url).replace(/\|/g,'/'));
        //         this.props.appStore.advertiseList = [...list];
        //     })
        //     .catch(err => console.log('错误',err));
    }

    componentDidMount() {
        // console.log(this.context)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('app状态',prevProps, prevState, snapshot)
    }

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     if(nextProps.userStore.menuIndex)
    //     return true;
    // }

    render() {
        const { props } = this;
        const { userStore } = props;
        // console.log('查看',props.userStore);
        let menuItem = {};
        let menuIndex = '';
        let meunList = [...userStore.menuList];
        console.log(meunList)
        console.log('查看菜单',meunList)
        if(meunList.length > 0) {
            menuItem = meunList[userStore.menuIndex];
            // menuIndex = menuItem.key + '|' + menuItem.text;
            menuIndex = userStore.menuIndex + '';
            console.log('查看菜单索引',menuIndex)
        }
        return (
            <div className="App">
                <Layout className='app-warp'>
                    <div className={'app-top-box'}>
                        <Header className={'app-warp-header'} style={{background: 'white',height:'54px',}}>
                            {/*<div className={'warp-header-box'}>*/}
                            <div className={'app-logo-box'}>
                                <img src={zfc}/>
                                {/*<img src={require('@/assets/logo.png')}/>*/}
                                {/*<img src={require('./assets/logo.png')}/>*/}

                            </div>
                            {/*<Menu style={{width: 'calc(100% - 240px)',lineHeight: '54px', display: 'in'}} onClick={this.onMenuClick} mode="horizontal" selectedKeys={[menuIndex]} defaultSelectedKeys={[menuIndex]}>*/}
                            <Menu className={'app-nav-box'} onClick={this.onMenuClick} mode="horizontal" selectedKeys={[menuIndex]} defaultSelectedKeys={[menuIndex]}>
                                {
                                    // Array.from(props.userStore.menuList).map( (item, index) => {
                                    meunList.map( (item, index) => {
                                        // return ( <Menu.Item key={item.key + '|' + item.text}>
                                        return ( <Menu.Item key={item.key}>
                                            <NavLink to={item.path}>
                                                <Icon type={item.icon} />
                                                <span>{item.text}</span>
                                            </NavLink>
                                        </Menu.Item> )

                                    })
                                }
                            </Menu>
                            <div className={'app-user-box'}>
                                {/*<Icon type="login"></Icon>*/}
                                <Menu mode={'horizontal'} selectable={false}>
                                    <SubMenu title={
                                        <span>
                                                <Icon type="login"></Icon>
                                                {userStore.isSign ? '登录' : '未登录'}
                                            </span>
                                    }>
                                        <Menu.ItemGroup>
                                            <Menu.Item key="setting:1">个人中心</Menu.Item>
                                            <Menu.Item key="setting:2">退出</Menu.Item>
                                        </Menu.ItemGroup>
                                    </SubMenu>
                                </Menu>
                            </div>
                            {/*</div>*/}
                        </Header>
                    </div>


                    {/*<Content className={'app-warp-content'} style={{padding: '5px',background: '#FFFFFFF',height:'calc(100% -54px)', overflowY:'auto'}}>*/}
                    <Content className={'app-warp-content'} style={{padding: '5px',background: '#FFFFFFF'}}>
                        <div className={'app-content-area'}>
                            {props.children}

                        </div>
                        <Layout>
                            <Footer>
                                footer
                            </Footer>
                        </Layout>
                    </Content>
                </Layout>
            </div>
        );
    }


}

export default App;
