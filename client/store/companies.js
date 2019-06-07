import axios from 'axios'

//Action Types

const GET_COMPANIES = 'GET_COMPANIES'

//Action Creators

const getCompanies = companies => ({type: GET_COMPANIES, companies})

//Thunks

export const getCompaniesThunk = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/view')
    dispatch(getCompanies(data))
  } catch (error) {
    console.error(error)
  }
}

//Intitial State

const initialState = {
  companies: []
}

//Reducer

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_COMPANIES:
      return {companies: action.companies}
    default:
      return state
  }
}
