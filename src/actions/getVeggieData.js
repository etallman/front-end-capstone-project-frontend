//action creator for google doc

import config from "../Helpers/config";
import load from "../Helpers/veggies.js";
export const GET_VEGGIE_DATA = "GET_VEGGIE_DATA";
export const GET_VEGGIE_DATA_SUCCESS = "GET_VEGGIE_DATA_SUCCESS";
export const GET_VEGGIE_DATA_FAIL = "GET_VEGGIE_DATA_FAIL";


export const getVeggieData = () => dispatch => {
  dispatch({ type: GET_VEGGIE_DATA });

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
      const veggie = data.veggies;

      dispatch({ type: GET_VEGGIE_DATA_SUCCESS, veggie });
    } else {
      dispatch({ type: GET_VEGGIE_DATA_FAIL, error });
    }
  };

  window.gapi.load("client", initClient);
};