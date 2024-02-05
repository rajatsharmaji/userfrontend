import React from "react";
function Navbar() {
  return (
    <div>
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary px-3">
          <a
            className="navbar-brand text-white"
            href="http://localhost:3000/pagelist"
          >
            Home
          </a>
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
              <li className="nav-item active">
                <a
                  className="nav-link text-white"
                  href="http://localhost:3000/"
                >
                  Login
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </>
    </div>
  );
}
export default Navbar;
