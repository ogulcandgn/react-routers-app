import React from "react";
import Pricing from "../components/Pricing";
import Contact from "./Contact";
import Content from "./Content";
import Faq from "./Faq";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Testimonials from "./Testimonials";

function Home() {
  return (
    <div>
      <Navbar />
      <Content />
      <Pricing />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
