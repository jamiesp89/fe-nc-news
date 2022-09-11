import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import ArticleList from "./ArticleList";
import ArticlePage from "./ArticlePage";

function App() {
  return (
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
  );
}

export default App;
