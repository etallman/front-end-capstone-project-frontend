import { store } from "../index"

export const LOAD_SUCCESS = 'LOAD SUCCESS'
export const LOAD_ERROR = 'LOAD ERROR'

export const loadLayout = id => dispatch => {
    let userLayouts = [...store.getState().grid.userLayouts]
    userLayouts.forEach(entry=> {
        if(entry.id === id) {
            dispatch({
                type: LOAD_SUCCESS,
                payload: entry
            })
        }
    })

}

export const preloadUserLayout = userLayouts => dispatch =>{
    let maxDate = 0
    let id
    if (userLayouts.length !== 0) {
      userLayouts.forEach(entry => {
        if(entry.updated > maxDate) {
            id = entry.id
            maxDate = entry.updated
        }
      })
      return dispatch(loadLayout(id))
    }
}