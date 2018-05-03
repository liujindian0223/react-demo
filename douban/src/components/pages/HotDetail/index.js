import './index.scss'

import React, {Component} from 'react'

import { connect } from 'react-redux'

import actionCreator from '../../../store/cars/actionCreator'

import { bindActionCreators } from 'redux'

import axios from 'axios'

//头部组件：点击按钮回到列表
import Header from './Header'
//轮播图组件
import Banner from './Banner'
//详情页中名字等显示的信息组件
import Info from './Info'
//选择规格和数量的组件
import Choice from './Choice'

class HotDetail extends Component {
    constructor (props) {
        super(props)
        this.state = {
            good_info: null,//商品信息
            choice_num:1,//当前选择了几件商品
            choice_type:null,//当前选择了什么规格的商品
            isChoiceShow: false//控制choice组件现在和隐藏的状态
        }
        this.toggleChoice = this.toggleChoice.bind(this)
        this.changeChoiceNum = this.changeChoiceNum.bind(this)
    }

	//更改已选择商品的数量的方法，传入布尔值，true +，false -
	changeChoiceNum (bool) {
		this.setState({choice_num: this.state.choice_num += (bool?1:-1)})
	}
	//获取当前商品详细信息的方法
    getGoodInfo () {
    	//取出路由中的商品id参数
        let { id } = this.props.match.params
        axios.get('/mz/api/item',{
            params: {id }
        }).then (res => {
            console.log(res.data.data)
            this.setState({
            	good_info: res.data.data,
            	//直接设置默认规格，如果商品没有规格，设置为''
            	choice_type:res.data.data.options.length?res.data.data.options[0].item[0]: ''
            })
        })
    }

    componentWillMount () {
    	//当进入详情的时候去获取当前的商品的信息
        this.getGoodInfo()
    }

	toggleChoice () {//控制choice组件显示和隐藏的
		this.setState({isChoiceShow : !this.state.isChoiceShow})
	}
	
	//在一开始的时候，good_info为null，这个时候去渲染商品内容的时候，因为还没有数据所以会出错，故而我们用这个方法来返回真正的要渲染的内容
	renderContent () {
		//当还没有获取到商品数据的时候，直接返回‘’
		if (!this.state.good_info) return '';		
		
		//如果现在已经获取到数据了，重新render的时候，我们准备渲染下面的这一些东西
		
		// 取出，商品的名字， 介绍   ， 配置，id
		let { masterName, slaveName, options, id } = this.state.good_info
		//取出 轮播图的图片、商品的价格
		let { images, price } = this.state.good_info.skuList[0]
		// 取出已选择的规格、数量，是否显示choice组件
		let { choice_type, choice_num, isChoiceShow } = this.state
		return (
			<div>
				{/* 给轮播图组件传入图片们 */}
				<Banner images = { images } />
				{/* 给信息组件传入名字等信息*/}
				<Info name = { masterName } subname = { slaveName } price = { price } />
				
				{/* 点击的时候显示choice组件*/}
				<div onClick = {this.toggleChoice} className = "guige">
					 已选择:{ choice_type } X { choice_num }
				</div>
				
				{
					isChoiceShow ?(
						<div>
							{/* 点击遮罩，让choice组件消失 */}
							<div onClick = { this.toggleChoice } className = "mask"></div>
				
								{/*加入购物车 ，传入商品的一些信息  */}
								<div className = "addCar">
									<button onClick = {this.props.addGoodInCar.bind(this, {
										id, masterName, choice_type, choice_num, price
									}, false)} className = "add">加入购物车</button>
								</div>
							{/* 给choice组件传入当前选择的数量和类型，已经更改数量的方法 */}
							<Choice choice_num = { choice_num } changeChoiceNum = {this.changeChoiceNum} choice_type = {choice_type} options = { options }/>
						</div>
					): ''
				}
				
				
			
			</div>
		)
	}

    render () {
    	console.log(this.props)
        return (
            <div className="hot-detail page">
                <Header/>
                {
                	this.renderContent()
                }
                
               
            </div>
        )
    }

}

export default connect(state=>state, dispatch => {
	return bindActionCreators(actionCreator, dispatch)
})(HotDetail)