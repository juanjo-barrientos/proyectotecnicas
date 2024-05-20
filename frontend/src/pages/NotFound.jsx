import Footer from "../components/Footer";
import InfoContainer from "../components/InfoContainer";
import Navbar from "../components/Navbar";

export default function NotFound() {
    
    let ubication = window.location.pathname;
    
    return(
        <>
            <Navbar/>
            <InfoContainer title="404" message={"La pagina " + ubication + " no existe, no deberias estar aquí"}/>
            <Footer/>
        </>
    )
}