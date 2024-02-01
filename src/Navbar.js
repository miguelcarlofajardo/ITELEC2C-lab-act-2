import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const Navbar = () => {
  const [selectedCategory, setSelectedCategory] = useState("HOME");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary justify-content-center">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"></a>
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
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className={`nav-link ${
                  selectedCategory === "HOME" && "active"
                }`}
                href="#"
                onClick={() => handleCategoryClick("HOME")}
              >
                HOME
              </a>
            </li>

            <li
              className={`nav-item dropdown ${
                selectedCategory === "OUR SERVICES" && "active"
              }`}
            >
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={() => handleCategoryClick("OUR SERVICES")}
              >
                OUR SERVICES
              </a>
              <ul className="dropdown-menu">{/*""*/}</ul>
            </li>

            <li
              className={`nav-item dropdown ${
                selectedCategory === "JOIN US" && "active"
              }`}
            >
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={() => handleCategoryClick("JOIN US")}
              >
                JOIN US
              </a>
              <ul className="dropdown-menu">{/*""*/}</ul>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  selectedCategory === "NEWS" && "active"
                }`}
                href="#"
                onClick={() => handleCategoryClick("NEWS")}
              >
                NEWS
              </a>
            </li>
            <li
              className={`nav-item dropdown ${
                selectedCategory === "DRIVER BLOG" && "active"
              }`}
            >
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={() => handleCategoryClick("DRIVER BLOG")}
              >
                DRIVER BLOG
              </a>
              <ul className="dropdown-menu">{/*""*/}</ul>
            </li>
            <li
              className={`nav-item dropdown ${
                selectedCategory === "CONTACT US" && "active"
              }`}
            >
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={() => handleCategoryClick("CONTACT US")}
              >
                CONTACT US
              </a>
              <ul className="dropdown-menu">{/*""*/}</ul>
            </li>

            <div className="search-field">
              <form className="d-flex" role="search">
                <div className="input-group">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />

                  <button className="btn btn-search" type="submit">
                    <FontAwesomeIcon icon={faSearch} className="search-icon" />
                  </button>
                </div>
              </form>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
