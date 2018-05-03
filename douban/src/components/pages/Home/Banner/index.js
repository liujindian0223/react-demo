import './index.scss'

import React, {Component} from 'react'
import Swiper from 'swiper'

import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import actionCreator from '../../../../store/home/actionCreator'

const SwiperSlide = props => {
    let { image } = props.info
    return (
        <div className="swiper-slide img-loading">
            <img width = "100%" src = { image } alt=""/>
        </div>
    )
}

class HomeBanner extends Component {
    componentWillMount () {
        //如果store中已经有了轮播数据了，不需要再重新的请求了
        if ( this.props.home.banners.length ) return false;
        this.props.getBanners()
    }
    render () {
        let { banners } = this.props.home
        return (
            <div ref = {el => this.el = el} className = "swiper-container home-banner">
                <div className="swiper-wrapper">
                    {
                        banners.map( item => {
                            return <SwiperSlide info = { item } key = { item.id } />
                        })
                    }
                </div>
                <div className="swiper-pagination"></div>
            </div>
        )
    }
    componentDidMount () {
        if (this.props.home.banners.length) {
            new Swiper(this.el, {pagination: {el: '.swiper-pagination'}})
        }
    }
    componentDidUpdate () {
        new Swiper(this.el, {pagination: {el: '.swiper-pagination'}})
    }
}

export default connect(state => state, dispatch => {
    return bindActionCreators(actionCreator, dispatch)
})(HomeBanner)