import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageCircle, 
  ShieldCheck, 
  Phone,
  Sparkles
} from 'lucide-react';
import { specialtiesData } from '../data/specialties';

interface BookingSectionProps {
  initialSpecialty?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ initialSpecialty = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    specialty: initialSpecialty || '',
    type: 'particular',
    insuranceName: '',
    datePreference: '',
    shift: 'manha',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate clean state transition and prepare structured data
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const generateWhatsAppUrl = () => {
    const text = `*Solicitação de Agendamento - Med Clinics*
*Nome:* ${formData.name || 'Paciente'}
*Telefone:* ${formData.phone || 'Não informado'}
*Especialidade/Exame:* ${formData.specialty || 'Geral'}
*Atendimento:* ${formData.type === 'convenio' ? `Convênio (${formData.insuranceName || 'A confirmar'})` : 'Particular'}
*Data de preferência:* ${formData.datePreference || 'A combinar'} (${formData.shift === 'manha' ? 'Manhã' : formData.shift === 'tarde' ? 'Tarde' : 'Qualquer horário'})
*Observações:* ${formData.message || 'Sem observações'}`;

    return `https://wa.me/559293753897?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contato" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background brand glow */}
      <div 
        className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-gradient-to-tr from-emerald-100/50 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#0B8745] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Agendamento Rápido</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#044B25] tracking-tight">
            Seu cuidado começa com um agendamento.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Preencha seus dados para receber o contato da nossa equipe de recepção ou inicie uma conversa diretamente pelo WhatsApp.
          </p>
        </div>

        {/* Two Column Layout: Form + Quick Contact Information */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Interactive Form Card */}
          <div className="lg:col-span-7 bg-[#FCFDFD] rounded-3xl p-6 sm:p-10 border border-emerald-100/90 shadow-[0_10px_35px_rgba(4,75,37,0.06)]">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Nome & Telefone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Maria dos Santos"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 text-sm bg-white rounded-xl border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-[#0B8745] focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      WhatsApp / Telefone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(92) 9375-3897"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 text-sm bg-white rounded-xl border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-[#0B8745] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Especialidade / Exame */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Especialidade ou Exame *
                    </label>
                    <select
                      required
                      value={formData.specialty}
                      onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                      className="w-full px-4 py-3 text-sm bg-white rounded-xl border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-[#0B8745] focus:border-transparent transition-all text-slate-700"
                    >
                      <option value="">Selecione...</option>
                      <optgroup label="Especialidades">
                        {specialtiesData.map((spec) => (
                          <option key={spec.id} value={spec.name}>
                            {spec.name}
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="Exames">
                        <option value="Ultrassonografia">Ultrassonografia</option>
                        <option value="Eletrocardiograma (ECG)">Eletrocardiograma (ECG)</option>
                        <option value="Ecocardiograma">Ecocardiograma com Doppler</option>
                        <option value="Holter 24h">Holter 24 Horas</option>
                        <option value="MAPA 24h">MAPA 24 Horas</option>
                        <option value="Teste Ergométrico">Teste Ergométrico</option>
                        <option value="Raio-X Digital">Raio-X Digital</option>
                        <option value="Exames Laboratoriais">Exames Laboratoriais</option>
                      </optgroup>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Modalidade de Atendimento *
                    </label>
                    <div className="flex gap-2">
                      <label
                        className={`flex-1 flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${
                          formData.type === 'particular'
                            ? 'bg-emerald-50 border-[#0B8745] text-[#044B25]'
                            : 'bg-white border-slate-200 text-slate-600 hover:border-emerald-200'
                        }`}
                      >
                        <input
                          type="radio"
                          name="type"
                          value="particular"
                          checked={formData.type === 'particular'}
                          onChange={() => setFormData({ ...formData, type: 'particular' })}
                          className="sr-only"
                        />
                        <span>Particular</span>
                      </label>

                      <label
                        className={`flex-1 flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${
                          formData.type === 'convenio'
                            ? 'bg-emerald-50 border-[#0B8745] text-[#044B25]'
                            : 'bg-white border-slate-200 text-slate-600 hover:border-emerald-200'
                        }`}
                      >
                        <input
                          type="radio"
                          name="type"
                          value="convenio"
                          checked={formData.type === 'convenio'}
                          onChange={() => setFormData({ ...formData, type: 'convenio' })}
                          className="sr-only"
                        />
                        <span>Convênio</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* If Convênio selected */}
                {formData.type === 'convenio' && (
                  <div className="animate-in fade-in duration-200">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Qual o seu Convênio?
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Unimed Manaus, Bradesco Saúde, Cassi, etc."
                      value={formData.insuranceName}
                      onChange={(e) => setFormData({ ...formData, insuranceName: e.target.value })}
                      className="w-full px-4 py-3 text-sm bg-white rounded-xl border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-[#0B8745]"
                    />
                  </div>
                )}

                {/* Preferência de Data e Turno */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Preferência de Data
                    </label>
                    <input
                      type="date"
                      value={formData.datePreference}
                      onChange={(e) => setFormData({ ...formData, datePreference: e.target.value })}
                      className="w-full px-4 py-3 text-sm bg-white rounded-xl border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-[#0B8745] text-slate-700"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Melhor Turno
                    </label>
                    <select
                      value={formData.shift}
                      onChange={(e) => setFormData({ ...formData, shift: e.target.value })}
                      className="w-full px-4 py-3 text-sm bg-white rounded-xl border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-[#0B8745] text-slate-700"
                    >
                      <option value="manha">Manhã (07h às 12h)</option>
                      <option value="tarde">Tarde (13h às 18h)</option>
                      <option value="sabado">Sábado pela manhã</option>
                    </select>
                  </div>
                </div>

                {/* Mensagem / Observações */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Observações ou Dúvidas (Opcional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Conte se possui algum pedido médico específico ou sintoma prioritário..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 text-sm bg-white rounded-xl border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-[#0B8745]"
                  />
                </div>

                {/* Submit Actions */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#0B8745] to-[#044B25] hover:from-[#0E9A50] hover:to-[#065A2E] shadow-md hover:shadow-lg transition-all cursor-pointer disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        <span>Enviando solicitação...</span>
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        <span>Solicitar agendamento</span>
                      </span>
                    )}
                  </button>

                  <a
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-sm font-bold text-[#044B25] bg-[#E8F8EE] hover:bg-[#D5F2DF] border border-emerald-300 transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-[#0B8745]" />
                    <span>Enviar direto pelo WhatsApp</span>
                  </a>
                </div>

                <p className="text-[11px] text-slate-400 text-center">
                  * Sua solicitação é transmitida com segurança. Nossa recepção retornará para confirmação de horário em até 20 minutos durante horário comercial.
                </p>

              </form>
            ) : (
              /* Success confirmation state */
              <div className="py-10 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#0B8745] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-[#044B25]">
                  Solicitação Recebida com Sucesso!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Agradecemos pela preferência, <strong>{formData.name}</strong>. Nossa equipe entrará em contato pelo WhatsApp/telefone informado para confirmar a disponibilidade de horário.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white bg-[#0B8745] hover:bg-[#08733A] shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Agilizar confirmação no WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        specialty: '',
                        type: 'particular',
                        insuranceName: '',
                        datePreference: '',
                        shift: 'manha',
                        message: '',
                      });
                    }}
                    className="px-5 py-3 text-xs font-semibold text-slate-600 hover:text-slate-900"
                  >
                    Novo agendamento
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right: Clinic Contact Cards & Direct WhatsApp */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Priority Card */}
            <div className="bg-gradient-to-br from-[#0B8745] to-[#044B25] text-white p-7 rounded-3xl shadow-xl relative overflow-hidden">
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-white/5 rounded-full blur-xl pointer-events-none" />

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xs flex items-center justify-center text-white">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold">Atendimento Via WhatsApp</h4>
                  <p className="text-xs text-emerald-200">Resposta humanizada e ágil</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-normal mb-6">
                Prefere conversar diretamente com nossa equipe? Envie uma mensagem e receba suporte para marcação de consultas, dúvidas sobre convênios e valores de exames.
              </p>

              <a
                href="https://wa.me/559293753897?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20Med%20Clinics"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-full text-sm font-bold text-[#044B25] bg-white hover:bg-emerald-50 transition-all shadow-md cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#0B8745]" />
                <span>Conversar no WhatsApp (+55 92 9375-3897)</span>
              </a>
            </div>

            {/* Operating Times Card */}
            <div className="bg-[#F8FAF9] p-6 rounded-3xl border border-emerald-100/90 space-y-4">
              <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#0B8745]" />
                <span>Horários de Funcionamento</span>
              </h4>

              <div className="space-y-2.5 text-xs sm:text-sm">
                <div className="flex justify-between items-center py-1.5 border-b border-slate-200/60">
                  <span className="text-slate-600 font-medium">Segunda a Sexta</span>
                  <span className="font-bold text-[#044B25]">07:00 às 18:00</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-slate-200/60">
                  <span className="text-slate-600 font-medium">Sábado</span>
                  <span className="font-bold text-[#044B25]">07:00 às 12:00</span>
                </div>
                <div className="flex justify-between items-center py-1.5 text-slate-500">
                  <span>Domingo e Feriados</span>
                  <span className="text-slate-400 italic">Fechado</span>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-[#0B8745] flex-shrink-0" />
                <span>Recepção com controle de fluxo e ambiente higienizado.</span>
              </div>
            </div>

            {/* Location Pill */}
            <div className="p-5 rounded-2xl bg-white border border-emerald-100 flex items-center gap-3 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-[#0B8745] flex-shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div className="text-xs text-slate-600">
                <p className="font-bold text-slate-800">Agendamentos para o mesmo dia</p>
                <p>Consulte encaixes disponíveis para casos prioritários.</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
