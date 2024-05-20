import frontal from "../../assets/icons/frontal.jpg";

export default function FormDescription() {
  return (
    <div className="row">
      <div className="col-md-6 d-flex align-items-center" style={{ objectFit: "cover" }}>
        <img
          className="card-image w-100 rounded"
          src={frontal}
          alt="Frontal image of Mazda cx-5"
        />
      </div>
      <div className="col-md-6 my-2 lh-sm">
        <p className="fs-5 fw-bold">Mazda CX-5 - SkyActiv-G 2.5L</p>
        <p className="fs-7">Mazda colombia</p>
        <p className="text-success fs-5 fw-bold">$ 180.900.000 COP</p>
        <p className="fs-7">Aplican terminos y condiciones</p>
        <hr />
      </div>
    </div>
  );
}
