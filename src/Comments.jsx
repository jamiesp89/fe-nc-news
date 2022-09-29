import { Stack } from "@mui/material";
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
    <Stack spacing={2}>
      <CommentAdder
        article_id={article_id}
        setCommentsNeedUpdating={setCommentsNeedUpdating}
      />
      <Stack spacing={1}>
        {comments.map((comment) => {
          return (
            <CommentCard
              comment={comment}
              key={comment.comment_id}
              setCommentsNeedUpdating={setCommentsNeedUpdating}
            ></CommentCard>
          );
        })}
      </Stack>
    </Stack>
  );
}
