import { Box, Button, Container, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { fetchArticles } from "./api";
import ArticleCard from "./ArticleCard";
import ErrorPage from "./ErrorPage";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Stack } from "@mui/material";

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
  if (isLoading)
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    );

  const handleSortBy = (event) => {
    setSearchParams({ sort_by: event.target.value });
  };

  const handleOrderBy = (event) => {
    if (order === null || order === "DESC") {
      setSearchParams({
        sort_by: sort_by ? sort_by : "created_at",
        order: "ASC",
      });
    } else {
      setSearchParams({
        sort_by: sort_by ? sort_by : "created_at",
        order: "DESC",
      });
    }
  };

  return (
    <Container sx={{ my: 3 }}>
      <FormControl sx={{ mb: 3 }} size="small">
        <InputLabel id="sort_by">Sort by</InputLabel>
        <Select
          id="sort_by"
          label={sort_by ? sort_by : "created_at"}
          value={sort_by ? sort_by : "created_at"}
          onChange={handleSortBy}
        >
          <MenuItem value="created_at">Date</MenuItem>
          <MenuItem value="comment_count">Comments</MenuItem>
          <MenuItem value="votes">Votes</MenuItem>
        </Select>
      </FormControl>
      <Button value={order ? order : "DESC"} onClick={handleOrderBy}>
        {order ? order : "DESC"}
      </Button>
      <Stack spacing={1}>
        {articles.map((article) => {
          return <ArticleCard article={article} key={article.article_id} />;
        })}
      </Stack>
    </Container>
  );
}
