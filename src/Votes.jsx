import { useState } from "react";
import { patchArticle } from "./api";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import IconButton from "@mui/material/IconButton";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

export default function Votes({ article }) {
  const [score, setScore] = useState(0);
  const [totalVotes, setTotalVotes] = useState(article.votes);
  let inc_vote = 0;
  let upVote = "";
  let downVote = "";

  const handleVote = (vote) => {
    if (vote === score) {
      setScore(score - vote);
      inc_vote = -vote;
    } else if (-vote === score) {
      setScore(score + 2 * vote);
      inc_vote = 2 * vote;
    } else {
      setScore(score + vote);
      inc_vote = vote;
    }

    patchArticle(article.article_id, inc_vote).then((article) => {
      console.log(article.votes);
      setTotalVotes(article.votes);
    });
  };

  if (score === 1) {
    upVote = "primary";
  } else if (score === -1) {
    downVote = "primary";
  } else {
    upVote = "";
    downVote = "";
  }

  return (
    <Stack
      sx={{
        direction: "column",
        alignItems: "flex-start",
      }}
    >
      <IconButton
        onClick={() => {
          handleVote(1);
        }}
      >
        <ArrowUpwardIcon color={upVote} />
      </IconButton>
      <Typography sx={{ ml: 1.85, mt: 0.5 }}>{totalVotes}</Typography>
      <IconButton
        onClick={() => {
          handleVote(-1);
        }}
      >
        <ArrowDownwardIcon color={downVote} />
      </IconButton>
    </Stack>
  );
}
