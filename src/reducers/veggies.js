import {
  GET_VEGGIE_DATA,
  GET_VEGGIE_DATA_SUCCESS,
  GET_VEGGIE_DATA_FAIL,
  FILTER_VEGGIES
} from "../actions";


const initialState = {
  veggie: [],
  error: { message: "" },
  filteredVeggies: null
};

export default (state = initialState, action) => {
    switch (action.type) {
      case GET_VEGGIE_DATA:
        return state;
      case GET_VEGGIE_DATA_SUCCESS:
        return { ...state, veggie: action.veggie };
      case GET_VEGGIE_DATA_FAIL:
        return { ...state, error: action.error };
      case FILTER_VEGGIES:
        return {
          ...state,
          filteredVeggies: action.payload
        };
      default:
        return state;
    }
};