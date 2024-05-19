import AdquisitionContainer from "../components/AdquisitionContainer";
import ColumsContainer from "../components/ColumsContainer";
import Footer from "../components/Footer";
import InterContainers from "../components/InterContainers";
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
export default function Index() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <InterContainers message="Disfruta de la SUV mas comoda del mercado" />
      <Slider />
      <InterContainers message="" />
      <ColumsContainer />
      <AdquisitionContainer />
      <Footer/>
    </>
  );
}
