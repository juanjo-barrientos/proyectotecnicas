import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="container-fluid text-center text-light bg-dark py-3">
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-md-3">
          <Link className="text-center fw-light text-light fs-5">Contacto</Link>
        </div>
        <div className="col-md-3">
          <Link className="text-center fw-light text-light fs-5">
            Politica de privacidad
          </Link>
        </div>
        <div className="col-md-3">
          <Link className="text-center fw-light text-light fs-5">
            Texminos y condiciones
          </Link>
        </div>
      </div>
    </footer>
  );
}
