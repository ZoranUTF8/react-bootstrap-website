import { Vmv } from "../../Components";

const AboutUs = () => {
  return (
    <div>
      <section className="bg-light p-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h4>About Us</h4>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light p-5">
        <div className="container">
          <h5 className="main-heading">Our Company</h5>
          <div className="underline mt-3 mb-3"></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            culpa fuga necessitatibus velit natus obcaecati cum odit dolores
            fugit eaque ipsam voluptates rem ut cumque, a provident animi
            blanditiis ratione.
          </p>
        </div>
      </section>

      <Vmv />
    </div>
  );
};

export default AboutUs;
