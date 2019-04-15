import {
    GET_SHRUB_DATA,
    GET_SHRUB_DATA_SUCCESS,
    GET_SHRUB_DATA_FAIL
  } from "../actions"
  
  
  const initialState = {
    shrub: [],
    error: { message: "" }
  }
  
  export default (state = initialState, action) => {
      switch (action.type) {
        case GET_SHRUB_DATA:
          return state
        case GET_SHRUB_DATA_SUCCESS:
          return { ...state, shrub: action.shrubs }
        case GET_SHRUB_DATA_FAIL:
          return { ...state, error: action.error }
        default:
          return state
      }
  }