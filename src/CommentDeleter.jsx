import { useContext } from "react";
import { userContext } from "./contexts/userContext";
import { deleteCommentByCommentId } from "./api";

export default function CommentDeleter({ comment, setCommentsNeedUpdating }) {
  const { loggedInUser } = useContext(userContext);
  const { username } = loggedInUser;
  const { comment_id, author } = comment;

  if (author === username) {
    const handleDelete = (comment_id) => {
      deleteCommentByCommentId(comment_id).then(() => {
        setCommentsNeedUpdating(true);
      });
    };

    return (
      <button onClick={() => handleDelete(comment_id)}>Delete comment</button>
    );
  }
}
