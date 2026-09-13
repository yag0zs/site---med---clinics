import React, { useState } from 'react';
import { 
  Stethoscope, 
  Baby, 
  HeartHandshake, 
  Activity, 
  Sparkles, 
  Brain, 
  Smile, 
  Bone, 
  Salad, 
  ShieldPlus, 
  Eye, 
  Ear,
  Search,
  ArrowRight,
  Info,
  Calendar
} from 'lucide-react';
import { specialtiesData, Specialty } from '../data/specialties';

interface SpecialtiesProps {
  onOpenBooking: (specialtyId?: string) => void;
}

export const SpecialtiesSection: React.FC<SpecialtiesProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalSpecialty, setActiveModalSpecialty] = useState<Specialty | null>(null);

  // Icon mapping
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Stethoscope': return Stethoscope;
      case 'Baby': return Baby;
      case 'HeartHandshake': return HeartHandshake;
      case 'Activity': return Activity;
      case 'Sparkles': return Sparkles;
      case 'Brain': return Brain;
      case 'Smile': return Smile;
      case 'Bone': return Bone;
      case 'Salad': return Salad;
      case 'ShieldPlus': return ShieldPlus;
      case 'Eye': return Eye;
      case 'Ear': return Ear;
      default: return Stethoscope;
    }
  };

  const filteredSpecialties = specialtiesData.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (selectedCategory === 'all') return matchesSearch;
    if (selectedCategory === 'popular') return matchesSearch && item.popular;
    return matchesSearch;
  });

  return (
    <section id="especialidades" className="py-20 lg:py-28 bg-[#F8FAF9] relative overflow-hidden">
      {/* Background brand curves */}
      <div 
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/70 border border-emerald-200 text-[#0B8745] text-xs font-bold uppercase tracking-wider mb-3">
              <Stethoscope className="w-3.5 h-3.5" />
              <span>Corpo Clínico Integrado</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#044B25] tracking-tight">
              Especialidades médicas
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed font-normal">
              Atendimento com profissionais experientes, preparados para acolher toda a família com atenção, pontualidade e dedicação.
            </p>
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="relative w-full sm:w-64">
              <input
                type="text"
                placeholder="Buscar especialidade..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3.5 py-2.5 text-xs sm:text-sm bg-white rounded-full border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-[#0B8745] focus:border-transparent shadow-2xs"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>

            <div className="flex items-center gap-1.5 bg-white p-1 rounded-full border border-emerald-200/80 shadow-2xs">
              <button
                type="button"
                onClick={() => setSelectedCategory('all')}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-[#0B8745] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#0B8745]'
                }`}
              >
                Todas ({specialtiesData.length})
              </button>
              <button
                type="button"
                onClick={() => setSelectedCategory('popular')}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === 'popular'
                    ? 'bg-[#0B8745] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#0B8745]'
                }`}
              >
                Mais Buscadas
              </button>
            </div>
          </div>
        </div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSpecialties.map((specialty) => {
            const Icon = getIcon(specialty.iconName);
            return (
              <div
                key={specialty.id}
                className="group relative bg-white rounded-3xl p-6 border border-emerald-100/90 shadow-[0_4px_20px_rgba(4,75,37,0.04)] hover:shadow-[0_16px_36px_rgba(11,135,69,0.12)] hover:border-emerald-400 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-[#0B8745] group-hover:bg-[#0B8745] group-hover:text-white group-hover:scale-105 group-hover:rotate-2 transition-all duration-300 shadow-xs">
                      <Icon className="w-6 h-6 transition-transform duration-300" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-50/80 text-[#08733A] border border-emerald-200/50">
                      {specialty.badge}
                    </span>
                  </div>

                  {/* Specialty Title */}
                  <h3 className="text-lg font-bold text-slate-800 group-hover:text-[#044B25] transition-colors mb-2">
                    {specialty.name}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5 line-clamp-3">
                    {specialty.shortDescription}
                  </p>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveModalSpecialty(specialty)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-slate-600 hover:text-[#0B8745] transition-colors py-1 cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>Saiba mais</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onOpenBooking(specialty.id)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-white bg-[#0B8745] hover:bg-[#08733A] shadow-xs group-hover:shadow transition-all cursor-pointer"
                  >
                    <span>Agendar</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty Search Feedback */}
        {filteredSpecialties.length === 0 && (
          <div className="text-center py-12 bg-white rounded-3xl border border-dashed border-emerald-200">
            <p className="text-slate-600 font-medium">Nenhuma especialidade encontrada para "{searchQuery}".</p>
            <button
              type="button"
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="mt-3 px-4 py-2 bg-[#0B8745] text-white text-xs font-bold rounded-full"
            >
              Ver todas as especialidades
            </button>
          </div>
        )}

        {/* Section bottom notice */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-500">
            Não encontrou a especialidade que precisa? Fale com a nossa recepção via WhatsApp para confirmar disponibilidade da equipe médica.
          </p>
        </div>

      </div>

      {/* Specialty Details Modal */}
      {activeModalSpecialty && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-emerald-100 relative animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#0B8745] flex items-center justify-center">
                  {React.createElement(getIcon(activeModalSpecialty.iconName), { className: 'w-6 h-6' })}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#044B25]">{activeModalSpecialty.name}</h3>
                  <span className="text-xs font-semibold text-emerald-700">{activeModalSpecialty.badge}</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalSpecialty(null)}
                className="text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed mb-5">
              {activeModalSpecialty.fullDescription}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                Principais indicações e motivos de consulta:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                {activeModalSpecialty.indications.map((ind, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0B8745]" />
                    <span>{ind}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setActiveModalSpecialty(null)}
                className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-full"
              >
                Fechar
              </button>
              <button
                type="button"
                onClick={() => {
                  const id = activeModalSpecialty.id;
                  setActiveModalSpecialty(null);
                  onOpenBooking(id);
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[#0B8745] hover:bg-[#08733A] shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar esta especialidade</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
