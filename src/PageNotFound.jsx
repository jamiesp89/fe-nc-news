import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

export default function PageNotFound() {
  return (
    <Stack sx={{ mt: 10 }} alignItems={"center"}>
      <Typography variant="h3">404 Page not found</Typography>
    </Stack>
  );
}
