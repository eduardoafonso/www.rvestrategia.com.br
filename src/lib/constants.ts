export const SITE_URL = 'https://rvestrategia.com.br'

export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/rvestrategia',
  // TODO: confirmar o @ real do TikTok da Rita
  tiktok: 'https://tiktok.com/@rvestrategia',
  // TODO: confirmar a URL real do canal do YouTube
  youtube: 'https://youtube.com/@rvestrategia',
  // TODO: trocar pelo número real de WhatsApp (formato 55DDDNUMERO)
  whatsapp: 'https://wa.me/5500000000000',
}

// TODO: criar a página /politica-de-privacidade
export const PRIVACY_POLICY_PATH = '/politica-de-privacidade'

export const NAV_LINKS = [
  { href: '#hero', label: 'Home' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#diagnostico', label: 'Diagnóstico Gratuito' },
  { href: '#contato', label: 'Contato' },
]

export const TRUST_MARKERS = [
  'Enfermeira obstetra',
  'Professora universitária',
  'Estrategista digital especializada em posicionamento',
]

export const TESTIMONIAL_PLACEHOLDERS = [1, 2, 3]

export type Service = {
  slug: string
  title: string
  price: string
  description: string
  features: string[]
  duration?: string
  highlight?: boolean
}

export const SERVICES: Service[] = [
  {
    slug: 'consultoria-diagnostico',
    title: 'Consultoria & Diagnóstico',
    price: 'R$ 197',
    description:
      'Uma análise profunda para identificar o que está impedindo seu ' +
      'perfil de crescer, gerar autoridade e atrair clientes.',
    features: [
      'Análise estratégica do perfil',
      'Posicionamento e percepção de valor',
      'Bio e comunicação',
      'Ideias de conteúdo alinhadas ao objetivo',
      'Oportunidades de crescimento e vendas',
      'Plano de ação personalizado',
    ],
    duration: '60 a 90 minutos',
  },
  {
    slug: 'mentoria-estrategica-30-dias',
    title: 'Mentoria Estratégica 30 dias',
    price: 'R$ 297',
    description:
      'Acompanhamento estratégico para profissionais que desejam crescer ' +
      'com direcionamento, consistência e posicionamento premium.',
    features: [
      'Tudo da consultoria',
      'Suporte estratégico pelo WhatsApp',
      'Revisão de conteúdo e posicionamento',
      'Direcionamento de autoridade',
      'Ajustes de comunicação',
      'Estratégias práticas de crescimento',
      'Acompanhamento da execução',
    ],
    highlight: true,
  },
  {
    slug: 'metodo-rv-da-competencia-a-autoridade',
    title: 'Método RV da Competência à Autoridade',
    price: 'R$ 398',
    description:
      'Aprenda a transformar sua experiência profissional em autoridade, ' +
      'confiança e clientes — sem viver produzindo conteúdos.',
    features: [],
  },
  {
    slug: 'estrategia-trafego',
    title: 'Estratégia + Tráfego',
    price: 'Campanha personalizada',
    description:
      'Planejamento estratégico e gestão de tráfego pago direcionados ' +
      'conforme o perfil, momento e objetivo do cliente.',
    features: [
      'Análise do momento atual do perfil',
      'Definição do objetivo da campanha',
      'Estrutura estratégica da comunicação',
      'Direcionamento de público',
      'Planejamento da campanha com foco em resultado',
      'Monitoramento e otimização contínua',
    ],
  },
]
