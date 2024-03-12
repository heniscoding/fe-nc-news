import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ArticlesList from "./components/ArticlesList";
import ArticleDetails from "./components/ArticleDetails";

function App() {
  const user = {
    username: 'tickle122',
  };
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/articles" element={<ArticlesList />}></Route>
          <Route
            path="/articles/:article_id"
            element={<ArticleDetails user={user}/>}
          ></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
