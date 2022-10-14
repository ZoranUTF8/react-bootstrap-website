import ErrorPage from "../../assets/images/ErrorPage.svg";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="container">
      <div className="row p-3">
        <div className="col-md-12 d-flex align-items-center justify-content-center">
          <img src={ErrorPage} alt="404 page" className="img-fluid rounded" />
        </div>
        <div className="col-md-12 d-flex flex-column align-items-center justify-content-center g-3">
          <h3>Ohh! Page not found.</h3>
          <p>We can't find the page you are requesting for.</p>
          <Link to="/" className="btn btn-info shadow">Back Home</Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
