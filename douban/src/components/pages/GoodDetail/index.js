import './index.scss'
import axios from 'axios'
import React, {Component} from 'react'
class GoodDetail extends Component {

    constructor (props) {
        super(props)

        this.state = {
            detail: null
        }
    }
    getDetailByName () {//根据路由参数里的productname来获取对应的商品的详情
        let product_name = this.props.match.params.name
        axios.get('/json/detail.json',{
            params: {name: product_name}
        }).then (res => {
            this.setState({detail: res.data})
        })
    }
    componentWillMount () {
        this.getDetailByName()
    }

    renderContent () {//根据detail来判断到底渲染什么东西，因为在数据没有获取到到时候detail为null
        let { detail } = this.state
        console.log(detail, 111)
        if(!detail)  return '';    
        return (
            <div className="content-imgs">
                {
                    detail.page.mobile_content.map((item,i) => {
                        return  <div key = { i } className="img-box img-loading">
                                    <img width="100%" src={item.url} alt=""/>
                                </div>
                    })
                }
                
            </div>
        )

    }

    render () {
        let { detail } = this.state
        return (
            <div >
                {this.renderContent()}
            </div>
        )
    }

}

export default GoodDetail