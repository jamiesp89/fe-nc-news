import CommentDeleter from "./CommentDeleter";

export default function CommentCard({ comment, setCommentsNeedUpdating }) {
  return (
    <div className="commentCard">
      <h5>{comment.author}</h5>
      <h5>{comment.body}</h5>
      <h5>{comment.votes}</h5>
      <CommentDeleter
        comment={comment}
        setCommentsNeedUpdating={setCommentsNeedUpdating}
      ></CommentDeleter>
    </div>
  );
}
