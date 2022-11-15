import React from "react";
import { imagesData } from "../../assets/images/ImagesData";
import mainImage from "../../assets/images/mainImage.svg";
const Slider = () => {
  return (
    // <div
    //   id="carouselExampleInterval"
    //   className="carousel slide"
    //   data-bs-ride="carousel"
    // >
    //   <div className="carousel-inner">
    //     {/* {imagesData.map((image) => (
    //       <div
    //         key={image.id}
    //         className="carousel-item active"
    //         data-bs-interval="2000"
    //         style={{ height: "500px" }}
    //       >
    //         <LazyLoadImage
    //           src={image.imgPath} // use normal <img> attributes as props
    //           loading="lazy"
    //           effect="blur"
    //           className="d-block w-100"
    //           style={{ objectFit: "fill" }}
    //           alt="Slider images."
    //         />
    //       </div>
    //     ))} */}
    //   </div>
    //   <button
    //     className="carousel-control-prev"
    //     type="button"
    //     data-bs-target="#carouselExampleInterval"
    //     data-bs-slide="prev"
    //   >
    //     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    //     <span className="visually-hidden">Previous</span>
    //   </button>
    //   <button
    //     className="carousel-control-next"
    //     type="button"
    //     data-bs-target="#carouselExampleInterval"
    //     data-bs-slide="next"
    //   >
    //     <span className="carousel-control-next-icon" aria-hidden="true"></span>
    //     <span className="visually-hidden">Next</span>
    //   </button>
    // </div>
    <div className="container mt-5">
      <div className="row ">
        <div className="col-12">
          <img
            src={mainImage}
            alt="Main logo"
            loading="lazy"
            className="img-fluid mx-auto d-block"
            style={{ "max-height": "50vh" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
