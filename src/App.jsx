import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ArticlesList from "./components/ArticlesList";
import ArticleDetails from "./components/ArticleDetails";
import TopicsList from "./components/TopicsList";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";

function App() {
  const user = {
    username: "tickle122",
  };

  return (
    <div className="main-content-container">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/topics" element={<TopicsList />}></Route>
          <Route path="/articles" element={<ArticlesList />}></Route>
          <Route
            path="/articles/:article_id"
            element={<ArticleDetails user={user} />}
          ></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
