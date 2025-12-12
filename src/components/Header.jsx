import React from 'react'

import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="pb-5 navbar navbar-expand-lg bg-dark bg-gradient">
        <div className="container">

          <Link className="navbar-brand px-5 text-white fw-bolder fs-3" to="/">
            EduHub
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
            <ul className="navbar-nav m-auto mb-2 mb-lg-0 text-white">

              <li className="nav-item">
<a className="nav-link text-white" href="#home">Home</a>
              </li>

              <li className="nav-item">
<a className="nav-link text-white" href="#product">Product</a>
              </li>

              <li className="nav-item">
<a className="nav-link text-white" href="#pricing">Pricing</a>
              </li>

              <li className="nav-item">
<a className="nav-link text-white" href="#contact">Contact</a>
              </li>

            </ul>

            <div className="d-flex">
              <Link className="btn me-4 text-white" to="/login">Login</Link>

              <Link className="btn btn-primary px-5" to="/join">
                JOIN US <i className="bi bi-arrow-right"></i>
              </Link>
            </div>

          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
