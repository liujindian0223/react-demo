
import React from 'react'
import { Link } from 'react-router-dom'
const Header = props => {

    return (
        <header className="header">
            <Link to = "/hotsale">
	            <div className="back">
	                <i className="fa fa-chevron-left"></i>
	            </div>
            </Link>
        </header>
    )


}

export default Header