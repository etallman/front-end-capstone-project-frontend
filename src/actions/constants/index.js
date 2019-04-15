export const domain = "https://protected-eyrie-19608.herokuapp.com"
//export const domain = "https://localhost:3000"
//export const domain = "https://localhost:4000"
export const jsonHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json"
}

export const handleJsonResponse = res => {
  if (res.ok) {
    return res.json()
  }
  return res.json().then(result => {
    throw result
  })
}
