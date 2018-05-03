import React, { Component } from 'react';
import {
  Route,
  Switch,
  withRouter,
  Redirect
} from 'react-router-dom'

import NavBar from './components/commons/NavBar'

import { Home, Activity, HotSale, Mine, GoodDetail, NotFound, HotDetail, Cars } from './components/pages'

const routes = [
  {id: 1, path: '/', component: Home, exact: true},
  {id: 2, path: '/hotsale', component: HotSale},
  {id: 3, path: '/activity', component: Activity},
  {id: 4, path: '/mine', component: Mine},
  {id: 5, path: '/not-found', component: NotFound},
  {id: 6, path: '/good-detail/:name', component: GoodDetail},
  {id: 7, path: '/hot-detail/:id', component: HotDetail},
  {id: 8, path: '/cars', component: Cars}
  // {id: 8, path: '/hot-detail', component: HotSale}
 
]

class App extends Component {

  hasNavBar () {
      //根据this.props.match之类的来判断是否需要navbar
      let pathname = this.props.location.pathname
      let unneed = [ '/good-detail', '/not-found', '/hot-detail' ]
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
            routes.map( item => {
              return <Route exact = { item.exact } path = { item.path } component = { item.component } key = { item.id } />
            })
          }
          <Redirect from = "**" to="/not-found"/>
        </Switch>
        {
          !this.hasNavBar() || <NavBar/>
        }
        
      </div>
    );
  }
}

export default withRouter(App);
