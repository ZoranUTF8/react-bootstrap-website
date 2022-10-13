import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // If admin logged in exists than show employes status navbar
  const [admin, setAdmin] = useState(true);
  return (
    <nav className="navbar navbar-expand-md bg-light">
      <div className="container">
        <Link to={"/"} className="navbar-brand">
          Company
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
            {admin ? (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Employe management
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
              ""
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
