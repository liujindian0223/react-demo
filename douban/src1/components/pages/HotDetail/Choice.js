
import './index.scss'
import React, {Component} from 'react'


const ChoiceItem = props => {
	let { name, item } = props.info
	return (
		<div className = "choice-item">
			<p className = "name">{name}</p>
			<p className = "item-box">
				{
					item.map ((obj, i) => {
						return (
							<span className = "item-span" key = {i}> {obj} </span>
						)
					})
				}
				
			</p>
		</div>
	)
	
}

class Choice extends Component {
	
	
	render () {
		
		let { options } = this.props
		
		return (
			<div className = "choice-box">
			{
				options.map(item => {
					return <ChoiceItem info = {item} key = {item.id}/>
				})
			}
				
			</div>
		)
	}
	
}

export default Choice
