import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
const customHistory = createBrowserHistory()

import App from '../containers'
import Home from '../containers/Home'
import City from '../containers/City'
import NotFound from '../containers/NotFound'
import Detail from '../containers/Detail'

export default class AppRouter extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Router>
        <App>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/city" component={City}/>
            <Route path="/detail/:id" component={Detail}/>
            <Route component={NotFound}/>
          </Switch>
        </App>  
      </Router>
    )
  }
}