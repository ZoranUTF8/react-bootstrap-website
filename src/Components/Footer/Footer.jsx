import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <section className="footer bg-dark text-white p-4 text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h6>Company Information</h6>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium corporis dolores error aperiam alias modi accusamus ea
              repellat maiores quod, dignissimos eaque laborum fugit cupiditate.
              Adipisci unde quisquam fuga quibusdam?
            </p>
          </div>
          <div className="col-md-4">
            <h6>Quick Links</h6>
            <hr />
            <div>
              <Link to="#">Facebook</Link>
            </div>
            <div>
              <Link to="#">Instagram</Link>
            </div>
            <div>
              <Link to="#">LinkedIn</Link>
            </div>
          </div>
          <div className="col-md-4">
            <h6>Contact Information</h6>
            <hr />
            <div>
              <p className="text-white mb-1">413, Charleston, United States</p>
            </div>
            <div>
              <p className="text-white mb-1">+01 231 3124</p>
            </div>
            <div>
              <p className="text-white mb-1">email@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
