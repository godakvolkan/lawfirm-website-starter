import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Components
import Nav from "./Components/Nav";
import Banner from "./Components/Banner";
import TestimonialSlider from "./Components/TestimonialSlider";
import Testimonial from "./Components/Testimonial";
import Skills from "./Components/Skills";
import HukukDetay from "./Components/HukukDetay";
import Team from "./Components/Team";
import Newsletter from "./Components/NewSletteer";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import BackToTopBtn from "./Components/BackToTopBtn";

import { ThemeProvider } from "@mui/material/styles";



const App = () => {
  return (
    <Router>

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Banner />
              <TestimonialSlider />
              <Testimonial />
              <Skills />
              <Team />

              <Contact />
              <Footer />
              <BackToTopBtn />
            </div>
          }
        />
        <Route path="/hukuk/:hukukAdi" element={<HukukDetay />} />
      </Routes>
    </Router>
  );
};

export default App;
