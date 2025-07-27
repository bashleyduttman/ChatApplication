import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development"
    ? "http://localhost:5001/api"
    : "https://chatapplication2-5rnm.onrender.com/api",  // ✅ your deployed backend URL
  withCredentials: true,
});
