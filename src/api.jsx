import axios from "axios";

const BASE_URL = "https://be-nc-news-yvgn.onrender.com/api";

export function getArticles() {
  return axios.get(BASE_URL + "/articles");
}

export function getArticleById(article_id) {
  return axios.get(BASE_URL + "/articles/" + article_id)
}

export function getCommentsByArticleId(article_id){
  return axios.get(BASE_URL + "/articles/" + article_id + "/comments")
}
