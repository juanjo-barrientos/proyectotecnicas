import logo from "../assets/logo.png";
import PropTypes from "prop-types";

export default function InfoContainer({ title, message }) {
  return (
    <div className="container-fluid bg-dark vh-100">
      <div className="row p-5 d-flex justify-content-center">
        <div
          className="card shadow-lg w-50 my-5 p-5"
          style={{ minWidth: "310px" }}
        >
          <div className="col-md-12">
            <div className="card-body d-flex justify-content-center">
              <img
                src={logo}
                width="80"
                className="w-10"
                alt="Mazda logotipe"
              />
            </div>
            <h1 className="text-center">{title}</h1>
            <p className="text-center">{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

InfoContainer.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};
