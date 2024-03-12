import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../api";
import { formatAPIDate } from "./Utils";
import CommentsList from "./CommentsList";

function ArticleDetails() {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id)
      .then((response) => {
        setArticle(response.data.article);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section>
      <h1 className="full-article-title">{article.title}</h1>
      <div className="author-date-container">
        Written by {article.author} on {formatAPIDate(article.created_at)}
      </div>
      <div className="full-article-topic">Category: {article.topic}</div>
      <div className="full-article-votes">Votes: {article.votes}</div>

      <div className="image-container">
        <img
          className="full-article-img"
          src={article.article_img_url}
          alt="Article Image"
        />
      </div>
      <div className="full-article-body">{article.body}</div>
      <div className="comments-section">
        <h2 ClassName="comments-section-header">Comments</h2>
        <CommentsList article_id={article_id} />
      </div>
    </section>
  );
}

export default ArticleDetails;
