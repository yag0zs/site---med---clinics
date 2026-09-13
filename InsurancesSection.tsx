import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Search, 
  Check, 
  CreditCard, 
  MessageCircle,
  Building,
  HeartHandshake
} from 'lucide-react';
import { acceptedInsurances } from '../data/insurances';

interface InsurancesSectionProps {
  onOpenBooking: () => void;
}

export const InsurancesSection: React.FC<InsurancesSectionProps> = ({ onOpenBooking }) => {
  const [filterQuery, setFilterQuery] = useState('');

  const filteredPlans = acceptedInsurances.filter((plan) =>
    plan.name.toLowerCase().includes(filterQuery.toLowerCase()) ||
    plan.coverage.toLowerCase().includes(filterQuery.toLowerCase())
  );

  return (
    <section id="convenios" className="py-20 lg:py-28 bg-[#F4F9F6] relative overflow-hidden">
      {/* Background patterns */}
      <div 
        className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-[#0B8745] text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Facilidade de Atendimento</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#044B25] tracking-tight">
            Atendimento por convênios
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Trabalhamos com os principais planos de saúde e oferecemos condições especiais e justas para consultas e exames particulares.
          </p>

          {/* Quick Search */}
          <div className="mt-8 max-w-md mx-auto relative">
            <input
              type="text"
              placeholder="Digite o nome do seu plano (ex: Unimed, Bradesco)..."
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 text-sm bg-white rounded-2xl border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-[#0B8745] shadow-xs"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* Insurance Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
          {filteredPlans.map((plan) => (
            <div
              key={plan.id}
              className="bg-white rounded-2xl p-5 border border-emerald-100 hover:border-emerald-300 shadow-[0_2px_12px_rgba(4,75,37,0.03)] hover:shadow-[0_12px_24px_rgba(11,135,69,0.08)] hover:-translate-y-0.5 transition-all flex items-start gap-4 group"
            >
              {/* Emblem icon */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-50 to-[#E8F8EE] border border-emerald-200/60 flex items-center justify-center flex-shrink-0 text-[#0B8745] group-hover:bg-[#0B8745] group-hover:text-white transition-colors">
                <Building className="w-6 h-6" />
              </div>

              {/* Details */}
              <div className="flex-1">
                <div className="flex items-center justify-between gap-1 mb-1">
                  <h3 className="text-base font-bold text-slate-800 group-hover:text-[#044B25] transition-colors">
                    {plan.name}
                  </h3>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-[#0B8745] border border-emerald-200/50">
                    {plan.badge}
                  </span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {plan.coverage}
                </p>
                <div className="mt-2.5 flex items-center gap-1.5 text-[11px] text-emerald-700 font-medium">
                  <Check className="w-3.5 h-3.5" />
                  <span>Aceito na unidade Manaus</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Particular Benefits Card */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-emerald-200/80 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            <div className="lg:col-span-2 space-y-2">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B8745] uppercase tracking-wider">
                <HeartHandshake className="w-4 h-4" />
                <span>Não tem convênio? Nós cuidamos de você!</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-[#044B25]">
                Tabela Acessível e Parcelamento no Cartão
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Acreditamos que saúde de qualidade deve estar ao alcance de todos. Oferecemos valores populares em consultas e exames, pacotes de check-up e facilidade no pagamento em até 6x no cartão de crédito ou com desconto especial no PIX.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <a
                href="https://wa.me/559293753897?text=Olá!%20Gostaria%20de%20consultar%20a%20cobertura%20do%20meu%20convênio%20na%20Med%20Clinics"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-[#0B8745] hover:bg-[#08733A] shadow-md transition-all cursor-pointer text-center"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Consulte nossos convênios no WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-slate-700 bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 transition-all cursor-pointer text-center"
              >
                <CreditCard className="w-4 h-4 text-emerald-700" />
                <span>Consultar Valores Particulares</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
