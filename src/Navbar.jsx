import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { fetchTopics } from "./api";
import { userContext } from "./contexts/userContext";

const Navbar = () => {
  const { loggedInUser } = useContext(userContext);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetchTopics().then(({ data: { topics } }) => {
      setTopics(topics);
    });
  }, []);

  return (
    <nav className="navbar">
      <Link to={`/`} className="title">
        NC News
      </Link>
      <ul className="links">
        {topics.map((topic) => {
          return (
            <li key={topic.slug}>
              <Link to={`/${topic.slug}`}>{topic.slug}</Link>
            </li>
          );
        })}
      </ul>
      <span>
        {loggedInUser.username}
        <img
          className="nav-img-avatar"
          src={loggedInUser.avatar_url}
          alt={loggedInUser.username}
        />
      </span>
    </nav>
  );
};

export default Navbar;
