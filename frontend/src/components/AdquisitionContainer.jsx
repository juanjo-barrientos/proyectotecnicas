import "./adquisitionContainer.css";
import { Link } from "react-router-dom";

export default function AdquisitionContainer() {
  return (
    <div className="container-fluid pt-5 adq-container d-flex align-items-center">
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-md-6">
          <h2 className="text-light text-center py-3">
            ¡Vive la Experiencia Mazda CX-5 Ahora!
          </h2>
          <hr style={{ color: "white" }} />
          <p className="text-light py-3 text-center">
            ¡No esperes más para vivir la experiencia Mazda CX-5! Con elegancia,
            potencia y tecnología avanzada, esta SUV redefine tu manera de
            conducir. Descubre hoy mismo el lujo y la emoción en cada trayecto
            Adquiere tu CX-5 ahora!
          </p>
          <div className="d-grid gap-2">
            <Link to="/" className="btn btn-outline-light btn-lg ">
              MÁS INFORMACIÓN
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
