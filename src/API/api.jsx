import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// to fetch api data
export const fetchPost = async () => {
  const res = await api.get("/posts?_start=0&_limit=7");
  return res.status === 200 ? res.data : [];
};

// const getPosts = async () => {
//   try {
//     const res = await fetchPost();
//     res.status === 200 ? res.data : [];
//   } catch (error) {
//     console.log(error);
//     return [];
//   }
// };
