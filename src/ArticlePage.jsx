import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchArticle } from "./api";
import Comments from "./Comments";

export default function ArticlePage() {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchArticle(article_id).then(({ data: { article } }) => {
      setArticle(article);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="fullArticle">
      <Link className="topicLink" to={`/${article.topic}`}>
        <h4 className="topic">{article.topic}</h4>
      </Link>
      <h4>{`Posted by ${article.author}`}</h4>
      <h1>{article.title}</h1>
      <h4>{article.body}</h4>
      <h5>{article.created_at}</h5>
      <Comments article_id={article_id}></Comments>
    </div>
  );
}
