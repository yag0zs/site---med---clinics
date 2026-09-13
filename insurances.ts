export interface InsurancePlan {
  id: string;
  name: string;
  coverage: string;
  type: 'saude' | 'odontologico' | 'ambos';
  badge: string;
}

export const acceptedInsurances: InsurancePlan[] = [
  {
    id: 'unimed',
    name: 'Unimed',
    coverage: 'Consultas & Exames selecionados',
    type: 'saude',
    badge: 'Ampla Cobertura',
  },
  {
    id: 'bradesco',
    name: 'Bradesco Saúde',
    coverage: 'Consultas eletivas e diagnósticos',
    type: 'saude',
    badge: 'Nacional & Regional',
  },
  {
    id: 'sulamerica',
    name: 'SulAmérica Saúde',
    coverage: 'Consultas médicas e exames',
    type: 'saude',
    badge: 'Credenciamento Ativo',
  },
  {
    id: 'amil',
    name: 'Amil',
    coverage: 'Multiespecialidades e check-up',
    type: 'saude',
    badge: 'Planos Selecionados',
  },
  {
    id: 'mediservice',
    name: 'Mediservice',
    coverage: 'Consultas e diagnósticos',
    type: 'saude',
    badge: 'Atendimento Rápido',
  },
  {
    id: 'cassi',
    name: 'Cassi',
    coverage: 'Funcionários BB e dependentes',
    type: 'saude',
    badge: 'Convênio Ativo',
  },
  {
    id: 'geap',
    name: 'Geap Autogestão',
    coverage: 'Servidores públicos federais',
    type: 'saude',
    badge: 'Planos Compatíveis',
  },
  {
    id: 'petrobras',
    name: 'AMS Petrobras',
    coverage: 'Consultas e exames complementares',
    type: 'saude',
    badge: 'Atendimento Especializado',
  },
  {
    id: 'particular',
    name: 'Atendimento Particular',
    coverage: 'Valores acessíveis e parcelamento',
    type: 'ambos',
    badge: 'Sem Mensalidade',
  },
];
