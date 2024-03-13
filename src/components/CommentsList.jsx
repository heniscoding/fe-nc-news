import { useEffect, useState } from "react";
import Loading from "./Loading";
import { getCommentsByArticleId, deleteCommentById } from "../api";
import { CommentsCard } from "./CommentsCard";

export default function CommentsList({ article_id, refreshComments, user }) {
  const [comments, setComments] = useState(null);

  useEffect(() => {
    const fetchComments = () => {
      getCommentsByArticleId(article_id)
        .then(({ data }) => {
          setComments(data.comments);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchComments();
  }, [article_id, refreshComments]);

  if (comments === null) {
    return <Loading />;
  }

  const handleDeleteComment = (commentId) => {
    deleteCommentById(commentId)
      .then(() => {
        setComments((prevComments) =>
          prevComments.filter((comment) => comment.comment_id !== commentId)
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {comments.map((comment) => (
        <CommentsCard
          key={comment.comment_id}
          comment={comment}
          user={user}
          onDelete={handleDeleteComment}
        />
      ))}
    </>
  );
}
