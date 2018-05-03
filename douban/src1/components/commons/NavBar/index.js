

import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import './index.scss'

const NavBarItem = props => {
    let {title,icon,path} = props.info
    return(
        <NavLink exact activeClassName={'active'} to = {path}>
            <i className={`fa fa-${icon}`}></i>
            <span>{title}</span>
        </NavLink>
        
    )
}
class NavBar extends Component{
    render(){
        let {navs} = this.props
        return(
            <div className="app-nav-bar">
                {
                    navs.map(item => {
                        return<NavBarItem info = {item} key = {item.id}/>
                    })
                }
            </div>
        )
    }
}


NavBar.defaultProps = {
    navs:[
        {id:1,title:"首页",icon:"home",path:"/"},
        {id:2,title:"热卖",icon:"gift",path:"/hotsale"},
        {id:3,title:"活动",icon:"dashboard",path:"/activity"},
        {id:4,title:"我的",icon:"user-circle-o",path:"/mine"},
    ]
}
export default NavBar