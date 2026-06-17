# RV Estratégia — Landing Page Rita Vanin

## Identidade visual (PDF de referência)
- Roxo fundo escuro: #3D2B4E / #4A3560
- Roxo cards: #5C3D6E
- Salmão accent: #C4846A (botões, destaques)
- Rosa claro: #E8B4A0 (texto accent)
- Lilás secundário: #B8A0C8
- Fundo alternativo claro: #F2F0F5

## Tom e posicionamento
- Público: profissionais competentes que não sabem comunicar valor
- Proposta: transformar experiência em autoridade e clientes
- Tom: sofisticado, direto, empático — não agressivo
- Palavras-chave: posicionamento, autoridade, branding digital

## Stack
- Next.js 15 App Router (TypeScript)
- Tailwind CSS v4
- Deploy: Vercel (branch main → produção)

## Padrões obrigatórios
- Server Components por padrão; "use client" só onde necessário
- Todas as imagens via next/image com alt descritivo
- metadata export em cada page.tsx (title, description, openGraph)
- Cores SEMPRE das variáveis CSS definidas — nunca hardcode inline
- Componentes de seção em src/components/sections/
- Mobile-first: começar pelo breakpoint sm antes do md/lg

## SEO — regras inegociáveis
- title: máximo 60 caracteres
- description: 120–160 caracteres com keyword primária
- openGraph com og:image 1200×630px em /public/og-image.jpg
- JSON-LD de Person e LocalBusiness em layout.tsx
- Não criar rotas sem metadata export

## Serviços (usar copy exato)
1. Consultoria & Diagnóstico — R$ 197
2. Mentoria Estratégica 30 dias — R$ 297
3. Método RV da Competência à Autoridade — R$ 398
4. Estratégia + Tráfego (campanha personalizada)


## Formatação de código
- Indentação: 2 espaços (nunca tabs)
- Aspas: simples em JS/TS
- Sem ponto-e-vírgula
- Trailing comma em ES5
- Largura máxima: 80 caracteres
- Classes Tailwind: ordenadas pelo plugin prettier-plugin-tailwindcss