//action creator for google doc

import config from "../Helpers/config"
import load from "../Helpers/shrubs.js"
export const GET_SHRUB_DATA = "GET_SHRUB_DATA"
export const GET_SHRUB_DATA_SUCCESS = "GET_SHRUB_DATA_SUCCESS"
export const GET_SHRUB_DATA_FAIL = "GET_SHRUB_DATA_FAIL"


export const getShrubData = () => dispatch => {
  dispatch({ type: GET_SHRUB_DATA })

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
      const shrubs = data.shrub

      dispatch({ type: GET_SHRUB_DATA_SUCCESS, shrubs })
    } else {
      dispatch({ type: GET_SHRUB_DATA_FAIL, error })
    }
  }

  window.gapi.load("client", initClient)
}