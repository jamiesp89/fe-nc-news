import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchTopics } from "./api";

const Navbar = () => {
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
    </nav>
  );
};

export default Navbar;
