import axios from "axios";

//BASE
const ncNewsApi = axios.create({
  baseURL: "https://be-nc-news-5kz4.onrender.com/api",
});

//ARTICLES
export const fetchArticles = (topic, sort_by, order) => {
  return ncNewsApi.get("/articles", { params: { topic, sort_by, order } });
};

export const fetchArticle = (article_id) => {
  return ncNewsApi.get(`/articles/${article_id}`);
};

export const patchArticle = (article_id, inc_votes) => {
  return ncNewsApi
    .patch(`/articles/${article_id}`, { inc_votes })
    .then(({ data: { article } }) => {
      return article;
    });
};

//TOPICS
export const fetchTopics = () => {
  return ncNewsApi.get("/topics");
};

//COMMENTS
export const fetchCommentsByArticleId = (article_id) => {
  return ncNewsApi.get(`/articles/${article_id}/comments`);
};

export const addCommentByArticleId = (article_id, newComment) => {
  return ncNewsApi.post(`/articles/${article_id}/comments`, newComment);
};

export const deleteCommentByCommentId = (comment_id) => {
  return ncNewsApi.delete(`/comments/${comment_id}`);
};

//USERS
