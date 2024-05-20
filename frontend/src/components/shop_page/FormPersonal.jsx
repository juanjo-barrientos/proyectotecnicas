export default function FormPersonal() {
  return (
    <div className="row my-3">
      <div className="form-group">
        <label htmlFor="name" className="mt-3">
          Nombre
        </label>
        <input
          type="text"
          maxLength={100}
          className="form-control"
          id="name"
          placeholder="Ingrese su nombre..."
          required
        />
        <label htmlFor="email" className="mt-3">
          Email
        </label>
        <input
          type="email"
          maxLength={100}
          className="form-control"
          id="email"
          placeholder="Ingrese su email..."
          required
        />
        <label htmlFor="adress" className="mt-3">
          Dirección
        </label>
        <input
          type="text"
          maxLength={150}
          className="form-control"
          id="adress"
          placeholder="cra / cll / av / mz / lt / barrio..."
          required
        />
      </div>
    </div>
  );
}
