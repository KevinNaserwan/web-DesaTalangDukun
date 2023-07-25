import Image from "next/image";
import Navbar from "./Navbar";
import Container_Hero from "./Container_Hero";
import Container_Main from "./Container_Main";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <div className="w-10/12 mx-auto">
        <Navbar />
      </div>
      <Container_Hero />
      <Container_Main />
      <Footer />
    </div>
  );
}
