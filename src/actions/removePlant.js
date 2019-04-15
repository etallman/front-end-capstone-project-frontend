import { store } from "../index"

export const REMOVE_PLANT = 'REMOVE_PLANT';

export const removePlant = (row, col) => dispatch => {
    if(row !== undefined){
    let newGrid = Array.from(store.getState().grid.grid)
    newGrid[row][col].pictureLink = null
   
    return dispatch({
        type: REMOVE_PLANT,
        grid: newGrid
    })}
}