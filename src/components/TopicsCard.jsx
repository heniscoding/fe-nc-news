import { Link } from "react-router-dom";

function TopicCard({ topicSlug, topicDescription }) {
  return (
    <div className="topic-card-container">
      <Link to={`/articles?topic=${topicSlug}`}>
        <section className="topic-card">
          <div className="topic-name">
            <h1>{topicSlug}</h1>
          </div>
          <div className="topic-description">{topicDescription}</div>
        </section>
      </Link>
    </div>
  );
}

export default TopicCard;
