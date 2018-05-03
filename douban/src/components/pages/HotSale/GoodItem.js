
import React, {Component} from 'react'

import { withRouter } from 'react-router-dom'

class GoodItem extends Component  {

   toDetail (id) {
        let { history } = this.props
        history.push('/hot-detail/'+id)
   }

   render () {
        let { displaySalesCount, masterName, skuList, id } = this.props.info
        
        return (
            
            <div onClick = { this.toDetail.bind(this, id) } className="good-item">
                <div className="img-box img-loading">
                    <div style ={{ background: '#fff' }}>
                    <img
                    width = "100%" src={skuList[0].image} alt=""/>
                    </div>
                </div>

                <p className="name">{masterName}</p>
                <div className="content">
                    <span className="price">￥{(skuList[0].price/100).toFixed(2)}</span>
                    <span className="inventory">已售{displaySalesCount}</span>
                </div>
            </div>
        )
   }
    
}

export default withRouter(GoodItem)