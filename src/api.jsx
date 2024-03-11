import axios from "axios";

const BASE_URL = "https://be-nc-news-yvgn.onrender.com/api";

export function getArticles() {
  return axios.get(BASE_URL + "/articles");
}
