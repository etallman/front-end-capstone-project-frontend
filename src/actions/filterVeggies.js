export const FILTER_VEGGIES = "FILTER_VEGGIES";

export const filterVeggies = filteredVeggies => dispatch => {
  return dispatch({
    type: FILTER_VEGGIES,
    payload: filteredVeggies
  });
};
