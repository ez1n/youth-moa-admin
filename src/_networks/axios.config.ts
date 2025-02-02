import axios from "axios";

const api = axios.create({
  baseURL: "https://youth-moa-server.click",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
  withCredentials: true,
});

export { api };
