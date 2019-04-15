//action creator for google doc

import config from "../Helpers/config";
import load from "../Helpers/flowers.js";
export const GET_FLOWER_DATA = "GET_FLOWER_DATA";
export const GET_FLOWER_DATA_SUCCESS = "GET_FLOWER_DATA_SUCCESS";
export const GET_FLOWER_DATA_FAIL = "GET_FLOWER_DATA_FAIL";


export const getFlowerData = () => dispatch => {
  dispatch({ type: GET_FLOWER_DATA });

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
        load(onLoad);
      });
  };

  const onLoad = (data, error) => {
    if (data) {
      const flower = data.flowers;

      dispatch({ type: GET_FLOWER_DATA_SUCCESS, flower });
    } else {
      dispatch({ type: GET_FLOWER_DATA_FAIL, error });
    }
  };

  window.gapi.load("client", initClient);
};