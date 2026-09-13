import React, { useEffect, useRef } from 'react';
import { 
  Calendar, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Users, 
  HeartHandshake,
  Star
} from 'lucide-react';
import gsap from 'gsap';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreClinic: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreClinic }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const floatCard1Ref = useRef<HTMLDivElement>(null);
  const floatCard2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: -16, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, delay: 0.1 }
      )
      .fromTo(
        headingRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.3'
      )
      .fromTo(
        subRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7 },
        '-=0.5'
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.4'
      )
      .fromTo(
        benefitsRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.3'
      )
      .fromTo(
        imageContainerRef.current,
        { opacity: 0, scale: 0.94, x: 20 },
        { opacity: 1, scale: 1, x: 0, duration: 0.9, ease: 'power2.out' },
        '-=0.8'
      )
      .fromTo(
        [floatCard1Ref.current, floatCard2Ref.current],
        { opacity: 0, y: 20, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.2 },
        '-=0.4'
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="relative overflow-hidden pt-6 pb-16 lg:pt-12 lg:pb-24 bg-gradient-to-b from-[#F2FAF5] via-white to-white"
    >
      {/* Background Organic Brand Shapes inspired by Med Clinics identity */}
      <div 
        className="absolute top-0 right-0 w-[550px] lg:w-[750px] h-[550px] lg:h-[750px] bg-gradient-to-br from-[#E2F5EA]/70 to-[#C6ECD6]/30 rounded-full blur-3xl pointer-events-none -mr-48 -mt-48 z-0"
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#E8F8EE]/60 to-transparent rounded-full blur-2xl pointer-events-none -ml-24 -mb-24 z-0"
        aria-hidden="true"
      />

      {/* Subtle brand cross watermark */}
      <div 
        className="absolute right-12 top-20 opacity-5 pointer-events-none hidden xl:block"
        aria-hidden="true"
      >
        <svg width="340" height="340" viewBox="0 0 100 100" fill="#0B8745">
          <path d="M 38 4 L 62 4 L 62 38 L 96 38 L 96 62 L 62 62 L 62 96 L 38 96 L 38 62 L 4 62 L 4 38 L 38 38 Z" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Direct Conversion */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-6 lg:pr-6 text-center lg:text-left">
            
            {/* Trust Pill / Location Badge */}
            <div 
              ref={badgeRef}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-100/70 border border-emerald-200/80 text-emerald-900 text-xs sm:text-sm font-semibold shadow-xs"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0B8745]"></span>
              </span>
              <span>Cidade Nova • Manaus, AM</span>
              <span className="text-emerald-300">|</span>
              <span className="text-[#0B8745] font-bold">Atendimento Humanizado</span>
            </div>

            {/* Main Headline */}
            <h1
              ref={headingRef}
              className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold text-[#044B25] tracking-tight leading-[1.12]"
            >
              Saúde, cuidado e excelência em um só lugar.
            </h1>

            {/* Subheadline */}
            <p
              ref={subRef}
              className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0"
            >
              Atendimento médico multiespecializado com profissionais preparados para cuidar de você e da sua família.
            </p>

            {/* CTAs */}
            <div
              ref={ctaRef}
              className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5"
            >
              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full text-base font-bold text-white bg-gradient-to-r from-[#0B8745] via-[#08773C] to-[#044B25] hover:from-[#0E9A50] hover:to-[#065A2E] shadow-[0_6px_22px_rgba(11,135,69,0.35)] hover:shadow-[0_10px_28px_rgba(11,135,69,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer group"
              >
                <Calendar className="w-5 h-5 text-emerald-200 group-hover:scale-110 transition-transform" />
                <span>Agende sua consulta</span>
                <ArrowRight className="w-4 h-4 text-emerald-200 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={onExploreClinic}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-base font-semibold text-[#044B25] bg-white hover:bg-emerald-50 border border-emerald-200/90 shadow-sm hover:border-[#0B8745] transition-all duration-200 cursor-pointer"
              >
                <span>Conheça a Med Clinics</span>
              </button>
            </div>

            {/* Highlights Bar */}
            <div
              ref={benefitsRef}
              className="pt-6 border-t border-emerald-100/90 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-2xl mx-auto lg:mx-0"
            >
              <div className="flex items-center gap-2.5 text-left">
                <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0 text-[#0B8745]">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800">+15 Especialidades</div>
                  <div className="text-[11px] text-slate-500">Cuidado integral</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-left">
                <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0 text-[#0B8745]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800">Convênios & Particular</div>
                  <div className="text-[11px] text-slate-500">Facilidade no acesso</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-left col-span-2 sm:col-span-1">
                <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0 text-[#0B8745]">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800">Cuidado Humanizado</div>
                  <div className="text-[11px] text-slate-500">Acolhimento real</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Photography & Floating Cards */}
          <div className="lg:col-span-5 xl:col-span-5 relative flex justify-center">
            
            {/* Visual Frame */}
            <div 
              ref={imageContainerRef}
              className="relative w-full max-w-md lg:max-w-none"
            >
              {/* Organic green border accent */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#0B8745]/25 via-emerald-200/40 to-transparent rounded-[2.5rem] -rotate-1 blur-xs pointer-events-none" />

              {/* Main Photo Card */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(4,75,37,0.14)] border-4 border-white bg-slate-100 aspect-[4/5] sm:aspect-[3/3.5] lg:aspect-[4/4.8]">
                <img
                  src="https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=800"
                  alt="Consulta médica acolhedora na Med Clinics Manaus"
                  className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-700"
                  loading="eager"
                />

                {/* Subtle gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#044B25]/60 via-transparent to-transparent pointer-events-none" />

                {/* Bottom text pill on image */}
                <div className="absolute bottom-4 left-4 right-4 text-white p-3 rounded-2xl bg-[#044B25]/80 backdrop-blur-md border border-white/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-emerald-200 uppercase tracking-wider">Unidade Cidade Nova</p>
                      <p className="text-sm font-bold text-white">Ambiente moderno, climatizado e seguro</p>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-emerald-300" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Top-Left Doctor Rating */}
              <div
                ref={floatCard1Ref}
                className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-[0_12px_32px_rgba(4,75,37,0.12)] border border-emerald-100 flex items-center gap-3 float-gentle z-20"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-[#0B8745] flex items-center justify-center font-bold">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-extrabold text-slate-900 text-sm">4.9 / 5.0</span>
                    <span className="text-[11px] text-emerald-700 font-semibold">(+1.200 avaliações)</span>
                  </div>
                  <div className="text-[11px] text-slate-500">Excelência comprovada</div>
                </div>
              </div>

              {/* Floating Badge 2: Bottom-Right Quick Booking */}
              <div
                ref={floatCard2Ref}
                className="absolute -bottom-5 -right-2 sm:-right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-[0_12px_32px_rgba(4,75,37,0.12)] border border-emerald-100 flex items-center gap-3 float-delayed z-20"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0B8745] text-white flex items-center justify-center font-bold">
                  <Clock className="w-5 h-5 text-emerald-100" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Agendamento Ágil</div>
                  <div className="text-[11px] text-[#0B8745] font-medium">Sem longas esperas</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
