import React, { useState } from "react";
import {
  AboutUs,
  Chef,
  Footer,
  Gallery,
  Header,
  Intro,
  SpecialMenu,
} from "./container";
import { Navbar, Loader } from "./components";
import "./App.css";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  const Content = (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Gallery />
      <Footer />
    </div>
  );

  return <div>
    {
      isLoading ? <Loader /> : Content
    }
  </div>;
}
