import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cta from "./components/Cta";
import Menu from "./components/Menu";
import Quote from "./components/Quote";
import ContactUs from "./components/ContactUs";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <Menu />
      <Cta ctaText="Appetisers" />
      <Menu />
      <Cta ctaText="Main Course" />
      <Menu />
      <Cta ctaText="Proteins" />
      <Menu />
      <Cta ctaText="Soups" />
      <Menu />
      <Cta ctaText="Desserts" />
      <Menu />
      <Cta ctaText="Drinks" />
      <Menu />
      <Cta ctaText="" />
      <Quote />
      <ContactUs />
    </>
  );
}

export default App;
