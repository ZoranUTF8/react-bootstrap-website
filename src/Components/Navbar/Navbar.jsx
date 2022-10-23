import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {
  // If admin logged in exists than show employees status navbar
  // get admin from the store
  const { isAdmin } = useSelector((store) => store.user);
  console.log(isAdmin);
  return (
    <nav className="navbar navbar-expand-md bg-light">
      <div className="container">
        <Link to={"/"} className="navbar-brand">
          Company Name
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
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="contact" className="nav-link">
                Contact
              </Link>
            </li>

            {/* ADD LINK LATER FOR CRUD OPERATIONS */}
            {isAdmin ? (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Employee management
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      View Employees
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Add Employees
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Remove Employees
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Update Employees
                    </a>
                  </li>
                </ul>
              </li>
            ) : (
              <li className="nav-item">
                <Link to="login" className="nav-link">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
