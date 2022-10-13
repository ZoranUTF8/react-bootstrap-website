import { Vmv } from "../../Components";

const AboutUs = () => {
  return (
    <div>
      <section className="p-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h4>About Us</h4>
            </div>
          </div>
        </div>
      </section>

      <section className="p-5">
        <div className="container">
          <h5 className="main-heading">Our Company</h5>
          <div className="underline mt-3 mb-3"></div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut harum,
            eveniet deserunt atque voluptatum laboriosam nam consectetur magni,
            eligendi ea obcaecati asperiores laborum voluptatibus facilis
            repellat tempore fuga eum itaque. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Accusantium, veniam corporis. Nostrum
            explicabo neque quae nemo voluptatum assumenda molestias dicta eos
            aperiam consequuntur, sit numquam dolore, cumque ipsam laborum
            corporis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Maiores ex voluptates quod alias, tempora accusamus laboriosam
            recusandae pariatur, est itaque qui facere unde expedita magni et
            ipsam nostrum earum eos!
          </p>
        </div>
      </section>

      <Vmv />
    </div>
  );
};

export default AboutUs;
