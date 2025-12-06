import Contact from "@/components/contact";
import About from "../components/about";
import Courses from "../components/courses";
import Events from "../components/events";
import Footer from "../components/footer";
import Gallery from "../components/gallery";
import Header from "../components/header";
import Hero from "../components/hero";
import Services from "../components/services";
import Testimonials from "../components/testimonials";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <Header />
      <Hero />
      <About />
      <Services />
      <Courses />
      <Events />

      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
