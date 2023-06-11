import React, { useCallback } from "react";
// components
import Banner from "./components/Banner";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import { loadFull } from "tsparticles";
import ParticlesContainer from "./components/particles";
import AnimatedCursor from "react-animated-cursor";
import { Toaster } from "react-hot-toast";

const App = () => {
  const customInit = useCallback(async (engine) => {
    // this adds the bundle to tsParticles
    await loadFull(engine);
  });

  return (
    <div className="bg-black overflow-hidden">
      <Toaster position="top-center" reverseOrder={false} />
      <AnimatedCursor />
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
      <ParticlesContainer />
    </div>
  );
};

export default App;
