import React, { useState, useEffect, useRef } from 'react';
import { MedClinicsLogo } from './MedClinicsLogo';
import { 
  Calendar, 
  Menu, 
  X, 
  Phone, 
  MapPin, 
  Clock, 
  ChevronRight,
  MessageCircle
} from 'lucide-react';
import gsap from 'gsap';

interface NavbarProps {
  onOpenBooking: (specialtyId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // GSAP animation for mobile menu
  useEffect(() => {
    if (mobileMenuOpen && mobileMenuRef.current) {
      gsap.fromTo(
        mobileMenuRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' }
      );
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'A Clínica', href: '#sobre' },
    { label: 'Especialidades', href: '#especialidades' },
    { label: 'Exames', href: '#exames' },
    { label: 'Convênios', href: '#convenios' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* Top micro announcement bar */}
      <div className="bg-[#054B26] text-white text-xs py-2 px-4 border-b border-[#0A6435]/40 transition-all duration-300 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-medium">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-emerald-100/90">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>Rua Prof. Félix Valois, 119 – Cidade Nova, Manaus – AM</span>
            </span>
            <span className="flex items-center gap-1.5 text-emerald-100/90">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>Seg a Sex: 07h às 18h | Sáb: 07h às 12h</span>
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a 
              href="mailto:medclinics01@hotmail.com" 
              className="hidden lg:flex items-center gap-1.5 text-emerald-200 hover:text-white transition-colors"
            >
              <span>medclinics01@hotmail.com</span>
            </a>
            <span className="hidden lg:inline w-1 h-1 rounded-full bg-emerald-400"></span>
            <a 
              href="https://wa.me/559293753897?text=Olá!%20Gostaria%20de%20informações%20sobre%20agendamento%20na%20Med%20Clinics" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-200 hover:text-white transition-colors font-medium"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp: +55 (92) 9375-3897</span>
            </a>
            <span className="w-1 h-1 rounded-full bg-emerald-400"></span>
            <span className="text-emerald-300 font-semibold text-[11px] tracking-wide uppercase">
              Particular & Convênios
            </span>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header
        ref={navRef}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(4,75,37,0.08)] py-3 border-b border-emerald-100/70'
            : 'bg-white/80 backdrop-blur-sm py-4 border-b border-emerald-100/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Med Clinics Logo */}
            <a 
              href="#inicio" 
              onClick={(e) => handleLinkClick(e, '#inicio')}
              className="flex items-center group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B8745] rounded-lg p-0.5"
            >
              <MedClinicsLogo size={isScrolled ? 'sm' : 'md'} />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="px-3.5 py-2 text-sm font-medium text-slate-700 hover:text-[#0B8745] hover:bg-emerald-50/60 rounded-full transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Action CTA & Mobile Toggle */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="relative inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#0B8745] to-[#055B2E] hover:from-[#0E9A50] hover:to-[#076D38] shadow-[0_4px_14px_rgba(11,135,69,0.28)] hover:shadow-[0_6px_20px_rgba(11,135,69,0.38)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer overflow-hidden group"
              >
                {/* Subtle sheen highlight */}
                <span className="absolute inset-0 w-1/2 h-full bg-white/20 -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out" />
                <Calendar className="w-4 h-4 text-emerald-200 group-hover:scale-110 transition-transform duration-200" />
                <span>Agende sua consulta</span>
              </button>

              {/* Hamburger Button for Mobile */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
                className="lg:hidden p-2 text-slate-700 hover:text-[#0B8745] hover:bg-emerald-50 rounded-xl transition-colors"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-[#0B8745]" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="lg:hidden bg-white border-b border-emerald-100 px-4 pt-3 pb-6 shadow-xl"
          >
            <div className="flex flex-col gap-1 divide-y divide-slate-100">
              <div className="py-2 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="flex items-center justify-between px-3 py-2.5 text-base font-medium text-slate-800 hover:text-[#0B8745] hover:bg-emerald-50 rounded-xl transition-all"
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </a>
                ))}
              </div>

              {/* Mobile Quick Info */}
              <div className="pt-4 flex flex-col gap-3 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#0B8745] flex-shrink-0" />
                  <span>Rua Prof. Félix Valois, 119 – Cidade Nova, Manaus</span>
                </div>
                <a
                  href="https://wa.me/559293753897?text=Olá!%20Gostaria%20de%20informações%20sobre%20atendimento%20na%20Med%20Clinics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#0B8745]"
                >
                  <Phone className="w-4 h-4 text-[#0B8745] flex-shrink-0" />
                  <span>WhatsApp / Central: +55 (92) 9375-3897</span>
                </a>
                <a
                  href="mailto:medclinics01@hotmail.com"
                  className="flex items-center gap-2 hover:text-[#0B8745] text-slate-500"
                >
                  <span className="text-[#0B8745] font-bold">@</span>
                  <span>medclinics01@hotmail.com</span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="mt-2 w-full py-3 bg-[#0B8745] text-white font-semibold rounded-xl text-center shadow-md flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Solicitar Agendamento Agora</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
