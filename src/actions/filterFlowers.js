export const FILTER_FLOWERS = 'FILTER_FLOWERS';

export const filterFlowers = filteredFlowers => dispatch => {
    return dispatch({
        type: FILTER_FLOWERS,
        payload: filteredFlowers
    })
}