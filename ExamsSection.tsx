import React, { useState } from 'react';
import { 
  ScanLine, 
  Activity, 
  HeartPulse, 
  Clock, 
  Gauge, 
  Zap, 
  Layers, 
  Microscope,
  FileCheck,
  Calendar,
  MessageSquare,
  HelpCircle,
  X
} from 'lucide-react';
import { examsData, ExamItem } from '../data/exams';

interface ExamsSectionProps {
  onOpenBooking: (examOrSpecialty?: string) => void;
  onRequestQuote: (examName: string) => void;
}

export const ExamsSection: React.FC<ExamsSectionProps> = ({ onOpenBooking, onRequestQuote }) => {
  const [selectedExam, setSelectedExam] = useState<ExamItem | null>(null);

  // Icon mapping
  const getExamIcon = (iconName: string) => {
    switch (iconName) {
      case 'ScanLine': return ScanLine;
      case 'Activity': return Activity;
      case 'HeartPulse': return HeartPulse;
      case 'Clock': return Clock;
      case 'Gauge': return Gauge;
      case 'Zap': return Zap;
      case 'Layers': return Layers;
      case 'Microscope': return Microscope;
      default: return Activity;
    }
  };

  return (
    <section id="exames" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background soft green radial tints */}
      <div 
        className="absolute top-1/3 left-0 w-80 h-80 bg-emerald-50 rounded-full blur-3xl pointer-events-none -translate-x-1/2"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#0B8745] text-xs font-bold uppercase tracking-wider mb-3">
            <FileCheck className="w-3.5 h-3.5" />
            <span>Diagnósticos Confiáveis</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#044B25] tracking-tight">
            Exames realizados na Med Clinics
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Equipamentos calibrados de última geração e laudos criteriosos emitidos por médicos especialistas em Manaus para o seu diagnóstico preciso.
          </p>
        </div>

        {/* Exams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {examsData.map((exam) => {
            const Icon = getExamIcon(exam.iconName);
            return (
              <div
                key={exam.id}
                className="bg-[#FCFDFD] rounded-3xl p-6 border border-emerald-100/90 shadow-[0_4px_16px_rgba(4,75,37,0.03)] hover:shadow-[0_16px_32px_rgba(11,135,69,0.1)] hover:border-emerald-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-[#0B8745] group-hover:scale-105 group-hover:bg-[#0B8745] group-hover:text-white transition-all shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                      {exam.category}
                    </span>
                  </div>

                  {/* Badge */}
                  <div className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#0B8745] bg-emerald-50 px-2 py-0.5 rounded-md mb-2">
                    {exam.badge}
                  </div>

                  {/* Exam Name */}
                  <h3 className="text-lg font-bold text-slate-800 group-hover:text-[#044B25] transition-colors mb-2">
                    {exam.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4 line-clamp-3">
                    {exam.shortDescription}
                  </p>
                </div>

                {/* Bottom Details & CTAs */}
                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <div className="text-[11px] text-slate-500 flex items-center justify-between">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{exam.durationApprox}</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => setSelectedExam(exam)}
                      className="text-[#0B8745] hover:underline font-semibold cursor-pointer"
                    >
                      Preparo
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => onRequestQuote(exam.name)}
                      className="w-full py-2 px-2.5 rounded-xl text-xs font-semibold text-slate-700 bg-white hover:bg-emerald-50 border border-emerald-200 hover:border-emerald-400 transition-colors cursor-pointer text-center"
                    >
                      Solicitar orçamento
                    </button>
                    <button
                      type="button"
                      onClick={() => onOpenBooking(exam.name)}
                      className="w-full py-2 px-2.5 rounded-xl text-xs font-semibold text-white bg-[#0B8745] hover:bg-[#08733A] transition-colors cursor-pointer text-center shadow-xs"
                    >
                      Agendar
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Banner: Quote Request & WhatsApp Direct */}
        <div className="mt-14 rounded-3xl bg-gradient-to-r from-[#044B25] to-[#076834] text-white p-8 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-white/5 -skew-x-12 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            <div className="max-w-2xl">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Precisa de um orçamento para múltiplos exames?
              </h3>
              <p className="mt-2 text-sm sm:text-base text-emerald-100/90 leading-relaxed font-normal">
                Envie o seu pedido médico diretamente para nossa central no WhatsApp. Informamos os valores para convênio e particular com condições especiais.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href="https://wa.me/559293753897?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20de%20exames%20na%20Med%20Clinics"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-[#044B25] bg-white hover:bg-emerald-50 shadow-md transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#0B8745]" />
                <span>Solicite um orçamento via WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => onOpenBooking('Exames Gerais')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-white bg-emerald-600/80 hover:bg-emerald-600 border border-white/20 transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar Exame</span>
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Exam Preparation Modal */}
      {selectedExam && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl border border-emerald-100 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#0B8745] flex items-center justify-center">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#044B25]">{selectedExam.name}</h4>
                  <span className="text-xs font-semibold text-slate-500">Orientações e Preparo</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedExam(null)}
                className="text-slate-400 hover:text-slate-700 p-1 rounded-full hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 py-2 text-xs sm:text-sm text-slate-600">
              <div className="p-3.5 bg-emerald-50/70 rounded-2xl border border-emerald-200/60">
                <span className="font-bold text-[#044B25] block mb-1">Recomendações Prévias:</span>
                <p>{selectedExam.preparationNote}</p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-3 bg-slate-50 rounded-xl">
                  <span className="text-slate-400 block font-medium">Duração estimada</span>
                  <span className="font-bold text-slate-800">{selectedExam.durationApprox}</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl">
                  <span className="text-slate-400 block font-medium">Liberação do Laudo</span>
                  <span className="font-bold text-slate-800">{selectedExam.deliveryTime}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedExam(null)}
                className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-full"
              >
                Entendi
              </button>
              <button
                type="button"
                onClick={() => {
                  const name = selectedExam.name;
                  setSelectedExam(null);
                  onRequestQuote(name);
                }}
                className="px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[#0B8745] hover:bg-[#08733A] shadow-md"
              >
                Solicitar orçamento deste exame
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
