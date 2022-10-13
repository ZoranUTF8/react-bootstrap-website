import ServicesData from "../../assets/images/ServicesData";

const CompanyServices = () => {
  return (
    <section className="border-top pt-3">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="main-heading">Company Services</h1>
            <div className="underline mx-auto mt-3 mb-3"></div>
          </div>
        </div>
      </div>

      <div className="container p-5">
        <div className="row g-3">
          {ServicesData.map((services) => (
            <div className="col-12 col-md-6 col-lg-4" key={services.id}>
              <div className="card shadow hoverable">
                <img
                  src={services.imgPath}
                  className="card-img-top"
                  alt={services.id}
                />
                <div className="card-body">
                  <h6>{services.title}</h6>
                  <div className="underline"></div>
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
