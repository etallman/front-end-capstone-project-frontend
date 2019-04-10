import config from "./config.js"

export default function load(callback) {
    window.gapi.client.load("sheets", "v4", () => {
      window.gapi.client.sheets.spreadsheets.values
        .get({
          spreadsheetId: config.spreadsheetId,
          range: "shrubs!A2:H"
        })
        .then(
          response => {
            console.log(response)
            const data = response.result.values
            const shrub =
              data.map(shrubs => ({
                name: shrubs[0],
                height: shrubs[1],
                state: shrubs[5],
                description: shrubs[3],
                image: shrubs[7],
                size: shrubs[2],
                type: shrubs[6]
              })) || []
            callback({
              shrub
            })
          },
          response => {
            callback(false, response.result.error)
          }
        )
    })
  }