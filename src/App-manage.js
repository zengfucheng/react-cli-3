import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';


import { Layout, Menu, Icon} from "antd";
import { inject } from "mobx-react";
const { Header, Sider, Content } = Layout;

@inject('appStore')
@inject('userStore')
class App extends Component{
    constructor(props) {
        super(props)
    }

    state = {
        collapsed: true,
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    onMenuClick = ({item, key, keyPath, domEvent}) => {
        console.log('菜单事件',item, key, keyPath, domEvent)
    }

    componentDidMount() {
        // console.log(this.context)
    }

    render() {
        const { props } = this;
        Array.from(props.userStore.menuList).forEach( (item, index) => {
            // console.log(item)
            // console.log(item.path)
        })
        return (
            <div className="App">
                <Layout>
                    <Sider trigger = {null} collapsible collapsed={this.state.collapsed} style={{background: '#fff'}}>
                        <div style={{width: '100%', height:'100px'}}>
                            {/*<img src={zfc}/>*/}

                        </div>
                        <Menu onClick={this.onMenuClick} mode="inline" defaultSelectedKeys={['0']}>
                            {
                                Array.from(props.userStore.menuList).map( (item, index) => {
                                        return ( <Menu.Item key={item.key + item.text}>
                                            <NavLink to={item.path}>
                                                <Icon type={item.icon} />
                                                <span>{item.text}</span>
                                            </NavLink>
                                        </Menu.Item> )

                                })
                            }
                        </Menu>
                    </Sider>
                    <Layout style={{overflow: 'hidden'}}>
                        <Header style={{background: '#ffffff',padding:0}}>
                            <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                            />
                        </Header>
                        <Content style={{background: '#FFFFFFF',height:'calc(100vh - 64px)', overflowY:'auto'}}>

                            {props.children}
                        </Content>
                    </Layout>
                </Layout>
            </div>
        );
    }


}

export default App;
