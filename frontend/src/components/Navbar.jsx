import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand px-4" to="/">
          <img
            src={logo}
            alt="Logo"
            width="56"
            height="45"
            className="d-inline-block "
          />
        </Link>
        <button
          className="navbar-toggler bg-tertiary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-theme="dark"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation-light"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse px-5" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item me-4">
              <Link
                className="nav-link active text-light fw-bolder"
                aria-current="page"
                to="/shop"
              >
                + Ir a la tienda
              </Link>
            </li>
            <li className="nav-item me-4">
              <Link className="nav-link text-light" aria-current="page" to="/details">
                Ver detalles
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
