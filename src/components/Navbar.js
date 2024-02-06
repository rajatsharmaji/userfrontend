import React, { useState } from "react";
import { Link } from "react-router-dom";
import CreatePage from "./createPage";
import { Modal } from "reactstrap";

function Navbar() {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
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
        <div className="d-none d-lg-block d-flex flex-row-reverse">
          <button
            className="btn btn-light text-decoration-none"
            onClick={toggle}
          >
            Create new
          </button>

          <Modal isOpen={modal} toggle={toggle}>
            <CreatePage />
          </Modal>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
