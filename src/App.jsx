import Navbar from '@/components/layout/Navbar/Navbar.jsx';
import Footer from '@/components/layout/Footer/Footer.jsx';
import Hero from '@/sections/Hero/Hero.jsx';
import About from '@/sections/About/About.jsx';
import Projects from '@/sections/Projects/Projects.jsx';
import Background from '@/sections/Background/Background.jsx';
import Contact from '@/sections/Contact/Contact.jsx';
import { useLanguage } from '@/i18n/LanguageContext.jsx';

export default function App() {
  const { t } = useLanguage();

  return (
    <>
      <a href="#main" className="skip-link">
        {t.skipToContent}
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Background />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
