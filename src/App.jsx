import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Layout/Navbar';
import Sidebar from './components/Layout/Sidebar';
import Frame from './components/Layout/Frame';
import Hero from './components/Sections/Hero';
import LogoCarousel from './components/Sections/LogoCarousel';
import WhyItierx from './components/Sections/WhyItierx';
import Differentiator from './components/Sections/Differentiator';
import WhoWeAre from './components/Sections/WhoWeAre';
import Contact from './components/Sections/Contact';
import ContactModal from './components/UI/ContactModal';
import CalendarModal from './components/UI/CalendarModal';
import ServiceModal from './components/UI/ServiceModal';
import PortfolioModal from './components/UI/PortfolioModal';
import WhatsAppButton from './components/UI/WhatsAppButton';

function App() {
  const [contactData, setContactData] = useState({ isOpen: false, category: '' });
  const [selectedService, setSelectedService] = useState(null);
  const [portfolio, setPortfolio] = useState({ isOpen: false, index: 0 });
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const openCalendar = () => setIsCalendarOpen(true);
  const openPortfolio = (index = 0) => setPortfolio({ isOpen: true, index });

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleInterestClick = (service) => {
    setSelectedService(null);
    setContactData({ isOpen: true, category: service.shortTitle });
  };

  return (
    <div className="relative min-h-screen bg-black text-white font-sans selection:bg-purple-vibrant/30">
      <Frame />
      <Sidebar />
      <Navbar
        onContactClick={() => setContactData({ isOpen: true, category: '' })}
        onAgendaClick={openCalendar}
      />

      <main className="pl-0 md:pl-20">
        <Hero
          onAgendaClick={openCalendar}
          onLearnMoreClick={() => openPortfolio(0)}
        />
        <LogoCarousel />
        <WhyItierx />
        <Differentiator onAgendaClick={openCalendar} />
        <WhoWeAre onServiceClick={(service) => setSelectedService(service)} />
        <Contact
          onContactClick={() => setContactData({ isOpen: true, category: '' })}
          onAgendaClick={openCalendar}
        />
      </main>

      <AnimatePresence>
        {selectedService && (
          <ServiceModal
            key="service-modal"
            isOpen={true}
            service={selectedService}
            onClose={() => setSelectedService(null)}
            onInterestClick={handleInterestClick}
          />
        )}
        {contactData.isOpen && (
          <ContactModal
            key="contact-modal"
            isOpen={true}
            category={contactData.category}
            onClose={() => setContactData({ ...contactData, isOpen: false })}
          />
        )}
        {portfolio.isOpen && (
          <PortfolioModal
            key="portfolio-modal"
            isOpen={true}
            initialIndex={portfolio.index}
            onClose={() => setPortfolio({ ...portfolio, isOpen: false })}
            onAgendaClick={() => {
              setPortfolio((p) => ({ ...p, isOpen: false }));
              openCalendar();
            }}
          />
        )}
        {isCalendarOpen && (
          <CalendarModal key="calendar-modal" isOpen={true} onClose={() => setIsCalendarOpen(false)} />
        )}
      </AnimatePresence>

      <WhatsAppButton />
      {/* Background elements or noise overlay could go here */}
    </div>
  );
}

export default App;
