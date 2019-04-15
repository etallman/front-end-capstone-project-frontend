import { store } from "../index"
import { width } from "../components/Grid/styles"

export const SUBTRACT_GRID = "SUBTRACT_GRID"

export const subtractGrid = id => dispatch => {
  const minRows = store.getState().grid.numRows > 1 && id === "rows"
  const minCols = store.getState().grid.numCols > 1 && id === "col"
  const removalAllowed = minRows || minCols

  if (removalAllowed) {
    let newGrid = Array.from(store.getState().grid.grid)
    let newRow = 0
    let newCol = 0
    let newWidth = width

    if (id === "col") {
      newCol = 1
      newGrid.forEach(row => row.pop())
    } else {
      newRow = 1
      newWidth = 0
      newGrid.pop()
    }

    return dispatch({
      type: SUBTRACT_GRID,
      numRows: store.getState().grid.numRows - newRow,
      numCols: store.getState().grid.numCols - newCol,
      canvasWidth: store.getState().grid.canvasWidth - newWidth,
      grid: newGrid
    })
  }
}
