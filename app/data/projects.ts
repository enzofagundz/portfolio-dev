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
  cover?: ProjectImage
  mobile?: ProjectImage
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
    slug: 'demo-psicologo',
    title: 'Rafael Bittencourt',
    context: 'Landing page',
    category: 'Psicologia',
    location: 'Lins, SP',
    description:
      'Página de um psicólogo clínico, feita para apresentar a abordagem, o espaço de atendimento e o caminho até a primeira conversa.',
    goal: 'Explicar como o atendimento funciona e criar um caminho simples para novos contatos.',
    solution:
      'Uma página sóbria, com a apresentação do profissional, as formas de atendimento presencial e online e contato direto pelo WhatsApp.',
    cover: {
      src: '/projects/demo-psicologo-cover.webp',
      width: 1200,
      height: 750,
      alt: 'Primeira tela da página do psicólogo Rafael Bittencourt, com o título "Psicoterapia para adolescentes e adultos em Lins, SP" e um retrato do profissional.',
    },
    url: '/projects/demo-psicologo/',
  },
  {
    slug: 'demo-estetica',
    title: 'Lumina Estética',
    context: 'Landing page',
    category: 'Estética',
    location: 'Lins, SP',
    description:
      'Página de uma clínica de estética funcional e avançada, com os tratamentos explicados e o agendamento da avaliação como próximo passo.',
    goal: 'Deixar claro o que é cada tratamento e conduzir a visita até o agendamento de uma avaliação.',
    solution:
      'Uma página com os procedimentos, a avaliação inicial como primeiro passo, endereço e horários visíveis e contato direto pelo WhatsApp.',
    mobile: {
      src: '/projects/demo-estetica-mobile.webp',
      width: 390,
      height: 844,
      alt: 'Página da clínica Lumina Estética vista no celular.',
    },
    url: '/projects/demo-estetica/',
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
