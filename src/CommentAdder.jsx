import { TextField, Button } from "@mui/material";
import { Stack } from "@mui/system";
import { useState, useContext } from "react";
import { addCommentByArticleId } from "./Api";
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
      <Stack spacing={1} sx={{ mt: 1 }}>
        <TextField
          sx={{
            "& .MuiFormLabel-root": {
              color: "tertiary.main",
            },
          }}
          fullWidth
          label="Comment"
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></TextField>
        <Button variant="outlined" type="submit" value="Submit">
          Comment
        </Button>
      </Stack>
    </form>
  );
}
