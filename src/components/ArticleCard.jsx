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

  return (
    <section className="article-card">
      <img className="article-card-img" src={article_img_url} alt="" />
      <div className="flex-container">
        <div className="article-card-title">{title}</div>
        <div className="article-card-author">Created by <b>{author}</b> on <b>{formatAPIDate( created_at )}</b></div>
        <div className="article-card-topic">Topic: <b>{topic}</b></div>
        <div className="article-card-votes">Voted on <b>{votes}</b> times</div>
        <div className="article-card-comment-count">
          Commented on <b>{comment_count}</b> times
        </div>
      </div>
    </section>
  );
}

export default ArticleCard;
