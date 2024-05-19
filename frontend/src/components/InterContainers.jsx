import PropTypes from "prop-types";

export default function InterContainers({ message }) {
  return (
    <div className="bg-dark">
      <div className="row d-flex justify-content-center">
        <div className="col-md-6 p-4">
          <p className="text-center text-light fs-3">
            {" "}
            <i>{message}</i>
          </p>
          <hr style={{ color: "white" }} />
        </div>
      </div>
    </div>
  );
}

InterContainers.propTypes = {
  message: PropTypes.string.isRequired,
};
