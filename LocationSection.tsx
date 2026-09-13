import React from 'react';
import { 
  MapPin, 
  Navigation, 
  Car, 
  Bus, 
  Accessibility, 
  Clock, 
  Phone,
  Compass
} from 'lucide-react';

export const LocationSection: React.FC = () => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Med Clinics Rua Prof Felix Valois 119 Cidade Nova Manaus AM")}`;

  return (
    <section className="py-20 lg:py-24 bg-[#F8FAF9] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-[#0B8745] text-xs font-bold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Fácil Acesso</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#044B25] tracking-tight">
            Estamos esperando por você
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Localização privilegiada no coração da Zona Norte de Manaus, com acesso rápido para toda a comunidade.
          </p>
        </div>

        {/* Location Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Details Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-emerald-100/90 shadow-[0_8px_30px_rgba(4,75,37,0.06)] flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Address Highlight */}
              <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200/70">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0B8745] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#0B8745] uppercase tracking-wider">
                      Endereço da Unidade
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                      Rua Prof. Félix Valois, 119
                    </h3>
                    <p className="text-sm text-slate-600 font-medium">
                      Cidade Nova – Manaus – AM
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      Zona Norte de Manaus • Próximo às principais vias de circulação
                    </p>
                  </div>
                </div>
              </div>

              {/* Facility Highlights */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#0B8745] flex items-center justify-center flex-shrink-0">
                    <Car className="w-4 h-4" />
                  </div>
                  <span>Vagas de estacionamento e embarque/desembarque facilitado.</span>
                </div>

                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#0B8745] flex items-center justify-center flex-shrink-0">
                    <Accessibility className="w-4 h-4" />
                  </div>
                  <span>Acessibilidade completa com rampa de acesso e sanitários adaptados.</span>
                </div>

                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#0B8745] flex items-center justify-center flex-shrink-0">
                    <Bus className="w-4 h-4" />
                  </div>
                  <span>Acesso facilitado por linhas de transporte público da Cidade Nova.</span>
                </div>
              </div>

              {/* Direct Contacts */}
              <div className="pt-4 border-t border-slate-100 flex flex-col gap-2 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#0B8745]" />
                  <span>Segunda a Sexta: 07h às 18h | Sábado: 07h às 12h</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#0B8745]" />
                  <a
                    href="https://wa.me/559293753897?text=Olá!%20Gostaria%20de%20informações%20sobre%20a%20localização%20da%20Med%20Clinics"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#0B8745] font-medium"
                  >
                    WhatsApp / Central: +55 (92) 9375-3897
                  </a>
                </div>
              </div>

            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-sm font-bold text-white bg-[#0B8745] hover:bg-[#08733A] shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <Navigation className="w-4 h-4" />
                <span>Como chegar (Abrir no GPS / Google Maps)</span>
              </a>
            </div>
          </div>

          {/* Right Map Visualizer */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-emerald-200/80 shadow-[0_8px_30px_rgba(4,75,37,0.06)] relative bg-slate-100 min-h-[380px] flex flex-col">
            
            {/* Interactive OpenStreetMap Embed for exact Cidade Nova area */}
            <div className="relative w-full h-full min-h-[360px] flex-1">
              <iframe
                title="Localização da Med Clinics em Cidade Nova Manaus"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-60.015%2C-3.045%2C-59.955%2C-3.015&amp;layer=mapnik&amp;marker=-3.0315%2C-59.9822"
                className="w-full h-full border-0 absolute inset-0 filter saturate-[0.85] contrast-[1.05]"
                loading="lazy"
              />

              {/* Floating Pin Card */}
              <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-emerald-100">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0B8745] animate-ping" />
                  <span className="text-xs font-bold text-[#044B25] uppercase tracking-wider">MED CLINICS</span>
                </div>
                <p className="text-xs font-bold text-slate-800">Rua Prof. Félix Valois, 119</p>
                <p className="text-[11px] text-slate-500">Cidade Nova – Manaus, Amazonas</p>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-[11px] font-bold text-[#0B8745] hover:underline"
                >
                  <span>Ver rotas no Google Maps</span>
                  <Navigation className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Bottom info banner */}
            <div className="bg-white p-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Bairro Cidade Nova • Manaus, AM</span>
              <span className="text-emerald-700 font-medium">Recepção aberta para atendimento</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
