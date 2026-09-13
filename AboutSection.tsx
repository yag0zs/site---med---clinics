import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Building2, 
  Heart, 
  Stethoscope, 
  ShieldCheck, 
  Sparkles,
  ArrowRight,
  Clock
} from 'lucide-react';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'estrutura' | 'humanizado' | 'convenios'>('humanizado');

  const pillars = [
    {
      icon: Stethoscope,
      title: 'Profissionais Especializados',
      description: 'Corpo clínico rigorosamente qualificado e atualizado com as melhores práticas da medicina.',
    },
    {
      icon: Heart,
      title: 'Atendimento Humanizado',
      description: 'Ouvir com empatia, compreender a sua dor e oferecer cuidado individualizado em cada etapa.',
    },
    {
      icon: ShieldCheck,
      title: 'Atendimento Particular & Convênios',
      description: 'Flexibilidade e facilidade de acesso à saúde com ampla aceitação de convênios e valores justos.',
    },
    {
      icon: Building2,
      title: 'Estrutura Moderna em Manaus',
      description: 'Salas climatizadas, consultórios equipados e rigorosos protocolos de biossegurança.',
    },
  ];

  return (
    <section id="sobre" className="relative py-20 lg:py-28 overflow-hidden bg-white">
      {/* Organic background lines & decorative curves */}
      <div 
        className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-50/80 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none"
        aria-hidden="true"
      />
      <div 
        className="absolute top-12 right-0 w-80 h-80 bg-[#E8F8EE]/60 rounded-full blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/60 text-[#0B8745] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Sobre a Med Clinics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#044B25] tracking-tight">
            Uma clínica feita para cuidar de você.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Nascemos com o propósito de aproximar a medicina de excelência dos moradores de Manaus, combinando alta capacitação técnica com um acolhimento caloroso e atencioso.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Visual Collage with Clinic Photos */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Back decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#0B8745]/10 via-[#0B8745]/5 to-transparent rounded-[2.5rem] rotate-1" />

              {/* Main Facade / Clinic photo */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] bg-slate-100">
                <img
                  src="/images/clinic-facade.jpg"
                  alt="Estrutura externa da Med Clinics em Cidade Nova Manaus"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="inline-block px-2.5 py-1 bg-[#0B8745] text-white text-[11px] font-bold rounded-md uppercase tracking-wider mb-1">
                    Unidade Manaus
                  </span>
                  <p className="text-sm font-semibold drop-shadow-sm">Rua Prof. Félix Valois, 119 – Cidade Nova</p>
                </div>
              </div>

              {/* Secondary Inset Photo: Reception / Consultation Room */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 w-3/5 rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.18)] border-4 border-white aspect-[4/3] bg-white hidden sm:block">
                <img
                  src="/images/clinic-reception.jpg"
                  alt="Recepção acolhedora da Med Clinics"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#044B25]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2 left-2 text-white text-[11px] font-bold">
                  Recepção & Triagem Confortável
                </div>
              </div>

              {/* Badge Experience */}
              <div className="absolute -top-5 -left-4 sm:-left-6 bg-white p-4 rounded-2xl shadow-xl border border-emerald-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#0B8745] flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-6 h-6 text-[#0B8745]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Multiespecialidades</div>
                  <div className="text-[11px] text-emerald-700 font-semibold">Tudo no mesmo local</div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Institutional Pillars & Interactive tabs */}
          <div className="lg:col-span-6 space-y-6 pt-6 sm:pt-10 lg:pt-0">
            
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#044B25]">
                Compromisso com o seu bem-estar em todas as fases da vida.
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Localizada estrategicamente no bairro <strong>Cidade Nova</strong>, a <strong>Med Clinics</strong> foi planejada para que você não precise percorrer longas distâncias para ter acesso a consultas especializadas e exames diagnósticos confiáveis.
              </p>
            </div>

            {/* Pillar Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100/70 hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-200 group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-white border border-emerald-200/80 flex items-center justify-center text-[#0B8745] group-hover:scale-105 group-hover:bg-[#0B8745] group-hover:text-white transition-all shadow-xs mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-800 group-hover:text-[#044B25] transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Interactive Tab Switcher for Quick Info */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#F5FAF7] to-white border border-emerald-200/80 shadow-xs">
              <div className="flex gap-2 border-b border-emerald-100 pb-3">
                <button
                  type="button"
                  onClick={() => setActiveTab('humanizado')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === 'humanizado'
                      ? 'bg-[#0B8745] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-emerald-100/50'
                  }`}
                >
                  Cuidado Humanizado
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('estrutura')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === 'estrutura'
                      ? 'bg-[#0B8745] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-emerald-100/50'
                  }`}
                >
                  Ambiente & Biossegurança
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('convenios')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === 'convenios'
                      ? 'bg-[#0B8745] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-emerald-100/50'
                  }`}
                >
                  Facilidade no Atendimento
                </button>
              </div>

              <div className="pt-3 text-xs sm:text-sm text-slate-600 leading-relaxed min-h-[58px]">
                {activeTab === 'humanizado' && (
                  <p>
                    Valorizamos o tempo do paciente. Nossos atendimentos são pautados no respeito, escuta ativa e esclarecimento didático de diagnósticos e condutas terapêuticas.
                  </p>
                )}
                {activeTab === 'estrutura' && (
                  <p>
                    Consultórios amplos com climatização adequada para o calor manauara, higienização rigorosa e equipamentos de diagnóstico médico periodicamente calibrados.
                  </p>
                )}
                {activeTab === 'convenios' && (
                  <p>
                    Aceitamos os principais planos de saúde do Amazonas e oferecemos opções acessíveis e facilitadas no atendimento particular com formas flexíveis de pagamento.
                  </p>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white bg-[#0B8745] hover:bg-[#08733A] shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <span>Agendar Consulta Presencial</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Clock className="w-4 h-4 text-[#0B8745]" />
                <span>Horários de atendimento matutino e vespertino</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
