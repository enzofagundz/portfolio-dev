interface NavItem {
  label: string
  href: string
}

interface Plan {
  name: string
  price: string
  summary: string
  featured?: boolean
}

interface ExperienceItem {
  role: string
  company: string
  period: string
}

interface EducationItem {
  degree: string
  institution: string
  period: string
}

interface ResultItem {
  title: string
  text: string
}

export const site = {
  name: 'Enzo Fagundes',
  tagline: 'Desenvolvimento web para profissionais e negócios.',
  whatsappMessage: 'Olá, Enzo! Vi seu portfólio e gostaria de conversar sobre uma landing page.',
  location: 'Lins, SP',
  linkedin: 'https://www.linkedin.com/in/enzofagundz',
  url: '',
}

export const nav: NavItem[] = [
  { label: 'Projetos', href: '#projetos' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Sobre', href: '#sobre' },
]

export const footerLinks: NavItem[] = [
  ...nav,
  { label: 'Contato', href: '#contato' },
]

export const offer = {
  eyebrow: 'Oferta',
  title: 'Vamos colocar seu trabalho na internet?',
  text: 'Se você precisa de uma página profissional para apresentar seu trabalho e facilitar o contato com seus clientes, podemos conversar sobre o que faz sentido para você.',
  plans: [
    {
      name: 'Landing page',
      price: 'a partir de R$ 640',
      summary: 'Página única, responsiva, publicada e pronta para ser divulgada.',
    },
  ] satisfies Plan[],
  note: 'Também desenvolvo outras páginas e faço ajustes em sites que já estão no ar. Se for o seu caso, conversamos sobre o escopo.',
}

export const about = {
  eyebrow: 'Sobre',
  title: 'Quem está por trás dos projetos.',
  lead: 'Desenvolvimento profissional, com experiência em projetos reais.',
  paragraphs: [
    'Sou desenvolvedor de software e atuo profissionalmente na área há alguns anos, trabalhando no desenvolvimento e manutenção de sistemas utilizados em ambientes reais.',
    'Tenho formação em Sistemas para Internet e experiência com desenvolvimento web, desde a construção de funcionalidades até testes, banco de dados e entrega de software.',
    'Hoje, além do meu trabalho como desenvolvedor, estou levando essa experiência para projetos de presença digital de profissionais e negócios locais.',
  ],
  experience: [
    { role: 'Analista de Desenvolvimento', company: 'Sonnitech', period: '2024 — atual' },
    { role: 'Estagiário de Desenvolvimento', company: 'Sonnitech', period: '2023 — 2024' },
  ] satisfies ExperienceItem[],
  experienceNote:
    'No dia a dia, trabalho com Laravel, Vue.js, MySQL, Redis e Docker, em sistemas web para os setores público e privado.',
  results: [
    {
      title: 'Rastreamento geográfico',
      text: 'Substituí uma API externa instável por um servidor de roteamento próprio, com testes de carga, resolvendo falhas críticas de sinal no rastreamento dos veículos.',
    },
    {
      title: 'Relatórios financeiros',
      text: 'Refatorei o motor de relatórios com consultas otimizadas, cache e processamento em segundo plano. O tempo de geração de relatórios complexos caiu mais de 70%.',
    },
    {
      title: 'Modernização de sistema legado',
      text: 'Participei da migração de partes de um sistema legado e da padronização do ambiente de desenvolvimento, o que reduziu o tempo de entrada de novos desenvolvedores no projeto.',
    },
    {
      title: 'Painéis e integrações',
      text: 'Desenvolvi painéis com filtros e exportação em PDF e Excel, além de integrações com APIs de terceiros.',
    },
  ] satisfies ResultItem[],
  resultsTitle: 'Resultados',
  resultsLead: 'Alguns problemas que já resolvi em sistemas em produção.',
  education: [
    { degree: 'Sistemas para Internet', institution: 'FATEC Lins', period: '2021 — 2024' },
    { degree: 'Técnico em Administração', institution: 'ETEC Lins', period: '2019 — 2020' },
  ] satisfies EducationItem[],
}
