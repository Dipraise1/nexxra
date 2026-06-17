import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Industries from '@/components/Industries';
import PhotoStrip from '@/components/PhotoStrip';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Industries />
        <PhotoStrip />
        <Process />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
