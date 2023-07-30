import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "./Hero";

export default function Home() {
  return (
    <div>
      <div className="w-10/12 mx-auto">
        <Navbar />
        <Hero/>
      </div>
      <Footer />
    </div>
  );
}
