import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
// import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
// import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className=" bg-[#efefef]">
      <Navbar />
      <Hero />
      <Services />
      <About />
      {/* <Portfolio /> */}
      <Testimonials />
      {/* <CTASection /> */}
      <Footer />
    </main>
  );
}