import { Link } from "react-router-dom";

export default function ColumsContainer() {
  return (
    <div className="container w-100 my-5 py-3">
      <div className="row d-flex align-items-center">
        <div className="col-md-4 mt-4">
          <p className="text-center fs-3 fw-bold">
            Conduce con Elegancia y Estilo
          </p>
          <p className="text-center pt-4">
            Experimenta el lujo y la sofisticación de la Mazda CX-5. Su diseño
            elegante y moderno te hará destacar en cualquier lugar. Siente la
            suavidad del cuero y la tecnología de punta al alcance de tus dedos.
            Con la CX-5, cada viaje se convierte en una experiencia de primera
            clase.
          </p>
        </div>
        <div className="col-md-4 mt-4">
          <p className="text-center fs-3 fw-bold">
            Potencia y Rendimiento Superior
          </p>
          <p className="text-center pt-4">
            Siente la emoción al acelerar con la Mazda CX-5. Su motor Skyactiv-G
            te brinda una potencia impresionante y eficiencia inigualable. Ya
            sea en la ciudad o en carretera, disfruta de un manejo ágil y
            dinámico que responde a cada comando. ¡Descubre el verdadero placer
            de conducir!
          </p>
        </div>
        <div className="col-md-4 mt-4">
          <p className="text-center fs-3 fw-bold">
            Seguridad y Confort en Cada Trayecto
          </p>
          <p className="text-center pt-4">
            Viaja con total tranquilidad en la Mazda CX-5. Equipado con las más
            avanzadas tecnologías de seguridad, como el asistente de
            mantenimiento de carril y la alerta de tráfico trasero, estarás
            protegido en todo momento. Además, su interior espacioso y cómodo
            hará que cada trayecto sea relajante y placentero.
          </p>
        </div>
      </div>
      <div className="row d-flex align-items-center justify-content-center mt-4">
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <Link to="/" className="btn btn-dark w-50 fw-bold">
            Ver más detalles
          </Link>
        </div>
      </div>
    </div>
  );
}
