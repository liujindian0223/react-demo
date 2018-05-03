
import './index.scss'
import React, {Component} from 'react'

//显示上面规格的组件
const ChoiceItem = props => {
	let {choice_type} = props
	let { name, item } = props.info
	return (
		<div className = "choice-item">
			<p className = "name">{name}</p>
			<p className = "item-box">
				{
					item.map ((obj, i) => {
						return (
							<span className = {"item-span "+(choice_type === obj?'active':'')} key = {i}> {obj} </span>
						)
					})
				}
				
			</p>
		</div>
	)
	
}
//操作数量的组件
const Number = props => {
	//更改数量的方法以及当前的数量
	let {changeChoiceNum, choice_num} = props
	return (
		<div>
			<p>数量:</p>
			<button onClick = {changeChoiceNum.bind(this,false)}>-</button>
			<span>{choice_num}</span>
			<button onClick = {changeChoiceNum.bind(this,true)}>+</button>
		</div>
	)
}

class Choice extends Component {
	
	
	render () {
		
		let { options, choice_type, changeChoiceNum, choice_num } = this.props
		
		return (
			<div className = "choice-box">
				{/*循环商品的规格 */}
				{
					options.map(item => {
						return <ChoiceItem choice_type = {choice_type} info = {item} key = {item.id}/>
					})
				}
				<Number choice_num = {choice_num} changeChoiceNum = {changeChoiceNum}/>
			</div>
		)
	}
	
}

export default Choice
