import Hero from '@/components/Hero';
import About from '@/components/About';
import Skill from '@/components/Skill';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Skill />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}