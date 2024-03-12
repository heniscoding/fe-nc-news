import { formatAPIDate } from "./Utils";

export function CommentsCard({ comment }) {
  const { body, author, votes, created_at
  } = comment;

  return (
    <section className="comment-card">
      <div className="flex-container">
         <div className="comment-card-author">{author} Commented on {formatAPIDate(created_at)}</div>
        <div className="comment-card-body">{body}</div>
        <div className="comment-card-votes">Votes: {votes}</div>
      </div>
    </section>
  );
}
