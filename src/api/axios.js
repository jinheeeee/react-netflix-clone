import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "b7ee21432e1ba576a4249533b990b3e5",
    language: "ko-KR",
  },
});

export default instance;
