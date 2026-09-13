export interface InstagramPost {
  id: string;
  image: string;
  title: string;
  likes: number;
  comments: number;
  tag: string;
  excerpt: string;
  date: string;
}

export const instagramPosts: InstagramPost[] = [
  {
    id: 'post-1',
    image: 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=600',
    title: 'Cuidado humanizado em cada consulta',
    likes: 342,
    comments: 28,
    tag: '#MedClinicsManaus',
    excerpt: 'Aqui na Med Clinics, você e sua família recebem atenção individualizada e acolhedora. Venha nos visitar na Cidade Nova!',
    date: 'Há 2 dias',
  },
  {
    id: 'post-2',
    image: 'https://images.pexels.com/photos/5998445/pexels-photo-5998445.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=600',
    title: 'Pediatria com carinho e precisão',
    likes: 489,
    comments: 42,
    tag: '#SaúdeInfantil',
    excerpt: 'Acompanhar o crescimento dos pequenos é o nosso maior compromisso. Agende a consulta com nossos pediatras.',
    date: 'Há 4 dias',
  },
  {
    id: 'post-3',
    image: 'https://images.pexels.com/photos/7089018/pexels-photo-7089018.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=600',
    title: 'Exames de Ultrassonografia com laudo rápido',
    likes: 275,
    comments: 19,
    tag: '#DiagnósticoPorImagem',
    excerpt: 'Equipamentos modernos para diagnósticos precisos e com todo o conforto que você merece.',
    date: 'Há 6 dias',
  },
  {
    id: 'post-4',
    image: 'https://images.pexels.com/photos/7803063/pexels-photo-7803063.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=600',
    title: 'Sorriso saudável: Odontologia integrada',
    likes: 310,
    comments: 24,
    tag: '#OdontologiaMedClinics',
    excerpt: 'Cuidar do seu sorriso é cuidar da sua saúde integral. Atendimento odontológico para todas as idades.',
    date: 'Há 1 semana',
  },
  {
    id: 'post-5',
    image: 'https://images.pexels.com/photos/6749781/pexels-photo-6749781.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=600',
    title: 'Saúde da Mulher em foco',
    likes: 418,
    comments: 36,
    tag: '#GinecologiaManaus',
    excerpt: 'Exames preventivos e acompanhamento ginecológico regular salvam vidas. Priorize o seu autocuidado.',
    date: 'Há 1 semana',
  },
  {
    id: 'post-6',
    image: 'https://images.pexels.com/photos/6129450/pexels-photo-6129450.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=600',
    title: 'Equipe multidisciplinar preparada para você',
    likes: 520,
    comments: 47,
    tag: '#CidadeNovaManaus',
    excerpt: 'Diversas especialidades em um único endereço para facilitar a rotina de saúde da sua família.',
    date: 'Há 2 semanas',
  },
];
