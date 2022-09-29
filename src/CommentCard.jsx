import { Card, Typography } from "@mui/material";
import CommentDeleter from "./CommentDeleter";
import { timeAgo } from "./utils/timeAgo";

export default function CommentCard({ comment, setCommentsNeedUpdating }) {
  return (
    <Card variant="outlined">
      <Typography color={"primary"} variant="body2">{`Posted by ${
        comment.author
      } ${timeAgo(comment.created_at)}`}</Typography>
      <Typography variant="body1">{comment.body}</Typography>
      <Typography>{comment.votes}</Typography>
      <CommentDeleter
        comment={comment}
        setCommentsNeedUpdating={setCommentsNeedUpdating}
      ></CommentDeleter>
    </Card>
  );
}
