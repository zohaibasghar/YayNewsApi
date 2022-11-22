import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Yay-News
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  onClick={() => {
                    props.categoryMenu("business");
                  }}
                  id="business"
                  className="nav-link active links"
                  aria-current="page"
                  to="/"
                >
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => {
                    props.categoryMenu("sports");
                  }}
                  id="sports"
                  className="nav-link links"
                  href="/"
                >
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => {
                    props.categoryMenu("technology");
                  }}
                  id="technology"
                  className="nav-link links"
                  href="/"
                >
                  Technology
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => {
                    props.categoryMenu("everything");
                  }}
                  id="everthing"
                  className="nav-link links"
                  href="/"
                >
                  Everything
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-warning" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
