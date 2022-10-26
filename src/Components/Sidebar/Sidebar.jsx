import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const { sidebarOpen } = useSelector((store) => store.user);

  return (
    <div className="sidebar-container">
      {sidebarOpen && (
        <aside className="sidebar navbar navbar-expand d-flex flex-column align-item-start navbar-light bg-light">
          <ul className="navbar-nav d-flex flex-column w-100 ">
            <li className="nav-item">
              <Link to={"all-employees"} className="nav-link">
                All employees
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"add-employees"} className="nav-link">
                Add employee
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"profile"} className="nav-link">
                Profile
              </Link>
            </li>

            <li className="nav-item">
              <Link to={""} className="nav-link">
                Stats
              </Link>
            </li>
          </ul>
        </aside>
      )}
    </div>
  );
};

export default Sidebar;
