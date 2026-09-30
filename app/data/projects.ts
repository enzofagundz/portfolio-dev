export interface ProjectImage {
  src: string
  width: number
  height: number
  alt: string
}

export interface Project {
  slug: string
  title: string
  context: string
  category: string
  location?: string
  description: string
  goal: string
  solution: string
  cover: ProjectImage
  full: ProjectImage
  mobile: ProjectImage
  url?: string
}

export interface OtherWork {
  title: string
  context: string
  description: string
  url?: string
  urlLabel?: string
}

export const projects: Project[] = [
  {
    slug: 'lucas-alcantara',
    title: 'Lucas Alcantara',
    context: 'Landing page',
    category: 'Psicologia',
    location: 'Lins, SP',
    description:
      'Página de um psicólogo clínico, feita para apresentar a abordagem, o espaço de atendimento e o caminho até a primeira conversa.',
    goal: 'Explicar como o atendimento funciona e criar um caminho simples para novos contatos.',
    solution:
      'Uma página sóbria, com a apresentação do profissional, informações do consultório e contato direto pelo WhatsApp.',
    cover: {
      src: '/projects/lucas-alcantara-hero.webp',
      width: 1200,
      height: 750,
      alt: 'Primeira tela da página do psicólogo Lucas Alcantara, com o título "Psicoterapia para adolescentes e adultos em Lins, SP" e um retrato do profissional.',
    },
    full: {
      src: '/projects/lucas-alcantara-full.webp',
      width: 1000,
      height: 3901,
      alt: 'Página completa do psicólogo Lucas Alcantara, seção por seção.',
    },
    mobile: {
      src: '/projects/lucas-alcantara-mobile.webp',
      width: 420,
      height: 7547,
      alt: 'Página do psicólogo Lucas Alcantara vista no celular.',
    },
  },
  {
    slug: 'oligoflora-lins',
    title: 'OligoFlora Lins',
    context: 'Landing page',
    category: 'Estética',
    location: 'Lins, SP',
    description:
      'Página de uma clínica de estética funcional e avançada, com os tratamentos explicados e o agendamento da avaliação como próximo passo.',
    goal: 'Deixar claro o que é cada tratamento e conduzir a visita até o agendamento de uma avaliação.',
    solution:
      'Uma página com os procedimentos, a avaliação inicial como primeiro passo, endereço e horários visíveis e contato direto pelo WhatsApp.',
    cover: {
      src: '/projects/oligoflora-lins-hero.webp',
      width: 1200,
      height: 750,
      alt: 'Primeira tela da página da clínica OligoFlora Lins, com o título "Estética facial e corporal em Lins, com avaliação antes de cada tratamento".',
    },
    full: {
      src: '/projects/oligoflora-lins-full.webp',
      width: 1000,
      height: 3133,
      alt: 'Página completa da clínica OligoFlora Lins, seção por seção.',
    },
    mobile: {
      src: '/projects/oligoflora-lins-mobile.webp',
      width: 420,
      height: 7186,
      alt: 'Página da clínica OligoFlora Lins vista no celular.',
    },
  },
]

export const otherWork: OtherWork[] = [
  {
    title: 'Cidade Fácil',
    context: 'Sonnitech · produto',
    description:
      'Software da Sonnitech usado por prefeituras para reduzir burocracia e dar mais eficiência a processos do dia a dia. Os módulos principais estão operacionais desde 2019 e o sistema é usado por várias cidades paulistas. Faço parte do time que desenvolve o produto.',
    url: 'https://sonnitech.com.br/',
    urlLabel: 'Página da Sonnitech',
  },
  {
    title: 'Refatoração de front-end',
    context: 'Freelance · escopo fechado',
    description:
      'Migração da interface de um sistema web existente para uma stack mais simples de manter, com entregas semanais ao longo de um mês. O tempo estimado de manutenção do front-end caiu cerca de 40%.',
  },
]
