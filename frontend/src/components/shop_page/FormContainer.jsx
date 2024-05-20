import FormPersonal from "./FormPersonal";
import FormDescription from "./FormDescription";
import FormBilling from "./FormBilling";
import { useNavigate } from "react-router-dom";

export default function FormContainer() {
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/thanks");
  };

  return (
    <div className="container-fluid bg-dark">
      <div className="row p-5 d-flex justify-content-center">
        <div className="card shadow-lg w-50 my-5" style={{ minWidth: "310px" }}>
          <div className="card-body">
            <FormDescription />
            <form onSubmit={(e) => handleSubmit(e)}>
              <FormPersonal />
              <FormBilling />
              <div className="row d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-success text-align-center fw-bold"
                >
                  Pagar ahora
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
