import { store } from "../index"
import { width } from "../components/Grid/styles"

export const INIT_GRID = "INIT_GRID"

export const initGrid = () => dispatch => {
    let grid = Array(store.getState().grid.numRows).fill(null).map(() => Array(store.getState().grid.numCols).fill({ pictureLink: null }))
    let initWidth = store.getState().grid.numCols * width

    return dispatch({
            type: INIT_GRID,
            grid: grid,
            canvasWidth: initWidth
        })
}

