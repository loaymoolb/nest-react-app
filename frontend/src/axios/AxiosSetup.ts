import axios from "axios";

const token: string = "";

const custom_axios = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    Authorization: "Bearer " + token,
    Accept: "*/*",
    "Content-Type": "application/json",
    timeout: 5000,
  }
})

export default custom_axios;