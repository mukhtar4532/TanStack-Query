import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// to fetch api data
export const fetchPost = () => {
  return api.get("/posts");
};
