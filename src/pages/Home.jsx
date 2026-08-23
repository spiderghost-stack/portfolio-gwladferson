import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Science from '../components/sections/Science';
import DevProjects from '../components/sections/DevProjects';
import Contact from '../components/sections/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyan to-transparent opacity-40 relative z-10"></div>
      <About />
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyan to-transparent opacity-40 relative z-10"></div>
      <Skills />
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyan to-transparent opacity-40 relative z-10"></div>
      <Projects />
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyan to-transparent opacity-40 relative z-10"></div>
      <Science />
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyan to-transparent opacity-40 relative z-10"></div>
      <DevProjects />
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyan to-transparent opacity-40 relative z-10"></div>
      <Contact />
      <Footer />
    </main>
  );
}
