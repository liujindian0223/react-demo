import './index.scss'

import React, {Component} from 'react'


class NotFound extends Component {
    render () {
        return (
            <div className="not-found">
                <div className="main">
                    <div className="img-loading img-box">
                        <img width="100%" src="/images/not-found.jpg" alt=""/>
                    </div>
                    <p className="title">404：页面飞到外太空了</p>
                    <p className="tips">尝试刷新页面或返回</p>
                    <div className="button">
                        <a href="/">返回</a>
                    </div>
                </div>
            </div>
        )
    }

}

export default NotFound