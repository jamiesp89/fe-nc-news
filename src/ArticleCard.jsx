import { Link } from "react-router-dom";
import Votes from "./Votes";

export default function ArticleCard({ article }) {
  return (
    <div className="articleCard">
      <Votes article={article}></Votes>
      <Link className="articleCardLink" to={`/articles/${article.article_id}`}>
        <Link className="topicLink" to={`/${article.topic}`}>
          <h4 className="topic">{article.topic}</h4>
        </Link>
        <h4 className="author">{`Posted by ${article.author}`}</h4>
        <h2>{article.title}</h2>
        <h5>{article.created_at}</h5>
        <h5>{`${article.comment_count} comments`}</h5>
      </Link>
    </div>
  );
}
