//action creator for google doc

import config from "../Helpers/config"
import load from "../Helpers/trees.js"
export const GET_TREE_DATA = "GET_TREE_DATA"
export const GET_TREE_DATA_SUCCESS = "GET_TREE_DATA_SUCCESS"
export const GET_TREE_DATA_FAIL = "GET_TREE_DATA_FAIL"


export const getTreeData = () => dispatch => {
  dispatch({ type: GET_TREE_DATA })

  const initClient = () => {
    // 2. Initialize the JavaScript client library.
    window.gapi.client
      .init({
        apiKey: config.apiKey,
        // The API key will be automatically added to the Discovery Document URLs.
        discoveryDocs: config.discoveryDocs
      })
      .then(() => {
        // 3. Initialize and make the API request.
        load(onLoad)
      })
  }

  const onLoad = (data, error) => {
    if (data) {
      const trees = data.tree

      dispatch({ type: GET_TREE_DATA_SUCCESS, trees })
    } else {
      dispatch({ type: GET_TREE_DATA_FAIL, error })
    }
  }

  window.gapi.load("client", initClient)
}