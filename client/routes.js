import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import {Home, ViewCompanies, UpdateCompanies} from './components'

/**
 * COMPONENT
 */
class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/view" component={ViewCompanies} />
        <Route exact path="/update" component={UpdateCompanies} />
      </div>
    )
  }
}

export default Routes
