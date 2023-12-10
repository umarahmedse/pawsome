import Brands from "../components/Brands";
import DiscoverPets from "../components/DiscoverPets";
import Hero from "../components/Hero";
import { useEffect } from "react";
import Services from "../components/Services";
import ContactUs from "../components/ContactUs";
const Home = () => {
  useEffect(() => {
    document.title = "Home - Pawsome™";
  });

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-[30px]">
        <Hero />
        <Brands />
        <DiscoverPets />
        <Services />
        <ContactUs />
      </div>
    </>
  );
};

export default Home;
