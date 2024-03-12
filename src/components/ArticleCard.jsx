import { formatAPIDate } from "./Utils";

function ArticleCard({ article }) {
  const {
    author,
    title,
    topic,
    created_at,
    votes,
    article_img_url,
    comment_count,
  } = article;

  console.log(created_at)

  return (
    <section className="article-card">
      <img className="article-card-img" src={article_img_url} alt="" />
      <div className="flex-container">
        <div className="article-card-title">{title}</div>
        <div className="article-card-author">Author: {author}</div>
        <div className="article-card-topic">Category: {topic}</div>
        <div className="article-card-created">
          Created: {formatAPIDate( created_at )}
        </div>
        <div className="article-card-votes">Votes: {votes}</div>
        <div className="article-card-comment-count">
          Comments: {comment_count}
        </div>
      </div>
    </section>
  );
}

export default ArticleCard;
