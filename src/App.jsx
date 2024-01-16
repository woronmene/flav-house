import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cta from "./components/Cta";
import Menu from "./components/Menu";
import Quote from "./components/Quote";
import ContactUs from "./components/ContactUs";
import { drinks } from "./utils/constants";
import { desserts } from "./utils/constants";
import { main_course } from "./utils/constants";
import { soups } from "./utils/constants";
import { appetisers } from "./utils/constants";
import { proteins } from "./utils/constants";
import { drinks_images } from "./utils/constants";
import { desserts_images } from "./utils/constants";
import { main_course_images } from "./utils/constants";
import { soups_images } from "./utils/constants";
import { appetisers_images } from "./utils/constants";
import { proteins_images } from "./utils/constants";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div id="menu" className="w-full py-6">
        <p className="font-bold text-2xl text-center">Our Menu</p>
      </div>
      <Cta ctaText="Appetisers" />
      <Menu menu={appetisers} images={appetisers_images} />
      <Cta ctaText="Main Course" />
      <Menu menu={main_course} images={main_course_images} />
      <Cta ctaText="Proteins" />
      <Menu menu={proteins} images={proteins_images} />
      <Cta ctaText="Soups" />
      <Menu menu={soups} images={soups_images} />
      <Cta ctaText="Desserts" />
      <Menu menu={desserts} images={desserts_images} />
      <Cta ctaText="Drinks" />
      <Menu menu={drinks} images={drinks_images} />
      <Cta ctaText="" />
      {/* <Menu /> */}
      <Quote />
      <ContactUs />
    </>
  );
}

export default App;
