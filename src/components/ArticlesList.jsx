import React, { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import Loading from "./Loading";
import { getArticles, getArticlesByTopic } from "../api";
import { Link, useSearchParams } from "react-router-dom";

function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState("created_at");
  const [sortOrder, setSortOrder] = useState("desc");

  const topic = searchParams.get("topic");

  useEffect(() => {
    setLoading(true);
    setError(null);

    let articlesPromise;
    if (topic) {
      articlesPromise = getArticlesByTopic(topic).catch((error) => {
        console.error("Error fetching articles by topic:", error);
        if (error.response && error.response.status === 404) {
          setError(`Topic "${topic}" not found.`);
        } else {
          setError("Failed to fetch articles. Please try again.");
        }
        return [];
      });
    } else {
      articlesPromise = getArticles().catch((error) => {
        console.error("Error fetching articles:", error);
        setError("Failed to fetch articles. Please try again.");
        return [];
      });
    }

    articlesPromise
      .then((response) => {
        let sortedArticles = response.data.articles;
        sortedArticles = sortArticles(sortedArticles);
        setArticles(sortedArticles);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [searchParams, topic, sortBy, sortOrder]);

  const sortArticles = (articlesToSort) => {
    return articlesToSort.sort((a, b) => {
      let valueA, valueB;

      if (sortBy === "comment_count") {
        valueA = a.comment_count;
        valueB = b.comment_count;
      } else if (sortBy === "votes") {
        valueA = a.votes;
        valueB = b.votes;
      } else {
        valueA = new Date(a.created_at);
        valueB = new Date(b.created_at);
      }

      if (sortOrder === "asc") {
        return valueA - valueB;
      } else {
        return valueB - valueA;
      }
    });
  };

  const handleSortByChange = (value) => {
    setSortBy(value);
    setSearchParams((prevParams) => {
      const params = new URLSearchParams(prevParams);
      params.set("sortBy", value);
      return params;
    });
  };

  const handleSortOrderToggle = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    setSearchParams((prevParams) => {
      const params = new URLSearchParams(prevParams);
      params.set("sortOrder", sortOrder === "asc" ? "desc" : "asc");
      return params;
    });
  };

  function removeTopic() {
    if (searchParams.has("topic")) {
      searchParams.delete("topic");
      setSearchParams(searchParams);
    }
  }

  function showButton() {
    if (!topic) {
      return null;
    }
    return (
      <button onClick={removeTopic} className="remove-topic-button">
        Clear {topic} Topic
      </button>
    );
  }

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <div className="sort-container">
        <label className="sort-label">Sort by:</label>
        <select
          className="sort-select"
          value={sortBy}
          onChange={(e) => handleSortByChange(e.target.value)}
        >
          <option value="created_at">Date</option>
          <option value="comment_count">Comment Count</option>
          <option value="votes">Votes</option>
        </select>
        <button className="sort-button" onClick={handleSortOrderToggle}>
          ASC / DESC
        </button>
        <div>{showButton()}</div>
      </div>
      {articles.map((article) => (
        <Link
          key={article.article_id}
          className="link-without-color"
          to={`/articles/${article.article_id}`}
        >
          <ArticleCard article={article} />
        </Link>
      ))}
    </div>
  );
}

export default ArticlesList;
