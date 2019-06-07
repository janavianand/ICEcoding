import axios from 'axios'

//Action Types

const GET_COMPANIES = 'GET_COMPANIES'
const UPDATE_COMPANIES = 'UPDATE_COMPANIES'
const ERROR_DATA = 'ERROR_DATA'

//Action Creators

const getCompanies = companies => ({type: GET_COMPANIES, companies})
const updateCompanies = data => ({type: UPDATE_COMPANIES, data})
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
    let validData = parsedData.map(datum => {
      datum.Id = parseInt(dataum.Id)
      datum.sharePrice = parseInt(datum.sharePrice)
      if (datum.Id && datum.sharePrice && datum.comments.length < 257) {
        return datum
      } else {
        dispatch(setError())
      }
    })
    if (validData.length === data.length) {
      let data = await axios.put('/api/update', data)
      dispatch(updateCompanies(data))
    }
  } catch (error) {
    console.error(error)
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
    case UPDATE_COMPANIES:
      let companies = state.companies
      notUpdateCompanies = companies.map(comp => {
        action.data.forEach(data => {
          if (data.id !== comp.id) {
            return comp
          }
        })
      })
      notUpdateCompanies.push(action.data)
      return {...state, companies: notUpdateCompanies}
    case ERROR_DATA:
      return {...state, error: true}
    default:
      return state
  }
}
