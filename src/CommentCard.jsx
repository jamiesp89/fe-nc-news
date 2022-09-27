import CommentDeleter from "./CommentDeleter";
import { timeAgo } from "./utils/timeAgo";

export default function CommentCard({ comment, setCommentsNeedUpdating }) {
  return (
    <div className="commentCard">
      <h5>{comment.body}</h5>
      <h5>{comment.votes}</h5>
      <h5>{`Posted by ${comment.author} ${timeAgo(comment.created_at)}`}</h5>
      <CommentDeleter
        comment={comment}
        setCommentsNeedUpdating={setCommentsNeedUpdating}
      ></CommentDeleter>
    </div>
  );
}
