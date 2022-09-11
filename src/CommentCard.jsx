export default function CommentCard({ comment }) {
  return (
    <div className="commentCard">
      <h5>{comment.body}</h5>
      <h5>{comment.votes}</h5>
    </div>
  );
}
