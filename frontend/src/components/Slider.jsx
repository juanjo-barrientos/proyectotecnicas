import image2 from "../assets/image2.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import "./slider.css";

export default function Slider() {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active carousel-responsive">
          <img src={image2} className="d-block w-100" alt="Image 1" />
        </div>
        <div className="carousel-item carousel-responsive">
          <img src={image5} className="d-block w-100" alt="Image 2" />
        </div>

        <div className="carousel-item carousel-responsive">
          <img src={image4} className="d-block w-100" alt="Image 4" />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon hover-overlay"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </a>
    </div>
  );
}
