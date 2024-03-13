import { useState } from "react";
import { postCommentByArticleId } from "../api";

function CommentForm({ articleId, user, refreshComments }) {
  const [comment, setComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [comments, setComments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const username = user?.username;

    const trimmedComment = comment.trim();

    if (!trimmedComment) {
      setMessage("Comment cannot be empty.");
      setIsLoading(false);
      return;
    }

    postCommentByArticleId(articleId, username, trimmedComment)
      .then(({ data }) => {
        setComments([...comments, data.comment]);
        setMessage("Comment posted successfully!");
        setComment("");
        refreshComments();
      })
      .catch((error) => {
        setMessage("Failed to post comment. Please try again.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="comment-form">
      <div className="logged-in-user-text">Logged in as {user.username}</div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Enter your comment..."
          rows={5}
          required
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Posting..." : "Post Comment"}
        </button>
      </form>
      {message && (
        <p className={message.includes("Failed") ? "error" : ""}>{message}</p>
      )}
    </div>
  );
}

export default CommentForm;
