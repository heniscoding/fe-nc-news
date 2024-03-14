import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import {
  getArticleById,
  updateVoteByArticleId,
  getCommentsByArticleId,
} from "../api";
import { formatAPIDate } from "./Utils";
import CommentsList from "./CommentsList";
import Loading from "./Loading";
import CommentForm from "./CommentForm";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";

function ArticleDetails({ user }) {
  const [article, setArticle] = useState(null);
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);
  const [hasVoted, setHasVoted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  const refreshComments = () => {
    getCommentsByArticleId(article_id)
      .then((response) => {
        setComments(response.data.comments);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id)
      .then((response) => {
        setArticle(response.data.article);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [article_id]);

  useEffect(() => {
    refreshComments();
  }, [article_id]);

  const handleVote = (inc_votes) => {
    if (!hasVoted) {
      setArticle((prevArticle) => ({
        ...prevArticle,
        votes: prevArticle.votes + inc_votes,
      }));
      setHasVoted(true);

      updateVoteByArticleId(article_id, inc_votes)
        .then((response) => {})
        .catch((error) => {
          setArticle((prevArticle) => ({
            ...prevArticle,
            votes: prevArticle.votes - inc_votes,
          }));
          setHasVoted(false);
          console.log(error);
          setError("Failed to vote. Please try again.");
        });
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="article-section">
      <h1 className="full-article-title">{article.title}</h1>
      <div className="author-date-container">
        Written by {article.author} on {formatAPIDate(article.created_at)}
      </div>

      <Link to={`/articles?topic=${article.topic}`}>
        <div className="full-article-topic">Category: {article.topic}</div>
      </Link>
      <div className="full-article-votes">
        Votes: {article.votes}
        <div className="vote-buttons">
          <button onClick={() => handleVote(1)} disabled={hasVoted}>
            <FaRegThumbsUp />
          </button>
          <button onClick={() => handleVote(-1)} disabled={hasVoted}>
            <FaRegThumbsDown />
          </button>
        </div>
      </div>
      {error && <p className="error-message">{error}</p>}

      <div className="image-container">
        <img
          className="full-article-img"
          src={article.article_img_url}
          alt="Article Image"
        />
      </div>
      <div className="full-article-body">{article.body}</div>

      <div className="comments-section">
        <h2 className="comments-section-header">Comments</h2>
        <CommentForm
          articleId={article_id}
          user={user}
          refreshComments={refreshComments}
        />
        <CommentsList
          article_id={article_id}
          user={user}
          comments={comments}
          refreshComments={refreshComments}
        />
      </div>
    </section>
  );
}

export default ArticleDetails;
