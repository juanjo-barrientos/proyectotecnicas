import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Details from "./pages/Details";
import Shop from "./pages/Shop";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/details" element={<Details/>} />
        <Route path="/shop" element={<Shop/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
