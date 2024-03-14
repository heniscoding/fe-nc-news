import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import Loading from "./Loading";
import { getArticles, getArticlesByTopic } from "../api";
import { Link, useSearchParams } from "react-router-dom";

function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const topic = searchParams.get("topic");
  useEffect(() => {
    const fetchArticles = () => {
      if (topic) {
        getArticlesByTopic(topic)
          .then(({ data }) => {
            setArticles(data.articles);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        getArticles()
          .then(({ data }) => {
            setArticles(data.articles);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    };

    fetchArticles();
  }, [searchParams]);

  if (articles === null) {
    return <Loading />;
  }

  function removeTopic() {
    if (searchParams.has("topic")) {
      searchParams.delete("topic");
      setSearchParams(searchParams);
    }
  }

  function showButton() {
    if (searchParams.size === 0) {
      return;
    }
    return (
      <button onClick={removeTopic} className="remove-topic-button">
        Clear {topic} Topic
      </button>
    );
  }

  return (
    <>
      {showButton()}
      {articles.map((article) => (
        <Link
          key={article.article_id}
          className="link-without-color"
          to={`/articles/${article.article_id}`}
        >
          <ArticleCard article={article} />
        </Link>
      ))}
    </>
  );
}

export default ArticlesList;
