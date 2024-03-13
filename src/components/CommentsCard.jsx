import { formatAPIDate } from "./Utils";
import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { IconContext } from "react-icons";

export function CommentsCard({ comment, user, onDelete }) {
  const { body, author, votes, created_at } = comment;
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = () => {
    onDelete(comment.comment_id);
    setIsDeleted(true);
  };

  return (
    <section className="comment-card">
      <div className="comments-container">
        <div className="comments-top-container">
          <div className="comment-card-author">
            {author} Commented on {formatAPIDate(created_at)}
          </div>
          {user.username === author && (
            <div className="delete-button-container">
              <IconContext.Provider value={{ color: "black" }}>
                <button onClick={handleDelete}>
                  <MdDeleteForever size={20} />
                </button>
              </IconContext.Provider>
            </div>
          )}
        </div>
        <div className="comment-card-body">{body}</div>
        <div className="comment-card-votes">Votes: {votes}</div>
      </div>
    </section>
  );
}
