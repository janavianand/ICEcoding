import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import {Home, ViewCompanies} from './components'

/**
 * COMPONENT
 */
class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/view" component={ViewCompanies} />
      </div>
    )
  }
}

export default Routes
