import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { fetchArticles } from "./api";
import ArticleCard from "./ArticleCard";
import ErrorPage from "./ErrorPage";

export default function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { topic } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(null);

  const sort_by = searchParams.get("sort_by");
  const order = searchParams.get("order");

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    fetchArticles(topic, sort_by, order)
      .then(({ data: { articles } }) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch(
        ({
          response: {
            data: { msg },
            status,
          },
        }) => {
          setError({ status, msg });
        }
      );
  }, [topic, sort_by, order]);

  if (error) return <ErrorPage error={error} />;
  if (isLoading) return <p>Loading...</p>;

  const handleSortBy = (event) => {
    setSearchParams({ sort_by: event.target.value });
  };

  return (
    <>
      <label>
        Sort by
        <select
          value={sort_by ? sort_by : "created_at"}
          onChange={handleSortBy}
        >
          <option value="created_at">Date</option>
          <option value="comment_count">Comments</option>
          <option value="votes">Votes</option>
        </select>
      </label>
      <div className="article_list">
        <ul>
          {articles.map((article) => {
            return <ArticleCard article={article} key={article.article_id} />;
          })}
        </ul>
      </div>
    </>
  );
}
