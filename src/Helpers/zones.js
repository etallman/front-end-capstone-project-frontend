import config from "./config.js";

export default function load(callback) {
    window.gapi.client.load("sheets", "v4", () => {
      window.gapi.client.sheets.spreadsheets.values
        .get({
          spreadsheetId: config.spreadsheetId,
          range: "zones!A2:I"
        })
        .then(
          response => {
            const data = response.result.values;
            const zones =
              data.map(zones => ({
                name: zones[0],
                height: zones[1],
                state: zones[2],
                description: zones[3],
                image: zones[4],
                site: zones[5],
                type: zones[6]
              })) || [];
            callback({
              zones
            });
          },
          response => {
            callback(false, response.result.error);
          }
        );
    });
  }