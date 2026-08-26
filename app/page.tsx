import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Chooseus from "@/components/whychooseus";
export default function Home() {
  return (
    <main className=" bg-[#efefef]">
      <Hero />
      <Services />
      <About />
      <Chooseus />
    </main>
  );
}
