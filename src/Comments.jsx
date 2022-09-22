import { useEffect, useState } from "react";
import { fetchCommentsByArticleId } from "./api";
import CommentAdder from "./CommentAdder";
import CommentCard from "./CommentCard";

export default function Comments({ article_id }) {
  const [comments, setComments] = useState([]);
  const [commentsNeedUpdating, setCommentsNeedUpdating] = useState(false);

  useEffect(() => {
    fetchCommentsByArticleId(article_id).then(({ data: { comments } }) => {
      setComments(comments);
      setCommentsNeedUpdating(false);
    });
  }, [article_id, commentsNeedUpdating]);

  return (
    <div className="commentList">
      <CommentAdder
        article_id={article_id}
        setCommentsNeedUpdating={setCommentsNeedUpdating}
      />
      <ul>
        {comments.map((comment) => {
          return (
            <CommentCard
              comment={comment}
              key={comment.comment_id}
            ></CommentCard>
          );
        })}
      </ul>
    </div>
  );
}
