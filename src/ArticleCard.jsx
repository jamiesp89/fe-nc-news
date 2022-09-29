import Link from "@mui/material/Link";
import { timeAgo } from "./utils/timeAgo";
import Votes from "./Votes";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

export default function ArticleCard({ article }) {
  return (
    <Card variant="outlined">
      <Stack direction={"row"}>
        <Votes article={article}></Votes>
        <Stack sx={{ mt: 1 }}>
          <Link href={`/articles/${article.article_id}`}>
            <Typography color={"text.primary"} variant="h5">
              {article.title}
            </Typography>
          </Link>

          <Link href={`/${article.topic}`}>
            <Typography variant="subtitle1">{article.topic}</Typography>
          </Link>
          <Typography variant="subtitle1">
            {`Posted by ${article.author} ${timeAgo(article.created_at)}`}
          </Typography>
          <Typography variant="subtitle1">{`${article.comment_count} comments`}</Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
