import Footer from "../components/Footer";
import InfoContainer from "../components/InfoContainer";
import Navbar from "../components/Navbar";

export default function Thanks() {
  return (
    <>
      <Navbar />
      <InfoContainer
        title="Gracias por tu compra"
        message="Tu pedido ha sido procesado con éxito, en unos instantes te
                llegara un correo con los siguientes pasos que debes dar."
      />
      <Footer />
    </>
  );
}
