import React, { Component } from 'react';
import {
  Route,
  Switch,
  withRouter,
  Redirect
}
 from 'react-router-dom'


import NavBar from './components/commons/NavBar'

import {Home,Activity,HotSale,Mine,GoodDetail, NotFound,HotDetail} from './components/pages'

let routes = [
  {id:1,path:'/',component:Home,exact:true},
  {id:2,path:'/hotsale',component:HotSale},
  {id:3,path:'/activity',component:Activity},
  {id:4,path:'/mine',component:Mine},
  {id:5,path:'/gooddetail/:name',component:GoodDetail},
  {id:6,path:'/notfound',component:NotFound},
  {id:7,path:'/hot-detail/:id',component:HotDetail}
]
class App extends Component {

  hasNavBar () {
    //根据this.props.match之类的来判断是否需要navbar
    let pathname = this.props.location.pathname
    let unneed = [ '/gooddetail','/notfound','/hot-detail' ]
    let flag = unneed.some(item => {
        if(pathname.startsWith(item)){
          return true
        }
        return false
    })
    return !flag
}

  render() {
    return (
      <div>
        <Switch>
          {
            routes.map(item => {
              return<Route exact = {item.exact} path = {item.path} component = {item.component} key = {item.id}/>
            })
          }
          <Redirect from = "**" to = "/notfound"/>
        </Switch>
        {
          !this.hasNavBar() || <NavBar/>
        }
        
      </div>
    )
  }
}

export default withRouter(App)
