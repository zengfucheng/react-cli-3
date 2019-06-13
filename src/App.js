import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './App.less';


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
        // collapsed: true,
    }
    // toggle = () => {
    //     this.setState({
    //         collapsed: !this.state.collapsed,
    //     });
    // }


    onMenuClick = ({item, key, keyPath, domEvent}) => {
        this.props.userStore.menuIndex = key.split('|')[0];
    }

    componentWillMount() {
        // 挂载前

        // 查询广告
        this.$Api.fetch_advertise()
            .then(data => {
                // console.log('返回数据，广告' ,data);
                let list = data.data;
                list = JSON.parse(JSON.stringify(list.url).replace(/\|/g,'/'));
                this.props.appStore.advertiseList = [...list];
            })
            .catch(err => console.log('错误',err));
    }

    componentDidMount() {
        // console.log(this.context)
    }

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     if(nextProps.userStore.menuIndex)
    //     return true;
    // }

    render() {
        const { props } = this;
        let menuItem = props.userStore.menuList[props.userStore.menuIndex];
        let menuIndex = menuItem.key + '|' + menuItem.text;
        return (
            <div className="App">
                <Layout>
                    <Header style={{background: 'white',height:'0.64rem',}}>
                        <div style={{width: '1.2rem', height:'0.64rem',float: 'left'}}>
                            {/*<img src={zfc}/>*/}

                        </div>
                        <Menu style={{width: 'calc(100% - 1.4rem)',lineHeight: '0.64rem'}} onClick={this.onMenuClick} mode="horizontal" defaultSelectedKeys={[menuIndex]}>
                            {
                                Array.from(props.userStore.menuList).map( (item, index) => {
                                    return ( <Menu.Item key={item.key + '|' + item.text}>
                                        <NavLink to={item.path}>
                                            <Icon type={item.icon} />
                                            <span>{item.text}</span>
                                        </NavLink>
                                    </Menu.Item> )

                                })
                            }
                        </Menu>
                    </Header>
                    <Content style={{padding: '0.05px',background: '#FFFFFFF',height:'calc(100% -0.64rem)', overflowY:'auto'}}>

                        {props.children}
                    </Content>
                </Layout>
            </div>
        );
    }


}

export default App;
