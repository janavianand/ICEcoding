import React from 'react'
import {connect} from 'react-redux'
import Papa from 'papaparse'
import {Link} from 'react-router-dom'
import {updateCompaniesThunk} from '../store/companies'

class UpdateCompanies extends React.Component {
  constructor() {
    super()
    this.state = {
      csvfile: undefined,
      flag: true
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({csvfile: event.target.files[0], flag: false})
  }

  async handleSubmit(event) {
    let {updateCompanies} = this.props
    event.preventDefault()

    // AFTER:Added helper function to dispatch thunk
    //----------------------------------------
    function test(data) {
      updateCompanies(data)
    }
    //----------------------------------------
    let parsedData = []
    await Papa.parse(this.state.csvfile, {
      complete: function(result) {
        parsedData = result.data
        console.log(parsedData)
        test(parsedData)
      },
      header: true
    })
    this.setState({
      csvfile: null,
      flag: false
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="file"
          id="csvfile"
          accept=".csv"
          onChange={this.handleChange}
          required
        />
        <button type="submit" disabled={this.state.flag}>
          Upload
        </button>
        <br />
        <br />

        {/* AFTER: Added Error Display  */}
        {/* //---------------------------------------- */}
        {this.props.error ? (
          <div>Invalid Data</div>
        ) : (
          <div>
            <h4>
              Go to view to see the updates or click{' '}
              <Link to="/view">View</Link>
            </h4>
          </div>
        )}
        {/* //---------------------------------------- */}
      </form>
    )
  }
}

const mapToState = state => {
  return {
    error: state.companies.error
  }
}

const mapToDispatch = dispatch => {
  return {
    updateCompanies: function(data) {
      dispatch(updateCompaniesThunk(data))
    }
  }
}
export default connect(mapToState, mapToDispatch)(UpdateCompanies)
