import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Industries from '@/components/Industries';
import PhotoStrip from '@/components/PhotoStrip';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import JsonLd, { faqPage } from '@/components/seo/JsonLd';
import { faqs } from '@/lib/faqs';
export default function Home() {
  return (
    <>
      <JsonLd data={faqPage(faqs)} />
      <ScrollReveal />
      <Navbar />
      <main>
        <Hero />
        <Projects />
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
