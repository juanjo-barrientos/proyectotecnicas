import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Details from "./pages/Details";
import Shop from "./pages/Shop";
import Thanks from "./pages/Thanks";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/details" element={<Details />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/thanks" element={<Thanks />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
