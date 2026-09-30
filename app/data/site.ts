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

const whatsappNumber = '55DDDNUMERO'

export const site = {
  name: 'Enzo Fagundes',
  tagline: 'Desenvolvimento web para profissionais e negócios.',
  email: 'enzofagundz@gmail.com',
  whatsappNumber,
  whatsappMessage: 'Olá, Enzo! Vi seu portfólio e gostaria de conversar sobre uma landing page.',
  location: 'Lins, SP',
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
  ] satisfies ExperienceItem[],
  education: {
    degree: 'Sistemas para Internet',
    institution: 'FATEC Lins',
    period: '2021 — 2024',
  },
}

export const whatsappHref = () =>
  `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(site.whatsappMessage)}`

export const mailtoHref = () => `mailto:${site.email}`
