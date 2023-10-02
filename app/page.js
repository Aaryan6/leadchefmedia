import About from "@/components/About";
import AccordingMenu from "@/components/AccordingMenu";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <About />
      <Contact />
      <AccordingMenu />
      <Footer />
    </main>
  );
}
