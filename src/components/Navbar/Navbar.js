import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">
            <span className="text-warning">LM10</span> Reviews
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
            <ul className="navbar-nav ms-auto text-center mb-2 mb-lg-0 fw-bold">
              <li className="nav-item">
                <CustomLink className="nav-link" aria-current="page" to="/">
                  Home
                </CustomLink>
              </li>
              <li className="nav-item">
                <CustomLink className="nav-link " to="/reviews">
                  Reviews
                </CustomLink>
              </li>
              <li className="nav-item">
                <CustomLink className="nav-link" to="/dashboard">
                  Dashboard
                </CustomLink>
              </li>
              <li className="nav-item">
                <CustomLink className="nav-link" to="/blogs">
                  Blogs
                </CustomLink>
              </li>
              <li className="nav-item">
                <CustomLink className="nav-link" to="/about">
                  About
                </CustomLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
