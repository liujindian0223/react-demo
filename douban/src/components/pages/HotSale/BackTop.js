
import React from 'react'

const BackTop = props => {
    let { handleClick } = props
    return (
        <div onClick = {handleClick} className="back-top">
            <i className="fa fa-arrow-up"></i>
        </div>
    )
}

export default BackTop