import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../api";

function NewsTicker() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles()
      .then((response) => {
        setArticles(response.data.articles);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
      });
  }, []);

  const handleMouseEnter = () => {
    document.querySelector(".news-ticker").classList.add("paused");
  };

  const handleMouseLeave = () => {
    document.querySelector(".news-ticker").classList.remove("paused");
  };

  return (
    <div
      className="news-ticker-container fixed-top"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="news-ticker">
        <ul>
          {articles.map((article) => (
            <li key={article.article_id}>
              <Link to={`/articles/${article.article_id}`}>{article.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NewsTicker;
