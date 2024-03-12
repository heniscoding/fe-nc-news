import { useEffect, useState } from "react";
import Loading from "./Loading";
import { getCommentsByArticleId } from "../api";
import { CommentsCard } from "./CommentsCard"

export default function CommentsList({ article_id }) {
  const [comments, setComments] = useState(null);

  useEffect(() => {
    getCommentsByArticleId(article_id)
      .then(({ data }) => {
        setComments(data.comments);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (comments === null) {
    return <Loading />;
  }

  return (
    <>
      {comments.map((comment) => (
        <CommentsCard key={comment.comment_id} comment={comment} />
      ))}
    </>
  );
}
