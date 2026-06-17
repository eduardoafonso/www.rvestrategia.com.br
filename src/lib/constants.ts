export const SITE_URL = 'https://rvestrategia.com.br'

export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/rvestrategia',
  // TODO: confirmar o @ real do TikTok da Rita
  tiktok: 'https://tiktok.com/@rvestrategia',
  // TODO: confirmar a URL real do canal do YouTube
  youtube: 'https://youtube.com/@rvestrategia',
  whatsapp: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_PHONE ?? '5500000000000'}`,
}

// TODO: criar a página /politica-de-privacidade
export const PRIVACY_POLICY_PATH = '/politica-de-privacidade'

export const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#diagnostico', label: 'Diagnóstico Gratuito' },
  { href: '#servicos', label: 'Serviços' },
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
      'Você sai da sessão sabendo exatamente o que está travando sua ' +
      'presença digital — e com um plano claro de onde e como mudar.',
    features: [
      'Clareza sobre o que está impedindo seu crescimento',
      'Como você é percebido hoje e como mudar isso',
      'Bio e perfil que comunicam valor imediatamente',
      'Ideias de conteúdo que atraem, não apenas informam',
      'Oportunidades reais de crescimento e vendas identificadas',
      'Plano de ação com prioridades definidas',
    ],
    duration: '60 a 90 minutos',
  },
  {
    slug: 'mentoria-estrategica-30-dias',
    title: 'Mentoria Estratégica 30 dias',
    price: 'R$ 297',
    description:
      '30 dias para construir um posicionamento que atrai as pessoas certas ' +
      '— com acompanhamento direto para garantir que a estratégia sai do papel.',
    features: [
      'Inclui tudo da Consultoria & Diagnóstico',
      'Suporte direto no WhatsApp para dúvidas e ajustes',
      'Conteúdo revisado antes de publicar',
      'Direcionamento para construir autoridade semana a semana',
      'Comunicação ajustada conforme os resultados aparecem',
      'Estratégias que você executa com clareza e confiança',
      'Acompanhamento para garantir que a estratégia sai do papel',
    ],
    highlight: true,
  },
  {
    slug: 'metodo-rv-da-competencia-a-autoridade',
    title: 'Método RV da Competência à Autoridade',
    price: 'R$ 398',
    description:
      'O método completo para transformar sua experiência em autoridade ' +
      'reconhecida — sem depender de volume de conteúdo ou tendências passageiras.',
    features: [],
  },
  {
    slug: 'estrategia-trafego',
    title: 'Estratégia + Tráfego',
    price: 'Campanha personalizada',
    description:
      'Para quem quer acelerar resultados com tráfego pago — campanha ' +
      'criada do zero para o seu perfil, objetivo e momento.',
    features: [
      'Diagnóstico do momento atual e do potencial de crescimento',
      'Objetivo de campanha definido com precisão',
      'Comunicação estruturada para converter, não apenas aparecer',
      'Público certo definido para não desperdiçar verba',
      'Campanha construída para gerar retorno real',
      'Monitoramento e otimização contínua dos resultados',
    ],
  },
]
