import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import ArticleList from "./ArticleList";
import ArticlePage from "./ArticlePage";
import { userContext } from "./contexts/userContext";
import { useState } from "react";

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    username: "tickle122",
    name: "Tom Tickle",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953",
  });

  return (
    <userContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<ArticleList />} />
            <Route path="/:topic" element={<ArticleList />} />
            <Route path="articles/:article_id" element={<ArticlePage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
