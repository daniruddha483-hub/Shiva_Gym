import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <div className="app">
<Navbar/>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>}/>
        </Routes>
      <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;