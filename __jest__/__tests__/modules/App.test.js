// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'mobx-react/index';
//
// import App from '@/App';
// import store from '@/store';
//
// it('renders without crashing', () => {
//     const div = document.createElement('div');
//     console.log('test 了')
//     ReactDOM.render(
//         <Provider {...store}>
//             <App />
//         </Provider>
//         , div);
//     ReactDOM.unmountComponentAtNode(div);
// });
import React from 'react';
import ReactDOM from 'react-dom';
// import App from '../../../src/App';

import { HashRouter } from 'react-router-dom';
import { render, mount, shallow } from 'enzyme';
// import { Provider } from 'mobx-react/index';
import store from '@/store';
import { Button } from 'antd';

import DevTime from '@/dev-time';

import HomePage from '@/containers/home/Home';

import Axios from '../utils/api/AxiosServer';

import { login_user } from '@/constants/restful/login/login-api';


describe('init', function () {
    describe('inits', function () {
        beforeAll(() => {
            console.log('test1 before all');
        });
        // it('renders without crashing', () => {
        //     const div = document.createElement('div');
        //     ReactDOM.render(<App />, div);
        //     ReactDOM.unmountComponentAtNode(div);
        // });
        it('should get antd Button.', function () {
            const wrapper = render(
                <Button>测试</Button>
            )
            expect(wrapper).toMatchSnapshot();
        });

        it('should get time component', async function () {
            const times = mount(
                    <DevTime {...store} show='1'></DevTime>);
            // console.log(times.text());
            // console.log(times.state(), times.props());
            // console.log(times.props());
            // expect(times.find('p').text()).not.toEqual('组件')
            // expect(times.setProps({show: 0})).not.toEqual('组件')
            // console.log(times.html());
            // times.find('Button').simulate('click');
            times.setState({'showD': false});
            console.log(times.state('showD'));
            console.log(times.html())
            // expect(times.state('showD')).toBe(true);
            // times.find('.zfc').at(0).simulate('click');
            // console.log(times.html());

            // console.log(times.text());
            // let data = await Axios.get('http://127.0.0.1:3000/leihaoxiang?name=zfc&age=123');
            // let data = await login_user(JSON.stringify({name: 'zfccc',psw: '12345678'}));
            // console.log(data);
        });

        it('should homepage is login sucess', async function () {
            const page = mount(
                <HashRouter>
                    <HomePage {...store}></HomePage>
                </HashRouter>

            );
            // page = page.first();
            // await page.find('div > .adclick').simulate('click');
            // try {
                const data = await login_user(JSON.stringify({username: 'zeng0613',password: '123456'}))
                // console.log('返回数据' ,data);
                if(data.errorcode != 'EO1234') {
                    page.props().children.props.appStore.names = data.result[0].user;
                    // console.log('查看组件数据' ,page.prop());
                    // page.setProps({
                    //     appStore: {
                    //         names: data.result[0].user
                    //     }
                    // })
                    // this.props.appStore.names = data.result[0].user;
                }
                console.log(page.find('.adclick').text())
                expect(page.find('.adclick').text()).not.toEqual('未登录');
            // }catch(err) {
            //     console.log('错误',err)
            // }
            // console.log(page.find('div > .adclick').html());
        });

    });


})
