import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import userSlice, {
  clearAppStoreAndLogout,
} from "../../features/user/userSlice";
import defaultUserAvatar from "../../assets/images/defaultUserAvatar.jpeg";

const Navbar = () => {
  const dispatch = useDispatch();
  // If admin logged in exists than show employees status navbar
  // get admin from the store
  const user = useSelector((store) => store.user);

  const isAdmin = user?.user?.isAdmin;
  const avatarUrl = user?.user?.avatarUrl || defaultUserAvatar;

  return (
    <nav className="navbar navbar-expand-md bg-light">
      <div className="container">
        <Link to={"/"} className="navbar-brand ">
          <h4 className="display-6">Company Name</h4>
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
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0  d-flex align-items-center">
            {isAdmin && (
              <li className="nav-item dropdown">
                <img
                  src={avatarUrl}
                  width="60"
                  height="60"
                  alt="user_avatar"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ "border-radius": "50%" }}
                  role="button"
                  className="nav-link dropdown-toggle navbar-avatar"
                />
                <ul className="dropdown-menu">
                  <li className="nav-item">
                    <Link to="admin" className="nav-link">
                      Stats
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="admin/all-employees" className="nav-link">
                      All employees
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="admin/add-employees" className="nav-link">
                      Add employee
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="admin/profile" className="nav-link">
                      My profile
                    </Link>
                  </li>
                  <li className="nav-item">
                    <button
                      className="nav-link nav-logout"
                      onClick={() =>
                        dispatch(clearAppStoreAndLogout("Logging you out..."))
                      }
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </li>
            )}
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
            {!user.user && (
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
