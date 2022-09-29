import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

export default function ErrorPage({ error }) {
  return (
    <Stack sx={{ mt: 10 }} alignItems={"center"}>
      <Typography variant="h3">{`${error.status}: ${error.msg}`}</Typography>
    </Stack>
  );
}
