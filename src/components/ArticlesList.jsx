import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import Loading from "./Loading";
import { getArticles } from "../api";

function ArticlesList() {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    getArticles()
      .then(({ data }) => {
        setArticles(data.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (articles === null) {
    return <Loading />;
  }

  return (
    <>
      {articles.map((article) => (
        <ArticleCard key={article.article_id} article={article} />
      ))}
    </>
  );
}

export default ArticlesList;
