import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Chooseus from "@/components/whychooseus";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className=" bg-[#efefef]">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Chooseus />
      <Footer />
    </main>
  );
}