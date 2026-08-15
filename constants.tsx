import { ServiceItem } from './types';

export const SERVICES: ServiceItem[] = [
  { 
    id: '1', 
    title: 'MENTORIA P7',
    code: '01', 
    description: 'Você já tem experiência, resultado e conhecimento. O que falta é o mercado enxergar isso com clareza. A Mentoria P7 é onde você constrói o projeto digital que representa quem você realmente é: um posicionamento claro, uma marca que comunica valor e uma direção de conteúdo que te coloca na frente do público certo.',
    highlight: false,
    isMentoria: true,
    subItems: [
      {
        title: 'Mentoria P7 Club — Individual',
        description: 'Um atendimento exclusivo, feito sob medida para o seu momento. Construímos juntos o seu posicionamento, o seu branding e a sua estratégia de conteúdo, sessão a sessão, com total prioridade e dedicação ao seu caso.'
      },
      {
        title: 'BASE7 — Turma',
        description: 'Um acompanhamento de 3 meses em grupo, ao lado de outros profissionais que estão construindo o mesmo tipo de marca que você. Você constrói o seu projeto no seu ritmo, com acompanhamento constante para corrigir a rota no caminho, e networking real com quem está vivendo a mesma jornada.'
      }
    ]
  },
  { 
    id: '2', 
    title: 'MOV7', 
    code: '02', 
    description: 'Uma assessoria completa onde entramos em todos os pilares do seu projeto para construir crescimento de verdade. Trabalhamos no branding, posicionamento, conteúdo, produtos, ofertas e funil de vendas de forma integrada. Um plano organizado para o crescimento do seu projeto no ambiente digital.',
    highlight: false
  },
  { 
    id: '3', 
    title: 'P7 CLUB', 
    code: '03', 
    description: 'O Level 7 é o topo — e o P7 Club é onde ele acontece. São 12 meses de acompanhamento próximo, mentoria em grupo, IA aplicada nos processos e uma comunidade de pessoas que jogam no mais alto nível, construindo negócios com clareza estratégica, gestão e excelência real.',
    highlight: true
  }
];

export const CLIENTS = [
  { 
    id: '01', 
    name: 'Martina Bugs', 
    role: 'Mentora de marcas, com vivência de +30 anos no mercado do luxo. Liderou marcas globais como Louis Vuitton, Fendi e Burberry.',
    link: 'https://www.instagram.com/martinabugs/'
  },
  { 
    id: '02', 
    name: 'Gustavo Staniscia', 
    role: 'Fundador da Escola Beach Tennis e autor do livro 13 Golpes. Capacita professores de beach tennis em diversos países do mundo.',
    link: 'https://www.instagram.com/gustavostaniscia/'
  },
  { 
    id: '03', 
    name: 'Susana Oliveira', 
    role: 'Nutricionista clínica e criadora do método Mais Magra. Focada em emagrecimento saudável e construção de hábitos sustentáveis.',
    link: 'https://www.instagram.com/susanaoliveiranutri/'
  },
  { 
    id: '04', 
    name: 'Mariane Junqueira', 
    role: 'Mentora de marcas, com vivência de +30 anos no mercado do luxo. Líder em marcas globais, foi diretora da Fendi por 13 anos.',
    link: 'https://www.instagram.com/marianejunqueira/'
  },
  { 
    id: '05', 
    name: 'Top Vet', 
    role: 'Clínica veterinária especializada em saúde animal com estrutura moderna e cuidado humanizado de alta confiança.',
    link: 'https://www.instagram.com/topvet.clinica/'
  },
  { 
    id: '06', 
    name: 'Acervo Jorge Feitosa', 
    role: 'Curadoria estética autoral exposta no Mata Lab (Cidade Matarazzo, SP), integrando arte e narrativa cultural.',
    link: 'https://www.instagram.com/acervo.jorgefeitosa/'
  },
  { 
    id: '07', 
    name: 'Jorge Feitosa', 
    role: 'Estilista e artista visual. Seu trabalho explora narrativas de cultura, memória e expressão contemporânea.',
    link: 'https://www.instagram.com/jorgefeitosa.artista/'
  },
  { 
    id: '08', 
    name: 'Dr. José Vitélio', 
    role: 'Médico especialista em longevidade e performance focado em vitalidade para pacientes de alta exigência.',
    link: 'https://www.instagram.com/drjosevitelio/'
  },
  { 
    id: '09', 
    name: 'João Carlos', 
    role: 'Personal trainer de alta performance. Transforma desempenho físico em estilo de vida sustentável.',
    link: 'https://www.instagram.com/ptjoaocarlos/'
  },
  { 
    id: '10', 
    name: 'Rolê com Rapha', 
    role: 'Comunidade capixaba líder em entretenimento e conexão, movimentando mais de 3 mil membros ativos no Espírito Santo.',
    link: 'https://www.instagram.com/rolecomrapha/'
  },
  {
    id: '11',
    name: 'Rauan Pablo',
    role: 'Empresário e mentor em vendas, responsável por mais de 5 milhões em vendas diretas.',
    link: 'https://www.instagram.com/rauanpablo1/'
  },
  {
    id: '12',
    name: 'Entre Movimentos',
    role: 'Treinamento e mentoria para marcas que desejam evoluir usando o luxo como inspiração.',
    link: 'https://www.instagram.com/entre3movimentos/'
  },
  {
    id: '13',
    name: 'Dra. Letícia Luz',
    role: 'Médica referência, especialista em emagrecimento com saúde, equilíbrio e cuidado.',
    link: 'https://www.instagram.com/draleticia.luz/'
  }
];

export const NAVIGATION = ['Projetos', 'Produtos', 'Levels', 'Sobre', 'Contato'];