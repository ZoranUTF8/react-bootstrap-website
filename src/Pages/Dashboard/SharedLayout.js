import { Outlet } from "react-router-dom";
import { Sidebar } from "../../Components";
const SharedLayout = () => {
  return (
    <main className="container-fluid bg-info">
      <div className="row ">
        <div className="col-sm-12 col-md-3 bg-info">
          <Sidebar />
        </div>
        <div className="col-sm-12 col-md-9 bg-primary">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default SharedLayout;
