import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import Programs from "./pages/Programs";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <div className="app">
<Navbar/>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/programs" element={<Programs/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;