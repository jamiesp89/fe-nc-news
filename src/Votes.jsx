import { useState } from "react";

export default function Votes({ article }) {
  const [score, setScore] = useState(0);

  const handleVote = (vote) => {
    if (vote === score) {
      setScore(score - vote);
    } else if (-vote === score) {
      setScore(score + 2 * vote);
    } else {
      setScore(score + vote);
    }
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
      <p>{score}</p>
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
