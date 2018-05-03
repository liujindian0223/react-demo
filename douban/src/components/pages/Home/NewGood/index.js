import './index.scss'
import axios from 'axios'
import React, {Component} from 'react'
import ProductItem from './ProductItem'
import {
    withRouter 
} from 'react-router-dom'
class NewGood extends Component {

    constructor (props) {
        super(props)
        this.state = {
            products: []
        }
        this.toDetail = this.toDetail.bind(this)
    }

    getProducts () {
        axios.get('/json/product.json').then(res => {
            this.setState({products: res.data})
        })
    }

    componentWillMount () {
        this.getProducts()
    }

    toDetail (name) {
        this.props.history.push({pathname: `/good-detail/${name}`})
    }
    render () {
        
        let { products } = this.state
        return (
            <div className = "new-good">
                <div className="product-list-header">新品首发</div>
                {
                    products.map(item => {
                        return <ProductItem toDetail = {this.toDetail} info = { item } key = { item.id } />
                    })
                }
                
            </div>
        )
    }

}

export default withRouter(NewGood)