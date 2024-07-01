import "./App.css";
import Contact from "./components/Contact";
import Finitions from "./components/Finitions";
import Footer from "./components/Footer";
import Giulia from "./components/Giulia";
import Navhero from "./components/Navhero";
import React, { useEffect } from "react";


function App() {
  
  return (
    <div>
      <Navhero />
      <Giulia />
      <Finitions />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
