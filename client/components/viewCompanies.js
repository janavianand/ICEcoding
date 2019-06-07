import React from 'react'
import SingleCompany from './singleCompany'
import {connect} from 'react-redux'
import {getCompaniesThunk} from '../store/companies'

class ViewCompanies extends React.Component {
  componentDidMount() {
    this.props.getCompanies()
  }
  render() {
    const {companies} = this.props.companies
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Share Price Date</td>
              <td>Share Price</td>
              <td>Comments</td>
            </tr>
          </thead>
          {companies && companies.length > 0 ? (
            <tbody>
              {companies.map(company => {
                return <SingleCompany company={company} key={company.id} />
              })}
            </tbody>
          ) : (
            <tbody>
              <tr>
                <td>Loading</td>
                <td>Loading</td>
                <td>Loading</td>
                <td>Loading</td>
                <td>Loading</td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    companies: state.companies
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCompanies: function() {
      return dispatch(getCompaniesThunk())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewCompanies)
