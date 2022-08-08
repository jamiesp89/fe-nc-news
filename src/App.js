import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import ArticleList from "./ArticleList";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<ArticleList />} />
          <Route path="/:topic" element={<ArticleList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
