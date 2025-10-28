import ParticlesBackground from "@/components/ParticlesBackground";
import Header from "@/components/Header";
import Home from "@/components/Home";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import PaymentMethods from "@/components/PaymentMethods";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <ParticlesBackground />
      <Header />
      <main>
        <Home />
        <Menu />
        <Gallery />
        <About />
        <Reviews />
        <Contact />
        <PaymentMethods />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
