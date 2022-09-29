import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticle } from "./api";
import Comments from "./Comments";
import Votes from "./Votes";
import ErrorPage from "./ErrorPage";
import { Container } from "@mui/system";
import { Stack, Typography, Link } from "@mui/material";

export default function ArticlePage() {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    fetchArticle(article_id)
      .then(({ data: { article } }) => {
        setArticle(article);
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
          setIsLoading(false);
        }
      );
  }, [article_id]);

  if (error) return <ErrorPage error={error} />;
  if (isLoading) return <p>Loading...</p>;

  return (
    <Container sx={{ my: 3 }}>
      <Stack spacing={2}>
        <Stack direction="row" spacing={2}>
          <Votes article={article}></Votes>
          <Stack>
            <Link href={`/${article.topic}`}>
              <Typography>{article.topic}</Typography>
            </Link>
            <Typography
              sx={{ mb: 1 }}
            >{`Posted by ${article.author}`}</Typography>
            <Typography sx={{ mb: 1 }} variant="h3">
              {article.title}
            </Typography>
            <Typography variant="body1">{article.body}</Typography>
            <Typography variant="body2">{article.created_at}</Typography>
          </Stack>
        </Stack>
        <Comments article_id={article_id}></Comments>
      </Stack>
    </Container>
  );
}
