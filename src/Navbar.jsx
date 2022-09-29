import {
  AppBar,
  Toolbar,
  Typography,
  List,
  ListItem,
  Avatar,
} from "@mui/material";
import { useEffect, useState, useContext } from "react";
import { fetchTopics } from "./api";
import { userContext } from "./contexts/userContext";
import Link from "@mui/material/Link";
import { Stack } from "@mui/system";

const Navbar = () => {
  const { loggedInUser } = useContext(userContext);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetchTopics().then(({ data: { topics } }) => {
      setTopics(topics);
    });
  }, []);

  return (
    <AppBar position="static">
      <Toolbar>
        <Link href={`/`}>
          <Typography sx={{ mt: 1 }} color={"text.primary"} variant="h2">
            NC News
          </Typography>
        </Link>
        <List component={Stack} direction={"row"}>
          {topics.map((topic) => {
            return (
              <ListItem>
                <Link href={`/${topic.slug}`}>
                  <Typography color={"text.primary"}>{topic.slug}</Typography>
                </Link>
              </ListItem>
            );
          })}
        </List>
        <Typography>{loggedInUser.username}</Typography>
        <Avatar
          src={loggedInUser.avatar_url}
          alt={loggedInUser.username}
          sx={{ width: 56, height: 56 }}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
