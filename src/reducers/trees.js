import {
    GET_TREE_DATA,
    GET_TREE_DATA_SUCCESS,
    GET_TREE_DATA_FAIL
  } from "../actions"
  
  
  const initialState = {
    tree: [],
    error: { message: "" }
  }
  
  export default (state = initialState, action) => {
      switch (action.type) {
        case GET_TREE_DATA:
          return state
        case GET_TREE_DATA_SUCCESS:
          return { ...state, tree: action.trees }
        case GET_TREE_DATA_FAIL:
          return { ...state, error: action.error }
        default:
          return state
      }
  }