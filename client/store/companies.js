import axios from 'axios'

//Action Types

const GET_COMPANIES = 'GET_COMPANIES'
const ERROR_DATA = 'ERROR_DATA'

//Action Creators

const getCompanies = companies => ({type: GET_COMPANIES, companies})
const setError = () => ({type: ERROR_DATA})
//Thunks

export const getCompaniesThunk = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/view')
    dispatch(getCompanies(data))
  } catch (error) {
    console.error(error)
  }
}

export const updateCompaniesThunk = parsedData => async dispatch => {
  try {
    //----------------------------------------
    //Set for detecting duplicate ID

    let mySet = new Set()
    //----------------------------------------
    let validData = parsedData.map(datum => {
      datum.Id = parseInt(datum.Id)
      datum.sharePrice = parseInt(datum.sharePrice)
      if (datum.Id && datum.sharePrice && datum.comments.length < 257) {
        mySet.add(datum.Id)
        return datum
      }
    })
    let noDuplicateId = Array.from(mySet)
    //check for valid data
    if (
      validData.length === parsedData.length &&
      noDuplicateId.length === validData.length
    ) {
      let got_data = await axios.put('/api/update', validData)
    } else {
      dispatch(setError())
    }
  } catch (error) {
    console.error(error)
    dispatch(setError())
  }
}
//Intitial State

const initialState = {
  companies: [],
  error: false
}

//Reducer

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_COMPANIES:
      return {...state, companies: action.companies}
    case ERROR_DATA:
      return {...state, error: true}
    default:
      return state
  }
}
