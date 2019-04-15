import { store } from "../index"

export const DROP_PLANT = 'DROP_PLANT';

export const dropPlant = (row, col, pictureLink) => dispatch => {
    let newGrid = Array.from(store.getState().grid.grid)
    pictureLink = pictureLink !== undefined ? pictureLink:pictureLink
    newGrid[row][col].pictureLink = pictureLink
   
    return dispatch({
        type: DROP_PLANT,
        grid: newGrid,
        
    })
}