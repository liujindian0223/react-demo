import './index.scss'

import React, {Component} from 'react'

import { connect } from 'react-redux'

import actionCreator from '../../../store/cars/actionCreator'
import { bindActionCreators } from 'redux'

class Cars extends Component {

    render () {
    	console.log(this)
    	let { all_info } = this.props
    	let { goods } = this.props.cars
        return (
            <div>
				<ul>
					{
						goods.map(item => {
							return (
								<li key = {item.id}>
								   {item.masterName}-{item.price}-{item.num}
								   
								   <button onClick = { this.props.reduceGoodInCar.bind(this, item.id) }>-</button>
								   <button onClick = { this.props.addGoodInCar.bind(this,item,true) }>+</button>
								</li>
							)
						})
					}
					
				</ul>
				
				<p>总价钱: {all_info.price}总数量: {all_info.num}</p>
				
            </div>
        )
    }

}
//在mapStateToProps里做出处理，因为cars组件需要用到当前的总价钱和总数量，所以我们在mapStateToProps计算出总价钱和总数量之后放入到UI组件的属性上
export default connect(state => {
	//总价钱和总数量
	let all_info = {num:0,price:0}
	
	state.cars.goods.forEach(item => {
		all_info.num += item.num;
		all_info.price += item.price*item.num
	})
	
	
	return {//将这个对象上的属性放入到UI组件的属性上
		cars:state.cars,
		all_info:all_info
	}
}, dispatch => {
	return bindActionCreators(actionCreator, dispatch)
})(Cars)