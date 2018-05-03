import './index.scss'

import React, {Component} from 'react'
import axios from 'axios'

import Header from './Header'
import Banner from './Banner'
import Info from './Info'
import Choice from './Choice'
class HotDetail extends Component {
    constructor (props) {
        super(props)
        this.state = {
            good_info: null,
            choice: {
            	num: 1
            },
            isChoiceShow: false
        }
        this.toggleChoice = this.toggleChoice.bind(this)
    }

    getGoodInfo () {
        let { id } = this.props.match.params
        axios.get('/mz/api/item',{
            params: {id }
        }).then (res => {
            console.log(res.data.data)
            this.setState({good_info: res.data.data})
        })
    }

    componentWillMount () {
        this.getGoodInfo()
    }

	toggleChoice () {
		this.setState({isChoiceShow : !this.state.isChoiceShow})
	}

	renderContent () {
		if (!this.state.good_info) return '';
		let { masterName, slaveName, options } = this.state.good_info
		let { images, price } = this.state.good_info.skuList[0]
		let { choice, isChoiceShow } = this.state
		return (
			<div>
				<Banner images = { images } />
				<Info name = { masterName } subname = { slaveName } price = { price } />
				
				<div onClick = {this.toggleChoice} className = "guige">
					X { choice.num } 
							<div onClick = { this.toggleChoice } className = "mask"></div>
				
								<div className = "addCar">
									<button className = "add">加入购物车</button>
								</div>
							
							<Choice options = { options }/>
						</div>
					): ''
				}
				
				
			
			</div>
		)
	}

    render () {
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

export default HotDetail