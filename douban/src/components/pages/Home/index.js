import './index.scss'

import React, {Component} from 'react'
import HomeBanner from './Banner'
import NewGood from './NewGood'
class Home extends Component {

    render () {
        return (
            <div className = "page">
                <HomeBanner/>
                <div className = "block"></div>
                <NewGood/>
            </div>
        )
    }

}

export default Home