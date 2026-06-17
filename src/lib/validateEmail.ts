import { Resolver } from 'dns/promises'

const EMAIL_FORMAT = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// O resolvedor DNS do sistema/rede pode recusar consultas MX mesmo para
// domínios válidos (ex.: algumas redes de ISP retornam EREFUSED). Usar um
// resolver explícito com DNS públicos evita falsos negativos.
function createResolver() {
  const resolver = new Resolver()
  resolver.setServers(['1.1.1.1', '8.8.8.8'])
  return resolver
}

export async function validateEmail(email: string): Promise<{
  valid: boolean
  reason?: string
}> {
  if (!EMAIL_FORMAT.test(email)) {
    return { valid: false, reason: 'format' }
  }

  const domain = email.split('@')[1]

  try {
    const records = await createResolver().resolveMx(domain)
    if (!records || records.length === 0) {
      return { valid: false, reason: 'no-mx' }
    }
    return { valid: true }
  } catch {
    return { valid: false, reason: 'no-mx' }
  }
}
