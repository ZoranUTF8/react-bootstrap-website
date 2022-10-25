import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";
import userSlice, {
  toggleSidebar,
  logoutUser,
} from "../../features/user/userSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  // If admin logged in exists than show employees status navbar
  // get admin from the store
  const { user } = useSelector((store) => store.user);
  const isAdmin = user?.isUserAdmin;

  const toggleSidebarBtn = () => {
    dispatch(toggleSidebar());
  };

  return (
    <nav className="navbar navbar-expand-md bg-light">
      <div className="container">
        <Link to={"home"} className="navbar-brand ">
          <h4 className="display-6">Company Name</h4>
        </Link>

        {isAdmin && (
          <button className="sidebar sidebar_button" onClick={toggleSidebarBtn}>
            <GiHamburgerMenu size="40" />
          </button>
        )}

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
              <Link to="home" className="nav-link">
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
            {!user && (
              <li className="nav-item">
                <Link to="login" className="nav-link">
                  Login
                </Link>
              </li>
            )}
            {isAdmin && (
              <li className="nav-item dropdown">
                <p
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {user?.userName || "Admin"}
                </p>
                <ul className="dropdown-menu">
                  <li className="nav-item">
                    <Link to="admin" className="nav-link">
                      Dashboard
                    </Link>
                  </li>
                  <li className="nav-item">
                    <button
                      className="nav-link nav-logout"
                      onClick={() => dispatch(logoutUser())}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
