import creditCard from "../../assets/credit-card.svg";
import efecty from "../../assets/efecty.svg";
import { useState } from "react";
import FormCard from "./FormCard";
import FormEffecty from "./FormEffecty";

export default function FormBilling() {
    const [paymentMethod, setPaymentMethod] = useState("card");

    return (
    <div className="row d-flex reverse-colums">
      <div className="col-md-12">
        <button onClick={()=> setPaymentMethod("card")} className="btn px-3 mx-2 my-2 btn-outline-dark">
          <img src={creditCard} className="w-3 px-2" alt="credit card" />
            Tarjeta de Banco
        </button>
        <button onClick={()=> setPaymentMethod("efecty")} className="btn px-3 mx-2 my-2 btn-outline-dark" >
          <img src={efecty} className="w-3 px-2" alt="efecty logo" />
        </button>
      </div>
      <div className="col-md-12">
        {paymentMethod === "card" ? (
            <FormCard/>
        ) : (
            <FormEffecty/>
        )}
      </div>
    </div>
  );
}
