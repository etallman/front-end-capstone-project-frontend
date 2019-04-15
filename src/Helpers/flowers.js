import config from "./config.js";

export default function load(callback) {
  window.gapi.client.load("sheets", "v4", () => {
    window.gapi.client.sheets.spreadsheets.values
      .get({
        spreadsheetId: config.spreadsheetId,
        range: "flowers!A3:K"
      })
      .then(
        response => {
          const data = response.result.values;
          const flowers =
            data.map(flowers => ({
              name: flowers[0],
              color: flowers[1],
              size: flowers[2],
              image: flowers[3],
              type: flowers[4],
              states: flowers[5],
              sun: flowers[6],
              site: flowers[7],
              description: flowers[8],
              blooms: flowers[9],
              amazon: flowers[10]
            })) || [];
          callback({
            flowers
          });
        },
        response => {
          callback(false, response.result.error);
        }
      );
  });
}