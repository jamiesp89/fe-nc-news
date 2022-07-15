import { link } from "react-router-dom";

export default function ArticleCard({ article }) {
  return (
    <div className="articleCard">
      <Link to={`/Articles/${article.article_id}`}>
        <div>{article.title}</div>
      </Link>
      <h1>{article.title}</h1>
      <h2>{article.topic}</h2>
      <h3>{article.author}</h3>
      <h4>{article.created_at}</h4>
      <h5>{article.votes}</h5>
      <h6>{article.comment_count}</h6>
    </div>
  );
}
