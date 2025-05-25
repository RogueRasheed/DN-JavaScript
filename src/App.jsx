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
    <Route path="services" element={<Services />} />
    <Route path="about" element={<About />} /> 
    <Route path="contact" element={<Contact />} />
    <Route path="/" element={<Home />} />
  </Routes>
  </BrowserRouter>
  </div>
  );
}
export default App;