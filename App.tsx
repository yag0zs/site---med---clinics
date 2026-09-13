import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { AboutSection } from './components/AboutSection';
import { SpecialtiesSection } from './components/SpecialtiesSection';
import { ExamsSection } from './components/ExamsSection';
import { InsurancesSection } from './components/InsurancesSection';
import { BookingSection } from './components/BookingSection';
import { LocationSection } from './components/LocationSection';
import { InstagramSection } from './components/InstagramSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BookingModal } from './components/BookingModal';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');

  const handleOpenBooking = (serviceName?: string) => {
    setSelectedService(serviceName || '');
    setModalOpen(true);
  };

  const handleScrollToClinic = () => {
    const el = document.getElementById('sobre');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRequestQuote = (examName: string) => {
    const text = `Olá! Gostaria de um orçamento para o exame de *${examName}* na Med Clinics Manaus.`;
    window.open(`https://wa.me/559293753897?text=${encodeURIComponent(text)}`, '_blank');
  };

  useEffect(() => {
    // Subtle section header scroll reveals with GSAP
    const titles = document.querySelectorAll('h2');
    titles.forEach((title) => {
      gsap.fromTo(
        title,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: title,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#FCFDFD] text-slate-800 font-sans selection:bg-[#0B8745] selection:text-white">
      {/* Header */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero 
          onOpenBooking={() => handleOpenBooking()} 
          onExploreClinic={handleScrollToClinic} 
        />

        {/* Counter Stats Bar */}
        <StatsBar />

        {/* About Med Clinics Section */}
        <AboutSection onOpenBooking={() => handleOpenBooking()} />

        {/* Medical Specialties */}
        <SpecialtiesSection onOpenBooking={(specialty) => handleOpenBooking(specialty)} />

        {/* Diagnostic Exams */}
        <ExamsSection 
          onOpenBooking={(exam) => handleOpenBooking(exam)} 
          onRequestQuote={handleRequestQuote} 
        />

        {/* Health Plans & Insurances */}
        <InsurancesSection onOpenBooking={() => handleOpenBooking()} />

        {/* Booking Form & Conversion Engine */}
        <BookingSection initialSpecialty={selectedService} />

        {/* Location & Directions */}
        <LocationSection />

        {/* Instagram Feed Section */}
        <InstagramSection />

        {/* FAQ Section */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Appointment Popup Modal */}
      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultSpecialty={selectedService}
      />
    </div>
  );
}

export default App;
