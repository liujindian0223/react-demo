import './index.scss'
import React, {Component} from 'react'
import { ListView, Toast } from 'antd-mobile';
import axios from 'axios'
import GoodItem from './GoodItem'
import BackTop from './BackTop'


class HotSale extends Component {
    constructor (props) {
        super(props)
        //准备存放数据的对象
        const dataSource = new ListView.DataSource({
            //这个是在当数据变化之后，判断不允许出现重复数据
            rowHasChanged: (row1, row2) => row1 !== row2,
        });
        this.state = {
            page: 1,
            num: 20,
            dataSource,
            isLoading: false,
            hasMore:true,
            isBackShow: false
        }
        //零时存放的，为了被多个函数都能用到，挂载到this
        this.goods = []
        this.onEndReached = this.onEndReached.bind(this)
        this.backtop = this.backtop.bind(this)
        this.listenScroll = this.listenScroll.bind(this)
    }

    getGoods () { //获取数据
        Toast.loading('loading...')
        let { page, num } = this.state
        axios.get('/mz/api/recommend/home',{
            params: { page, num }
        }).then(res => {
            Toast.hide()
            let total = res.data.data.total

            if ( page*num >= total ) {
                this.setState({hasMore: false})
            }
            //获取到新数据之后，放入原数据的数组里
            this.goods = this.goods.concat(res.data.data.list)
            this.setState({
                //将获取到的数据放入到dataSource
                dataSource: this.state.dataSource.cloneWithRows(this.goods),
                isLoading: false
            })
        })
    }

    componentWillMount () {
        //获取初始的商品
        this.getGoods()
    }

    onEndReached () {//当滚动到底部会执行，加载更多的数据
        // console.log('该获取最新的数据了')
        if(this.state.isLoading) return false;
        if( !this.state.hasMore ) {
            // console.log('没有更多了')
            Toast.info('没有更多数据了', 2)
            return false;
        }
        this.setState({page: ++this.state.page,isLoading:true})
        this.getGoods()
    }


    backtop () {//回到顶部
        this.lv.scrollTo(0, 0)
    }

    listenScroll (e) {//监听滚动距离控制按钮显隐
        if (document.documentElement.scrollTop >300 ) {
            if ( this.state.isBackShow ) return false;
            this.setState({
                isBackShow: true
            })
        }else {
            if ( !this.state.isBackShow ) return false;
            this.setState({
                isBackShow: false
            })
        }
    }

    render () {
        let {  isBackShow } = this.state
        //这就是一条条的数据
        const row = (rowData, sectionID, rowID) => {
          return (
            <GoodItem info = { rowData } key = { rowData.id } />
          );
        };

        return (
            <div className="hot-sale page">
                <div className="title">—&nbsp;好货精选&nbsp;—</div>

                <div className="items">
                    <ListView
                        ref={el => this.lv = el}
                        dataSource={this.state.dataSource}
                        renderRow={row}
                        className="am-list"
                        pageSize={4}
                        useBodyScroll
                        onScroll={this.listenScroll}
                        scrollRenderAheadDistance={500}
                        onEndReached={this.onEndReached}
                        onEndReachedThreshold={10}
                    />
                </div>
               
                {
                    !isBackShow || <BackTop handleClick =  {this.backtop}/>
                }
                

            </div>
        )
    }
    // scrollHandler (e) {
    //     console.log(e)
    // }
    // componentDidMount () {
    //     window.addEventListener('scroll',this.scrollHandler)
    // }
    // componentWillUnmount () {
    //     window.removeEventListener('scroll',this.scrollHandler)
    // }

}

export default HotSale


function trunArrayToObject (arr) {
    let data = {}
    arr.forEach((item,i) => {
        data[item.id] = item
    });
    return data
}