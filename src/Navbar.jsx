import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import { useEffect, useState, useContext } from "react";
import { fetchTopics } from "./Api";
import { userContext } from "./contexts/userContext";
import Link from "@mui/material/Link";
import { Stack } from "@mui/system";

const Navbar = () => {
  const { loggedInUser } = useContext(userContext);
  const [topics, setTopics] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    fetchTopics().then(({ data: { topics } }) => {
      setTopics(topics);
    });
  }, []);

  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "space-around" }}>
        <Button
          variant="contained"
          sx={{ color: "text.primary" }}
          id="basic-button"
          aria-controls={open ? "topic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          Topics
        </Button>

        <Menu
          id="topic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem component={Link} href={`/`} onClick={handleClose}>
            home
          </MenuItem>
          {topics.map((topic) => {
            return (
              <MenuItem
                component={Link}
                href={`/${topic.slug}`}
                onClick={handleClose}
              >
                {topic.slug}
              </MenuItem>
            );
          })}
        </Menu>

        <Link href={`/`}>
          <Typography
            sx={{ mb: 1 }}
            color={"text.primary"}
            variant="h2"
            className="ncnews"
            fontFamily={"Silkscreen"}
          >
            NC News
          </Typography>
        </Link>

        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography>{loggedInUser.username}</Typography>
          <Avatar
            src={loggedInUser.avatar_url}
            alt={loggedInUser.username}
            sx={{ width: 56, height: 56 }}
          />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
