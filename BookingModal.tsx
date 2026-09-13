import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, MessageSquare, Send } from 'lucide-react';
import { specialtiesData } from '../data/specialties';
import { MedClinicsLogo } from './MedClinicsLogo';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultSpecialty?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  defaultSpecialty = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    attendanceType: 'particular',
    date: '',
    notes: '',
  });

  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (defaultSpecialty) {
      setFormData((prev) => ({ ...prev, service: defaultSpecialty }));
    }
  }, [defaultSpecialty]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  const generateWhatsAppDirect = () => {
    const text = `*Agendamento Med Clinics*
*Nome:* ${formData.name || 'Paciente'}
*Telefone:* ${formData.phone || 'Não informado'}
*Especialidade/Exame:* ${formData.service || 'Geral'}
*Atendimento:* ${formData.attendanceType === 'convenio' ? 'Convênio' : 'Particular'}
*Data desejada:* ${formData.date || 'Primeira data disponível'}
*Observações:* ${formData.notes || 'Nenhuma'}`;

    return `https://wa.me/559293753897?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-emerald-100 relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Fechar janela"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            <div className="mb-6">
              <MedClinicsLogo size="sm" showSubtitle={false} />
              <h3 className="text-xl sm:text-2xl font-bold text-[#044B25] mt-2">
                Agende sua Consulta ou Exame
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Cidade Nova, Manaus – AM. Resposta ágil pela recepção.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 rounded-xl border border-emerald-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0B8745]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Telefone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(92) 9375-3897"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 rounded-xl border border-emerald-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0B8745]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Especialidade / Exame *
                  </label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3 py-2.5 text-xs sm:text-sm bg-slate-50 rounded-xl border border-emerald-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0B8745]"
                  >
                    <option value="">Selecione...</option>
                    <optgroup label="Especialidades">
                      {specialtiesData.map((s) => (
                        <option key={s.id} value={s.name}>{s.name}</option>
                      ))}
                    </optgroup>
                    <optgroup label="Exames">
                      <option value="Ultrassonografia">Ultrassonografia</option>
                      <option value="Eletrocardiograma (ECG)">Eletrocardiograma (ECG)</option>
                      <option value="Ecocardiograma">Ecocardiograma</option>
                      <option value="Holter 24h">Holter 24 Horas</option>
                      <option value="MAPA 24h">MAPA 24 Horas</option>
                      <option value="Teste Ergométrico">Teste Ergométrico</option>
                      <option value="Raio-X Digital">Raio-X Digital</option>
                    </optgroup>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Atendimento *
                  </label>
                  <select
                    value={formData.attendanceType}
                    onChange={(e) => setFormData({ ...formData, attendanceType: e.target.value })}
                    className="w-full px-3 py-2.5 text-xs sm:text-sm bg-slate-50 rounded-xl border border-emerald-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0B8745]"
                  >
                    <option value="particular">Particular</option>
                    <option value="convenio">Convênio</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Data preferencial
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 rounded-xl border border-emerald-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0B8745]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Mensagem / Observações
                </label>
                <textarea
                  rows={2}
                  placeholder="Alguma necessidade especial ou sintoma..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs bg-slate-50 rounded-xl border border-emerald-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0B8745]"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#0B8745] hover:bg-[#08733A] shadow-md transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Solicitação</span>
                </button>

                <a
                  href={generateWhatsAppDirect()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-[#044B25] bg-emerald-100/70 hover:bg-emerald-200 border border-emerald-300 transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-[#0B8745]" />
                  <span>Via WhatsApp</span>
                </a>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-[#0B8745] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-[#044B25]">
              Solicitação Registrada!
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
              Obrigado, <strong>{formData.name}</strong>. Nossa equipe entrará em contato para confirmar sua vaga na Med Clinics.
            </p>
            <div className="pt-2 flex justify-center gap-3">
              <a
                href={generateWhatsAppDirect()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[#0B8745] hover:bg-[#08733A]"
              >
                Conversar no WhatsApp agora
              </a>
              <button
                type="button"
                onClick={() => {
                  setIsSuccess(false);
                  onClose();
                }}
                className="px-4 py-2.5 rounded-full text-xs font-semibold text-slate-600 hover:bg-slate-100"
              >
                Fechar
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
