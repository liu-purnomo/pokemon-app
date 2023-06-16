import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function BaseLayout() {
  return (
    <>
      <div className="container-fluid bg-light">
        <div className="row">
          <Sidebar />
          <div className="col-md-10">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default BaseLayout;
