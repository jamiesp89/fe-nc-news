import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticles } from "./api";
import ArticleCard from "./ArticleCard";

export default function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);
  const { topic } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchArticles(topic).then(({ data: { articles } }) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, [topic]);

  if (isLoading) return <p>Loading...</p>;
  return (
    <div className="article_list">
      <h1>article list</h1>
      <ul>
        {articles.map((article) => {
          return <ArticleCard article={article} key={article.article_id} />;
        })}
      </ul>
    </div>
  );
}
