
import React from 'react'

const ProductItem = props => {
    let { toDetail } = props
    let { title, desc, image, price_range, tags, product_name } = props.info

    return (
        <div onClick = { toDetail.bind(this,product_name ) } className="product-item">
            <div className="left img-loading">
                <img width="100%" src={image} alt=""/>
            </div>
            <div className="right product-info">
                <p className="title">{title}</p>
                <p className="desc">{desc}</p>
                <p className="price">${price_range}</p>
                <p className="tags">
                   {
                       tags.map((item, i) => {
                           return <span key = {i} style={{background:item.color}}>{item.text}</span>
                       })
                   }
                </p>
            </div>
        </div>
    )
}
export default ProductItem