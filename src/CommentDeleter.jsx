import { useContext } from "react";
import { userContext } from "./contexts/userContext";
import { deleteCommentByCommentId } from "./Api";
import { Button } from "@mui/material";

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
      <Button variant="outlined" onClick={() => handleDelete(comment_id)}>
        Delete comment
      </Button>
    );
  }
}
