
import './index.scss'
import React, {Component} from 'react'

import Swiper from 'swiper'


const SwiperSlide = props => {
	let { src } = props
	return (
		<div className="swiper-slide">
			<div className="img-box img-loading">
				<img width = "100%" src={src}/>
			</div>
		</div>
	)
}

class Banner extends Component {
	
	
	render () {
		
		let { images } = this.props
		
		return (
			<div className="swiper-container detail-banner">
				<div className="swiper-wrapper">
					{
						images.map((item, i) => {
							return <SwiperSlide key = { i } src = { item }/>
						})
					}
				</div>	
				<div className="swiper-pagination"></div>
			</div>
		)
	}
	
	componentDidMount () {
		new Swiper ('.detail-banner',{
			pagination: {
				el: '.swiper-pagination'
			}
		})
	}
	
}

export default Banner
