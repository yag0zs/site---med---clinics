import React from 'react';
import { MedClinicsLogo } from './MedClinicsLogo';
import { 
  MapPin, 
  Phone, 
  Clock, 
  MessageCircle, 
  Mail,
  ArrowUp,
  CheckCircle2
} from 'lucide-react';
import { specialtiesData } from '../data/specialties';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#044B25] via-[#033A1C] to-[#022814] text-white pt-16 pb-12 relative overflow-hidden border-t-4 border-[#0B8745]">
      
      {/* Subtle background cross watermark */}
      <div 
        className="absolute right-0 bottom-0 opacity-5 pointer-events-none translate-x-1/4 translate-y-1/4"
        aria-hidden="true"
      >
        <svg width="400" height="400" viewBox="0 0 100 100" fill="white">
          <path d="M 38 4 L 62 4 L 62 38 L 96 38 L 96 62 L 62 62 L 62 96 L 38 96 L 38 62 L 4 62 L 4 38 L 38 38 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-emerald-800/60">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-5">
            <MedClinicsLogo variant="dark" size="lg" />
            
            <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed font-normal max-w-sm">
              Clínica médica multiespecialidades comprometida com a saúde e segurança da sua família na Zona Norte de Manaus. Atendimento particular e convênios credenciados.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/clinicamedclinics/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Med Clinics"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#0B8745] flex items-center justify-center text-white transition-all duration-200 border border-white/10"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>

              <a
                href="https://wa.me/559293753897?text=Olá!%20Gostaria%20de%20informações%20sobre%20a%20Med%20Clinics"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da Med Clinics"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#0B8745] flex items-center justify-center text-white transition-all duration-200 border border-white/10"
              >
                <MessageCircle className="w-5 h-5" />
              </a>

              <a
                href="mailto:medclinics01@hotmail.com"
                aria-label="E-mail da Med Clinics"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#0B8745] flex items-center justify-center text-white transition-all duration-200 border border-white/10"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-900/80 border border-emerald-700/60 text-[11px] text-emerald-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Alvará Sanitário e Registro CFM Ativos</span>
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Navegação</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-emerald-100/70">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">Início</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">A Clínica</a>
              </li>
              <li>
                <a href="#especialidades" className="hover:text-white transition-colors">Especialidades</a>
              </li>
              <li>
                <a href="#exames" className="hover:text-white transition-colors">Exames Diagnósticos</a>
              </li>
              <li>
                <a href="#convenios" className="hover:text-white transition-colors">Convênios Aceitos</a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white transition-colors">Agendamentos</a>
              </li>
            </ul>
          </div>

          {/* Specialties List */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Especialidades</span>
            </h4>
            <ul className="grid grid-cols-2 gap-x-2 gap-y-2 text-xs text-emerald-100/70">
              {specialtiesData.slice(0, 8).map((spec) => (
                <li key={spec.id}>
                  <a href="#especialidades" className="hover:text-white transition-colors truncate block">
                    {spec.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Unidade Manaus</span>
            </h4>

            <div className="space-y-3 text-xs text-emerald-100/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>
                  Rua Prof. Félix Valois, 119<br />
                  Cidade Nova – Manaus – AM
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a 
                  href="https://wa.me/559293753897?text=Olá!%20Gostaria%20de%20informações%20sobre%20atendimento%20na%20Med%20Clinics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: +55 (92) 9375-3897
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a 
                  href="mailto:medclinics01@hotmail.com" 
                  className="hover:text-white transition-colors"
                >
                  medclinics01@hotmail.com
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p>Segunda a Sexta: 07h às 18h</p>
                  <p>Sábado: 07h às 12h</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Legal Compliance */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-emerald-200/60 text-center md:text-left">
          <div>
            <p>© {currentYear} Med Clinics – Clínica Médica Multiespecialidades. Todos os direitos reservados.</p>
            <p className="text-[11px] text-emerald-200/40 mt-1">
              Direção Técnica Médica Responsável. As informações contidas neste website têm caráter exclusivamente informativo.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-[#0B8745] text-white text-xs transition-colors cursor-pointer"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
