import AdquisitionContainer from "../components/AdquisitionContainer";
import ColumsContainer from "../components/index_page/ColumsContainer";
import Footer from "../components/Footer";
import InterContainers from "../components/InterContainers";
import Jumbotron from "../components/index_page/Jumbotron";
import Navbar from "../components/Navbar";
import Slider from "../components/index_page/Slider";
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
