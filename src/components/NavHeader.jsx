import { Link } from "react-router-dom";
import { useState } from "react";

function NavHeader() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <header>
      <nav
        className={`navbar navbar-expand-lg navbar-dark bg-dark fixed-top ${
          isNavOpen ? "show" : ""
        }`}
      >
        <div className="menu-container container justify-content-sm-center">
          <Link className="navbar-brand" to="/">
            <h1>NC News</h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNav}
            aria-expanded={isNavOpen ? "true" : "false"}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse justify-content-end ${
              isNavOpen ? "show" : ""
            }`}
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={closeNav}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/topics" onClick={closeNav}>
                  Topics
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/articles" onClick={closeNav}>
                  Articles
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavHeader;
