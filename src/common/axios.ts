import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000",
  timeout: 5000, // Timeout if necessary
  headers: {
    "Content-Type": "application/json",
  },
});

export { axiosInstance };
