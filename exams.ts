export interface ExamItem {
  id: string;
  name: string;
  category: string;
  shortDescription: string;
  preparationNote: string;
  durationApprox: string;
  deliveryTime: string;
  iconName: string;
  badge: string;
}

export const examsData: ExamItem[] = [
  {
    id: 'ultrassonografia',
    name: 'Ultrassonografia',
    category: 'Diagnóstico por Imagem',
    shortDescription: 'Exames de ultrassom com tecnologia de alta definição para abdômen, pélvica, mamas, tireoide, obstétrica e morfológica.',
    preparationNote: 'A depender do exame (jejum de 6h para abdômen superior ou bexiga cheia para pélvica). Orientamos no agendamento.',
    durationApprox: '15 a 30 min',
    deliveryTime: 'Laudo rápido no mesmo dia ou em até 24h',
    iconName: 'ScanLine',
    badge: 'Alta Resolução',
  },
  {
    id: 'eletrocardiograma',
    name: 'Eletrocardiograma (ECG)',
    category: 'Cardiologia',
    shortDescription: 'Registro gráfico da atividade elétrica do coração para avaliar ritmo cardíaco, bloqueios e sinais de sobrecarga.',
    preparationNote: 'Não requer jejum. Recomenda-se não usar cremes no tórax no dia do exame.',
    durationApprox: '10 a 15 min',
    deliveryTime: 'Resultado e laudo cardiológico ágil',
    iconName: 'Activity',
    badge: 'Rotina & Risco Cirúrgico',
  },
  {
    id: 'ecocardiograma',
    name: 'Ecocardiograma com Doppler',
    category: 'Cardiologia',
    shortDescription: 'Avaliação detalhada da anatomia, fluxo sanguíneo, funcionamento das válvulas e contração muscular cardíaca.',
    preparationNote: 'Não necessita de jejum. Trazer exames cardiológicos anteriores se houver.',
    durationApprox: '20 a 30 min',
    deliveryTime: 'Laudo emitido por cardiologista especialista',
    iconName: 'HeartPulse',
    badge: 'Cardiologia Avançada',
  },
  {
    id: 'holter-24h',
    name: 'Holter 24 Horas',
    category: 'Cardiologia',
    shortDescription: 'Monitoramento contínuo do eletrocardiograma durante 24 horas para detectar arritmias e sintomas intermitentes.',
    preparationNote: 'Tomar banho antes da instalação do aparelho. Utilizar roupas confortáveis.',
    durationApprox: 'Instalação em 15 min + monitoramento de 24h',
    deliveryTime: 'Laudo em até 48 horas úteis',
    iconName: 'Clock',
    badge: 'Monitoramento 24h',
  },
  {
    id: 'mapa-24h',
    name: 'MAPA 24 Horas',
    category: 'Cardiologia',
    shortDescription: 'Monitorização Ambulatorial da Pressão Arterial durante 24h nas atividades do dia a dia e durante o sono.',
    preparationNote: 'Trazer cinto para fixação do monitor. Vestir camisa de manga curta ou folgada.',
    durationApprox: 'Instalação em 15 min + monitoramento de 24h',
    deliveryTime: 'Laudo detalhado com gráficos pressóricos',
    iconName: 'Gauge',
    badge: 'Controle Pressórico',
  },
  {
    id: 'teste-ergometrico',
    name: 'Teste Ergométrico',
    category: 'Cardiologia & Esforço',
    shortDescription: 'Avaliação cardiovascular sob esforço físico em esteira, verificando capacidade funcional e resposta isquêmica.',
    preparationNote: 'Vir com tênis e roupa confortável para caminhada/corrida. Alimentação leve prévia.',
    durationApprox: '30 a 40 min',
    deliveryTime: 'Laudo emitido no mesmo dia',
    iconName: 'Zap',
    badge: 'Check-up Físico',
  },
  {
    id: 'raio-x',
    name: 'Raio-X Digital',
    category: 'Diagnóstico por Imagem',
    shortDescription: 'Radiografia com emissão reduzida de radiação e imagens digitais nítidas de tórax, ossos e articulações.',
    preparationNote: 'Remover joias e acessórios metálicos antes do exame.',
    durationApprox: '10 min',
    deliveryTime: 'Disponibilização rápida digital e laudo',
    iconName: 'Layers',
    badge: 'Digital de Baixa Radiação',
  },
  {
    id: 'laboratoriais',
    name: 'Exames Laboratoriais',
    category: 'Análises Clínicas',
    shortDescription: 'Hemograma completo, perfil lipídico, glicemia, função renal, tireoidiana e painel preventivo com coleta confortável.',
    preparationNote: 'Jejum recomendado conforme o tipo de exame (geralmente de 8h a 12h para lipídios).',
    durationApprox: 'Coleta em 10 min',
    deliveryTime: 'Resultados online ou retirada física',
    iconName: 'Microscope',
    badge: 'Painel Preventivo',
  },
];
