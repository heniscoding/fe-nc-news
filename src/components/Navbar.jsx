import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <h1 id="app-header">NC News</h1>
      <nav id="navbar">
        <Link to="/">Home</Link>
        <Link to="/articles">Articles</Link>
      </nav>
    </header>
  );
}

export default Navbar;
