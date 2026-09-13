export interface Specialty {
  id: string;
  name: string;
  badge: string;
  iconName: string;
  shortDescription: string;
  fullDescription: string;
  indications: string[];
  popular?: boolean;
}

export const specialtiesData: Specialty[] = [
  {
    id: 'clinica-medica',
    name: 'Clínica Médica',
    badge: 'Check-up Geral',
    iconName: 'Stethoscope',
    shortDescription: 'Avaliação clínica integral, diagnóstico precoce e acompanhamento preventivo contínuo.',
    fullDescription: 'O clínico geral é o pilar do cuidado com a saúde. Na Med Clinics, realizamos avaliações globais, investigação diagnóstica de sintomas complexos, controle de hipertensão, diabetes e acompanhamento de rotina preventivo.',
    indications: ['Check-up anual', 'Investigação de sintomas', 'Acompanhamento preventivo', 'Controle de comorbidades'],
    popular: true,
  },
  {
    id: 'pediatria',
    name: 'Pediatria',
    badge: 'Cuidado Infantil',
    iconName: 'Baby',
    shortDescription: 'Cuidado acolhedor e especializado desde o recém-nascido até a adolescência.',
    fullDescription: 'Acompanhamento do crescimento, desenvolvimento neuropsicomotor, vacinação e tratamento humanizado das principais enfermidades infantis com carinho e precisão médica.',
    indications: ['Puericultura mensal', 'Curva de crescimento', 'Doenças respiratórias infantis', 'Orientações nutricionais'],
    popular: true,
  },
  {
    id: 'ginecologia',
    name: 'Ginecologia & Obstetrícia',
    badge: 'Saúde da Mulher',
    iconName: 'HeartHandshake',
    shortDescription: 'Atenção integral à saúde feminina em todas as fases da vida e pré-natal cuidadoso.',
    fullDescription: 'Consultas preventivas, exame preventivo (papanicolau), anticoncepção planejada, menopausa, pré-natal com ultrassonografia e acompanhamento obstétrico acolhedor.',
    indications: ['Preventivo anual', 'Pré-natal completo', 'Planejamento reprodutivo', 'Desconfortos hormonais'],
    popular: true,
  },
  {
    id: 'cardiologia',
    name: 'Cardiologia',
    badge: 'Coração Saudável',
    iconName: 'Activity',
    shortDescription: 'Prevenção, diagnóstico cardiológico com exames no local e controle de risco.',
    fullDescription: 'Avaliação cardiovascular abrangente com realização de exames complementares como ECG, Holter, MAPA e Ecocardiograma na própria Med Clinics para sua comodidade.',
    indications: ['Hipertensão arterial', 'Risco cirúrgico pré-operatório', 'Arritmias e palpitações', 'Histórico familiar cardíaco'],
    popular: true,
  },
  {
    id: 'dermatologia',
    name: 'Dermatologia',
    badge: 'Pele & Cabelos',
    iconName: 'Sparkles',
    shortDescription: 'Tratamentos clínicos e preventivos para pele, cabelos e unhas com tecnologia moderna.',
    fullDescription: 'Diagnóstico de dermatoses, acne, melasma, queda capilar e rastreio de lesões de pele no clima tropical de Manaus com condutas médicas atualizadas.',
    indications: ['Mapeamento de sinais', 'Tratamento de acne e melasma', 'Queda de cabelo', 'Alergias e dermatites'],
    popular: true,
  },
  {
    id: 'psicologia',
    name: 'Psicologia & Saúde Mental',
    badge: 'Bem-estar Emocional',
    iconName: 'Brain',
    shortDescription: 'Espaço de acolhimento ético e psicoterapia para equilíbrio emocional e mental.',
    fullDescription: 'Atendimento humanizado para ansiedade, estresse, depressão, luto e desenvolvimento pessoal para crianças, adolescentes, adultos e casais.',
    indications: ['Transtornos de ansiedade', 'Sobrecarga e estresse', 'Depressão e humor', 'Terapia individual e familiar'],
    popular: true,
  },
  {
    id: 'odontologia',
    name: 'Odontologia',
    badge: 'Sorriso & Saúde',
    iconName: 'Smile',
    shortDescription: 'Odontologia clínica preventiva, restaurações, profilaxia e estética dental integrada.',
    fullDescription: 'Consultório odontológico moderno com biossegurança rigorosa para limpeza profilática, tratamento de cáries, clareamento e cuidados periodontais para toda a família.',
    indications: ['Limpeza e profilaxia', 'Restaurações estéticas', 'Avaliação da mordida', 'Tratamento gengival'],
  },
  {
    id: 'ortopedia',
    name: 'Ortopedia & Traumatologia',
    badge: 'Mobilidade',
    iconName: 'Bone',
    shortDescription: 'Cuidado especializado para dores articulares, coluna, postura e lesões esportivas.',
    fullDescription: 'Avaliação médica de dores na coluna, joelhos, ombros, tendinites e fraturas com suporte de exames de imagem e indicação terapêutica personalizada.',
    indications: ['Dores na coluna e articulações', 'Lesões ligamentares', 'Bursites e tendinites', 'Reabilitação motora'],
  },
  {
    id: 'nutricao',
    name: 'Nutrição Clínica',
    badge: 'Hábitos Saudáveis',
    iconName: 'Salad',
    shortDescription: 'Planos alimentares individualizados para saúde, emagrecimento saudável e controle clínico.',
    fullDescription: 'Bioimpedância, avaliação dos hábitos e elaboração de cardápios realistas para prevenção e tratamento de esteatose hepática, diabetes, colesterol e longevidade.',
    indications: ['Reeducação alimentar', 'Controle glicêmico e lipídico', 'Emagrecimento com saúde', 'Nutrição materno-infantil'],
  },
  {
    id: 'endocrinologia',
    name: 'Endocrinologia & Metabologia',
    badge: 'Equilíbrio Hormonal',
    iconName: 'ShieldPlus',
    shortDescription: 'Diagnóstico e tratamento de tireoide, diabetes, distúrbios metabólicos e hormonais.',
    fullDescription: 'Conduta especializada em nódulos de tireoide, hipotireoidismo, obesidade, reposição hormonal indicada e alterações metabólicas gerais.',
    indications: ['Doenças da tireoide', 'Diabetes tipos 1 e 2', 'Metabolismo e obesidade', 'Osteoporose'],
  },
  {
    id: 'oftalmologia',
    name: 'Oftalmologia',
    badge: 'Saúde Visual',
    iconName: 'Eye',
    shortDescription: 'Exames de refração, tonometria e avaliação preventiva da saúde dos seus olhos.',
    fullDescription: 'Medição de grau para óculos, aferição da pressão intraocular, diagnóstico precoce de glaucoma e catarata para todas as idades.',
    indications: ['Prescrição de óculos', 'Pressão intraocular', 'Fadiga visual', 'Check-up oftalmológico'],
  },
  {
    id: 'otorrinolaringologia',
    name: 'Otorrinolaringologia',
    badge: 'Ouvido, Nariz e Garganta',
    iconName: 'Ear',
    shortDescription: 'Tratamento de sinusites, rinites, alterações auditivas, ronco e dores de garganta.',
    fullDescription: 'Atendimento clínico com otoscopia e nasofibroscopia para investigação de desvios de septo, adenoides, zumbido e infecções respiratórias recorrentes.',
    indications: ['Rinite e sinusite', 'Dificuldades auditivas', 'Ronco e apneia', 'Dores de garganta constantes'],
  },
];
