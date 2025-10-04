import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./pages/services";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";


function App() {
  return ( 
<div>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="about" element={<About />} /> 
    <Route path="contact" element={<Contact />} />
    <Route path="services" element={<Services />} />
  </Routes>
  </BrowserRouter>
  </div>
  );
}
export default App;