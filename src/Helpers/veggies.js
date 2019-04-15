import config from "./config.js";

export default function load(callback) {
    window.gapi.client.load("sheets", "v4", () => {
      window.gapi.client.sheets.spreadsheets.values
        .get({
          spreadsheetId: config.spreadsheetId,
          range: "veggies!A2:M"
        })
        .then(
          response => {
            const data = response.result.values;
            const veggies =
              data.map(veggies => ({
                name: veggies[0],
                start: veggies[1],
                sun: veggies[2],
                description: veggies[3],
                days: veggies[4],
                image: veggies[5],
                site: veggies[10],
                type: veggies[7],
                amazon: veggies[12]
              })) || [];
            callback({
              veggies
            });
          },
          response => {
            callback(false, response.result.error);
          }
        );
    });
  }