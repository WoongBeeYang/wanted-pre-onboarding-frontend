import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

export const signUp = (email, password) => {
  const temp = api.post({
    url: "auth/signup",
    Headers : {
      "Content-Type":"application/json"
    },
    Body : {
      email : email,
      password : password
    }
  })
  return temp
}
