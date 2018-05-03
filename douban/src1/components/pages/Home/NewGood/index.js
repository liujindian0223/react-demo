
import FastClick from 'fastclick'
import React,{Component} from 'react'
import './index.scss'
import axios from 'axios'
import ProductItem from './ProductItem'
import {withRouter} from 'react-router-dom'

//antd-mobile
import 'antd-mobile/dist/antd-mobile.css';
//fastclick 解决click300ms延迟
FastClick.attach(document.body);


class NewGood extends Component{
    constructor(props){
        super(props)
        this.state = {
            products:[]
        }
        this.toDetail = this.toDetail.bind(this)
    }
    getProducts(){
        axios.get('/json/product.json').then(res=>{
            this.setState({products:res.data})
            //console.log(res)
        })
    }
    componentWillMount(){
        this.getProducts()
    }
    toDetail(name){
        this.props.history.push({pathname:`/gooddetail/${name}`})
        // console.log(name)
    }
    render(){
        let {products} = this.state
        return(
            <div className="new-good">
                <div className="product-list-header">新品首发</div>
                {
                    products.map(item=>{
                        return <ProductItem toDetail = {this.toDetail} key={item.id} info={item}/>
                    })
                }
               
            </div>
        )
    }
}
export default withRouter(NewGood)