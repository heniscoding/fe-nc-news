import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ArticlesList from "./components/ArticlesList";

function App() {
    return (
        <div>
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/articles" element={<ArticlesList />}></Route>
                </Routes>
            </main>
        </div>
    );
}

export default App;