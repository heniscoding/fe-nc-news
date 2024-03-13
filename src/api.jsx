import axios from "axios";

const instance = axios.create({
  baseURL: "https://be-nc-news-yvgn.onrender.com/api",
});

export function getArticles() {
  return instance.get("/articles");
}

export function getArticleById(article_id) {
  return instance.get(`/articles/${article_id}`);
}

export function getCommentsByArticleId(article_id) {
  return instance.get(`/articles/${article_id}/comments`);
}

export function updateVoteByArticleId(article_id, inc_votes) {
  return instance.patch(`/articles/${article_id}`, { inc_votes });
}

export function postCommentByArticleId(article_id, username, body) {
  return instance.post(`/articles/${article_id}/comments`, { username, body });
}

export function deleteCommentById(comment_id) {
  return instance.delete(`/comments/${comment_id}`)
}