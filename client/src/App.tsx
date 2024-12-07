import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import "./translate";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ProductsPage from "./pages/Products";


function App() {

  return (
    <div>
      <div className="min-h-screen font-sans antialiased">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Products" element={<ProductsPage />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
