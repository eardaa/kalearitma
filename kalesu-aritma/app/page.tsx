import Hero from "@/components/home/Hero";
import Benefits from "@/components/home/Benefits";
import Products from "@/components/home/Products";
import Stories from "@/components/home/Stories";
import Testimonials from "@/components/home/Testimonials";
import Contact from "@/components/home/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Benefits />
      <Products />
      <Stories />
      <Testimonials />
      <Contact />
    </>
  );
}