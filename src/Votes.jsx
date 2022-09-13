import { useState } from "react";
import { patchArticle } from "./api";

export default function Votes({ article }) {
  const [score, setScore] = useState(0);
  const [totalVotes, setTotalVotes] = useState(article.votes);
  let inc_vote = 0;

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

  return (
    <div>
      <button
        onClick={() => {
          handleVote(1);
        }}
      >
        Upvote
      </button>
      <p>{totalVotes}</p>
      <button
        onClick={() => {
          handleVote(-1);
        }}
      >
        Downvote
      </button>
    </div>
  );
}
