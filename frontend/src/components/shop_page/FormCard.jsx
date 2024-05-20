import "./formCard.css";

export default function FormCard() {
  return (
    <div className="row my-3">
      <div className="form-group form-responsive d-flex">
        <label htmlFor="card" className="mx-1 my-1">
          Número de tarjeta
        </label>
        <input
          type="text"
          maxLength={16}
          className="form-control input-responsive-1 mx-1 my-1"
          id="card"
          placeholder="Ingrese su número de tarjeta..."
          required
        />
        <label htmlFor="date" className="mx-1 my-1">
          Fecha de expiración
        </label>
        <input
          type="text"
          maxLength={5}
          className="form-control input-responsive-2  mx-1 my-1"
          id="date"
          placeholder="MM/AA"
          required
        />
        <label htmlFor="cvv" className="mx-1 my-1">
          CVV
        </label>
        <input
          type="text"
          maxLength={3}
          className="form-control input-responsive-3 mx-1 my-1"
          id="cvv"
          placeholder="CVV"
          required
        />
      </div>
    </div>
  );
}
