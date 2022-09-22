import { useState, useContext } from "react";
import { addCommentByArticleId } from "./api";
import { userContext } from "./contexts/userContext";

export default function CommentAdder({ article_id, setCommentsNeedUpdating }) {
  const { loggedInUser } = useContext(userContext);
  const { username } = loggedInUser;

  const [comment, setComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newComment = { username, comment };

    setComment("");

    addCommentByArticleId(article_id, newComment).then(() => {
      setCommentsNeedUpdating(true);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="comment">Add comment</label>
      <input
        id="comment"
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></input>
      <input type="submit" value="Submit" />
    </form>
  );
}
