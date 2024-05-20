import image3 from "../../assets/image3.jpg";
import { Link } from "react-router-dom";

export default function Jumbotron() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={image3}
            className="img-fluid shadow-lg rounded-3"
            alt="Mazda CX-5"
          />
        </div>
        <div className="col-md-6 my-5">
          <h1 className="text-center">Nueva Mazda CX5 - 2024</h1>
          <p className="text-center pt-4">
            ¡Descubre la impresionante Mazda CX-5! Esta SUV combina elegancia,
            potencia y tecnología avanzada, ofreciendo una experiencia de
            conducción incomparable. Con un diseño sofisticado y características
            de seguridad de última generación, la CX-5 es perfecta para
            cualquier aventura. ¡Visítanos y maneja la diferencia Mazda!
          </p>
          <div className="d-grid gap-2">
            <Link to="/details" className="btn btn-dark btn-lg">
              Conocer más
            </Link>
            <Link to="/shop" className="btn btn-outline-dark btn-lg">
              Comprar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
