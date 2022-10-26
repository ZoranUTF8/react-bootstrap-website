import { Outlet } from "react-router-dom";
import { Sidebar } from "../../Components";
import { useSelector } from "react-redux";

const SharedLayout = () => {
  const { sidebarOpen } = useSelector((store) => store.user);

  return (
    <main className="container-fluid">
      <div className="row">
        <div className="col-sm-12 col-md-3 p-0">
          <Sidebar />
        </div>
        <div className="col-sm-12 col-md-9 p-0">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default SharedLayout;
