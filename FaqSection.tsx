import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Como faço para agendar uma consulta ou exame na Med Clinics?',
      answer: 'O agendamento pode ser feito de forma simples e rápida diretamente pelo formulário em nosso site, pelo botão de WhatsApp disponível 24h ou ligando para nossa central telefônica. Nossa equipe de recepção responde rapidamente para confirmar o melhor horário.',
    },
    {
      question: 'Quais convênios a Med Clinics aceita?',
      answer: 'Atendemos uma ampla rede de convênios como Unimed, Bradesco Saúde, Amil, SulAmérica, Cassi, Geap, Petrobras/AMS, entre outros. Como a cobertura pode variar conforme o tipo de plano e procedimento, nossa equipe pode verificar instantaneamente a elegibilidade do seu cartão pelo WhatsApp.',
    },
    {
      question: 'Não tenho convênio médico. Posso ser atendido como particular?',
      answer: 'Com certeza! A Med Clinics possui uma tabela particular acessível pensada para os moradores de Manaus. Oferecemos opções facilitadas de parcelamento em até 6x no cartão de crédito e desconto especial para pagamentos no PIX ou dinheiro.',
    },
    {
      question: 'Qual o endereço exato da clínica em Manaus?',
      answer: 'Estamos localizados na Rua Prof. Félix Valois, 119 – Bairro Cidade Nova, Manaus – AM. A clínica conta com ambiente climatizado, acessibilidade completa e estacionamento para o conforto dos pacientes.',
    },
    {
      question: 'Como recebo os laudos e resultados dos meus exames?',
      answer: 'Os laudos de ultrassonografia e eletrocardiograma contam com emissão ágil, muitos liberados no mesmo dia ou em até 24 horas. Eles podem ser retirados presencialmente na recepção ou enviados de forma prática em PDF diretamente para o seu WhatsApp/e-mail cadastrado.',
    },
    {
      question: 'A clínica realiza atendimento para crianças e idosos?',
      answer: 'Sim, somos uma clínica multiespecialidades. Contamos com atendimento dedicado em Pediatria (desde recém-nascidos até adolescentes), Clínica Médica, Cardiologia e Ginecologia, acolhendo pacientes em todas as etapas da vida.',
    },
  ];

  return (
    <section className="py-20 bg-[#F4F9F6] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-[#0B8745] text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Tire suas Dúvidas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#044B25] tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Esclareça as dúvidas mais comuns sobre nosso atendimento, convênios e agendamentos.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-emerald-100/90 shadow-2xs overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full py-4 sm:py-5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus:bg-emerald-50/50"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-800">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-emerald-50 text-[#0B8745] flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#0B8745] text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support contact footnote */}
        <div className="mt-10 p-5 rounded-2xl bg-white border border-emerald-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left text-xs text-slate-600">
            <span className="font-bold text-slate-800 block text-sm">Ainda possui alguma dúvida específica?</span>
            Nossa equipe de recepção está pronta para esclarecer pelo telefone ou WhatsApp.
          </div>
          <a
            href="https://wa.me/559293753897?text=Olá!%20Tenho%20uma%20dúvida%20sobre%20o%20atendimento%20na%20Med%20Clinics"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[#0B8745] hover:bg-[#08733A] whitespace-nowrap shadow-xs"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Falar com Atendente</span>
          </a>
        </div>

      </div>
    </section>
  );
};
