import AdquisitionContainer from "../components/AdquisitionContainer";
import InterContainers from "../components/InterContainers";
import Navbar from "../components/Navbar";
import CardList from "../components/details_page/CardList";
import Footer from "../components/Footer";

export default function Details() {
  return (
    <>
      <Navbar />
      <AdquisitionContainer />
      <InterContainers message="Caracteristicas del vehiculo" />
      <CardList />
      <Footer />
    </>
  );
}
