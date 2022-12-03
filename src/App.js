import React, {useEffect } from "react";
import Header from "./Components/Header";
import Showcase from "./Components/Showcase";
import Tabs from "./Components/Tabs";
import Download from "./Components/Download";
import FAQs from "./Components/FAQs";
import CTA from "./Components/CTA";
import Footer from "./Components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Header />
      <Showcase />
      <Tabs />
      <Download />
      <FAQs />
      <CTA />
      <Footer />
    </>
  );
};

export default App;
