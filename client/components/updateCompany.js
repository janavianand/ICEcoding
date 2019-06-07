import React from 'react'
import {connect} from 'react-redux'
import Papa from 'papaparse'
import updateCompaniesThunk from '../store/companies'

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
  // importCSV = (event) => {
  //   event.preventDefault();
  //   const { csvfile } = this.state;
  //   Papa.parse(csvfile, {
  //     complete: function (result) {
  //       let data = result.data;
  //       console.log(data);
  //     },
  //     header:true
  //   })
  // }
  handleSubmit(event) {
    let updateCompanies = this.props
    event.preventDefault()
    let parsedData = {}
    Papa.parse(this.state.csvfile, {
      complete: function(result) {
        parsedData = result.data
        console.log(parsedData)
      },
      header: true
    })
    this.setState({
      csvfile: undefined,
      flag: true
    })
  }

  render() {
    console.log(this.state)
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
      </form>
    )
  }
}

const mapToDispatch = dispatch => {
  return {
    updateCompanies: function(data) {
      dispatch(updateCompaniesThunk(data))
    }
  }
}
export default connect(null, mapToDispatch)(UpdateCompanies)
