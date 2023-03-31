import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { categoryActions } from "../features/category/categorySlice";
export default function Navbar() {
  const activeCancel = () =>
    Array.from(document.getElementsByClassName("nav-link")).map((nav) => {
      return nav.classList.remove("active");
    });
  const activeClass = (id) => {
    activeCancel()
    return document.getElementById(id).classList.add("active");
  };

  const dispatch = useDispatch();

  const changeCat = (e) => {
    dispatch(categoryActions.change(e.target.id));
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" onClick={()=>{
            activeCancel();
            dispatch(categoryActions.change('general'))
          }}>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" onClick={changeCat}>
              <li className="nav-item">
                <Link
                  onClick={() => {
                    activeClass("business");
                  }}
                  id="business"
                  className="nav-link"
                  aria-current="page"
                  to="/business"
                >
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => {
                    activeClass("sports");
                  }}
                  id="sports"
                  className="nav-link"
                  to="/sports"
                >
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => {
                    activeClass("technology");
                  }}
                  id="technology"
                  className="nav-link"
                  to="/technology"
                >
                  Technology
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => {
                    activeClass("entertainment");
                  }}
                  id="entertainment"
                  className="nav-link"
                  to="/entertainment"
                >
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => {
                    activeClass("science");
                  }}
                  id="science"
                  className="nav-link"
                  to="/science"
                >
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => {
                    activeClass("health");
                  }}
                  id="health"
                  className="nav-link"
                  to="/health"
                >
                  Health
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
