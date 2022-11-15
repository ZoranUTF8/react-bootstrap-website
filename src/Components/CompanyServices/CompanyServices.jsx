import ServicesData from "../../assets/images/ServicesData";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CompanyServices = () => {
  return (
    <section className="border-top section-page-height d-flex flex-column align-items-center mb-md-0 mb-sm-5">
      <div className="container">
        <div className="row pt-5">
          <div className="col-md-12 text-center">
            <h1 className="main-heading">Company Services</h1>
            <div className="underline mx-auto mt-3 mb-3"></div>
          </div>
        </div>
      </div>

      <div className="container pt-5">
        <div className="row g-3">
          {ServicesData.map((services) => (
            <div className="col-md-6 col-lg-4" key={services.id}>
              <div className="card shadow text-center">
                <img
                  src={services.imgPath} // use normal <img> attributes as props
                  loading="lazy"
                  effect="blur"
                  className="card-img-top p-2"
                  alt="Image Alt"
                  style={{ "object-fit": "fill" }}
                />

                <div className="card-body text-center">
                  <h6>{services.title}</h6>
                  <div className="underline mx-auto m-3"></div>
                  <p>{services.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyServices;
