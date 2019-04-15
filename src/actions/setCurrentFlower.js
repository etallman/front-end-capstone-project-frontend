export const setCurrentFlower = (flowerData) => (dispatch) => {
    dispatch({type: SETCURRENTFLOWER, flower: flowerData})
}

export const SETCURRENTFLOWER = 'SETCURRENTFLOWER';