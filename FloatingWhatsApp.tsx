import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltip after 3 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = "https://wa.me/559293753897?text=Olá!%20Vim%20pelo%20site%20da%20Med%20Clinics%20e%20gostaria%20de%20agendar%20uma%20consulta%20ou%20exame.";

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Tooltip Notification */}
      {showTooltip && (
        <div className="mb-2 bg-white text-slate-800 p-3.5 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.15)] border border-emerald-100 max-w-xs animate-in fade-in slide-in-from-bottom-2 duration-300 relative">
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 text-slate-400 hover:text-slate-600 p-1"
            aria-label="Fechar dica"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold text-[#044B25]">Atendimento Online</span>
          </div>
          <p className="text-xs text-slate-600 mt-1">
            Olá! Precisa agendar sua consulta ou tirar dúvidas sobre exames? Fale conosco!
          </p>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir WhatsApp da Med Clinics"
        className="relative group flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#0B8745] text-white shadow-[0_6px_25px_rgba(11,135,69,0.45)] hover:shadow-[0_8px_32px_rgba(11,135,69,0.6)] hover:scale-105 active:scale-95 transition-all duration-300"
      >
        {/* Soft pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-[#0B8745]/40 animate-ping opacity-75 group-hover:opacity-100 pointer-events-none" />

        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 group-hover:scale-110 transition-transform duration-200" />
      </a>
    </div>
  );
};
