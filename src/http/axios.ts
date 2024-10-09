import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    "Content-type": "application/json",
    Authorization: `Client-ID MuWmtIbpysmGv0wbPbfcuoTfqQ60c8rGSRLlr4-Vhb4`,
  },
});

export default apiClient;
