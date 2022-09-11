import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCommentsByArticleId } from "./api";
import CommentCard from "./CommentCard";

export default function Comments() {
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    fetchCommentsByArticleId(article_id).then(({ data: { comments } }) => {
      console.log(comments);
      setComments(comments);
    });
  }, [article_id]);

  return (
    <div className="commentList">
      <h4>Comments</h4>
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
