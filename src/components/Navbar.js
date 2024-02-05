import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary px-3">
          <Link to="/pagelist" className="navbar-brand text-white">
            Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active nav-link text-white">
                <Link to="/ " className="nav-link text-white">
                  Login
                </Link>
              </li>
            </ul>
          </div>
          <div className="d-flex flex-row-reverse">
            <button className="btn btn-light">
              <Link to="/page" className="text-decoration-none">
                Create new
              </Link>
            </button>
          </div>
        </nav>
      </>
    </div>
  );
}
export default Navbar;
