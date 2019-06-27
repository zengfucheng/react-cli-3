/**
 *
 * name: index
 * date: 2019-06-14
 * author: cengfucheng
 * about: 触底加载
 *
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import propTypes from 'prop-types';
import './index.less';
import { ScrollTop } from '@/constants/util/util';


class LoadBottom extends Component{
    constructor(props) {
        super(props);
        this.LoadMore = React.createRef();
    }

    state = {
        oldScrollTop: 0,        // 滚动距离
        top: 0,
    }

    static propTypes = {
        dataList: propTypes.array,
        onLoadTop: propTypes.func,
        allowLoad: propTypes.bool,          // 允许加载
        props: propTypes.bool,
        loader: propTypes.object
    }

    onClicks = (e) => {
        this.setState({
            loading: true
        })
        // this.props.onChange(e);
        setTimeout(() => {
            this.setState({
                loading: false
            })
        },3000)
    }

    componentWillMount() {
        this.setState({
            oldScrollTop: ScrollTop()
        })
        window.addEventListener('scroll', this.onScrollEv, false);
        console.log('滚动距离: ',document.documentElement.scrollTop);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScrollEv, false)
    }

    onScrollEv = (e) => {
        if(this.props.allowLoad || this.props.loading) return;
        let scrollNum = ScrollTop() - this.state.oldScrollTop;
        if(scrollNum == 0) return false;
        // let dir = scrollNum > 0 ? 'down' : 'up';
        if(scrollNum > 0) {
            let nextNum = this.state.oldScrollTop + scrollNum;
            this.setState({
                oldScrollTop: nextNum
            })
            // console.log('可见高度： ', document.documentElement.clientHeight)
            let rect = this.LoadMore.current.getBoundingClientRect();
            // console.log('loadmore box: ', rect)
            // console.log('loadmore box: ', this.LoadMore.current.offsetTop+this.LoadMore.current.offsetHeight)
            // console.log('滚动距离',this.state.oldScrollTop + document.documentElement.clientHeight);
            if(this.state.oldScrollTop + document.documentElement.clientHeight >= this.LoadMore.current.offsetTop+this.LoadMore.current.offsetHeight) {
                // this.setState({
                //     loading: true
                // });
                // console.log('滚动距离',document.documentElement.scrollTop)
                console.log('开始加载',this.LoadMore.current.getBoundingClientRect());
                this.props.onLoadTop();
            }
        }

    }


    render() {
        let props = this.props;
        return (
            <div className={'load-bottom-box'} ref={this.LoadMore}>
                {/*{*/}
                {/*    dataList.map( (item, index) => {*/}
                {/*        return item*/}
                {/*    })*/}
                {/*}*/}
                {props.children}
                {props.allowLoad ? <Loaded/> : null}
                {props.loading ? props.loader : null}
            </div>
        )
    }
}

const Loader = () => {
    return (
        <div className={'load-more-box'}><span>loading...</span></div>
    )
}
const Loaded = () => {
    return (
        <div className={'load-more-box'}>
            <span>暂无更多数据</span>
        </div>
    )
}
LoadBottom.defaultProps = {
    dataList: [1,2,3,4],
    loading: false,
    onLoadTop() {},
    allowLoad: false,        // 是否加载完成
    loader: <Loader/>
}



export default LoadBottom;