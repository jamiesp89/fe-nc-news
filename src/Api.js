import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://be-nc-news-1.herokuapp.com/api",
});

export const fetchArticles = (topic) => {
  return ncNewsApi.get("/articles", { params: { topic } });
};
