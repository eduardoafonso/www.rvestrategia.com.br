import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Política de Privacidade | RV Estratégia',
  description:
    'Saiba como a RV Estratégia coleta, usa e protege seus dados pessoais ' +
    'em conformidade com a LGPD (Lei nº 13.709/2018).',
}

export default function PoliticaDePrivacidade() {
  return (
    <main className="bg-rv-light px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-sm text-rv-body/60 transition hover:text-rv-salmon"
        >
          ← Voltar ao início
        </Link>

        <h1 className="font-heading text-3xl font-semibold text-rv-bg sm:text-4xl">
          Política de Privacidade
        </h1>
        <p className="mt-2 text-sm text-rv-body/60">
          Última atualização: junho de 2026
        </p>

        <div className="prose-rv mt-10 flex flex-col gap-8 text-rv-body">

          <section>
            <h2 className="font-heading text-xl font-semibold text-rv-bg">
              1. Controladora dos dados
            </h2>
            <p className="mt-3 text-sm leading-relaxed sm:text-base">
              A <strong>RV Estratégia</strong>, representada por Rita Vanin,
              é a controladora responsável pelo tratamento dos dados pessoais
              coletados neste site, em conformidade com a Lei Geral de Proteção
              de Dados (LGPD — Lei nº 13.709/2018).
            </p>
            <p className="mt-2 text-sm leading-relaxed sm:text-base">
              Contato:{' '}
              <a
                href="mailto:contato@rvestrategia.com.br"
                className="text-rv-salmon hover:underline"
              >
                contato@rvestrategia.com.br
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-rv-bg">
              2. Dados coletados
            </h2>
            <p className="mt-3 text-sm leading-relaxed sm:text-base">
              Coletamos apenas os dados fornecidos voluntariamente por você:
            </p>
            <ul className="mt-3 flex flex-col gap-2 text-sm sm:text-base">
              <li className="flex gap-2">
                <span className="text-rv-salmon">•</span>
                <span>
                  <strong>Formulário de diagnóstico:</strong> nome, e-mail,
                  link de rede social e telefone (opcional).
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-rv-salmon">•</span>
                <span>
                  <strong>Formulário de contato:</strong> nome, telefone e
                  assunto da mensagem.
                </span>
              </li>
            </ul>
            <p className="mt-3 text-sm leading-relaxed sm:text-base">
              Não coletamos dados sensíveis, nem realizamos rastreamento
              comportamental sem consentimento prévio.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-rv-bg">
              3. Finalidade e base legal
            </h2>
            <ul className="mt-3 flex flex-col gap-2 text-sm sm:text-base">
              <li className="flex gap-2">
                <span className="text-rv-salmon">•</span>
                <span>
                  Responder solicitações de diagnóstico e contato —{' '}
                  <em>execução de contrato pré-contratual (art. 7º, V).</em>
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-rv-salmon">•</span>
                <span>
                  Enviar comunicações sobre nossos serviços, quando você
                  autoriza —{' '}
                  <em>consentimento (art. 7º, I).</em>
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-rv-salmon">•</span>
                <span>
                  Cumprir obrigações legais e regulatórias —{' '}
                  <em>obrigação legal (art. 7º, II).</em>
                </span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-rv-bg">
              4. Compartilhamento de dados
            </h2>
            <p className="mt-3 text-sm leading-relaxed sm:text-base">
              Seus dados não são vendidos nem cedidos a terceiros para fins
              comerciais. Podemos compartilhá-los apenas com:
            </p>
            <ul className="mt-3 flex flex-col gap-2 text-sm sm:text-base">
              <li className="flex gap-2">
                <span className="text-rv-salmon">•</span>
                <span>
                  Ferramentas de CRM e comunicação utilizadas internamente
                  (operadores), sob contrato de confidencialidade.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-rv-salmon">•</span>
                <span>
                  Autoridades públicas, quando exigido por lei.
                </span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-rv-bg">
              5. Prazo de retenção
            </h2>
            <p className="mt-3 text-sm leading-relaxed sm:text-base">
              Os dados são mantidos pelo tempo necessário para cumprir a
              finalidade para a qual foram coletados ou por prazo exigido por
              lei. Após esse período, são excluídos ou anonimizados.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-rv-bg">
              6. Seus direitos (LGPD, art. 18)
            </h2>
            <p className="mt-3 text-sm leading-relaxed sm:text-base">
              Você pode, a qualquer momento, solicitar:
            </p>
            <ul className="mt-3 flex flex-col gap-2 text-sm sm:text-base">
              {[
                'Confirmação da existência do tratamento',
                'Acesso aos dados que mantemos sobre você',
                'Correção de dados incompletos, inexatos ou desatualizados',
                'Anonimização, bloqueio ou eliminação dos dados desnecessários',
                'Portabilidade dos dados a outro fornecedor de serviço',
                'Eliminação dos dados tratados com base em consentimento',
                'Revogação do consentimento a qualquer momento',
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-rv-salmon">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm leading-relaxed sm:text-base">
              Para exercer seus direitos, entre em contato por{' '}
              <a
                href="mailto:contato@rvestrategia.com.br"
                className="text-rv-salmon hover:underline"
              >
                contato@rvestrategia.com.br
              </a>
              . Atenderemos em até 15 dias.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-rv-bg">
              7. Cookies
            </h2>
            <p className="mt-3 text-sm leading-relaxed sm:text-base">
              Este site pode utilizar cookies estritamente necessários ao
              funcionamento técnico das páginas. Não utilizamos cookies de
              rastreamento ou publicidade comportamental sem consentimento
              explícito.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-rv-bg">
              8. Segurança
            </h2>
            <p className="mt-3 text-sm leading-relaxed sm:text-base">
              Adotamos medidas técnicas e organizacionais adequadas para
              proteger seus dados contra acesso não autorizado, perda,
              alteração ou divulgação indevida.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-rv-bg">
              9. Alterações nesta política
            </h2>
            <p className="mt-3 text-sm leading-relaxed sm:text-base">
              Esta política pode ser atualizada periodicamente. A versão mais
              recente estará sempre disponível nesta página, com a data de
              revisão indicada no topo.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-rv-bg">
              10. Contato e DPO
            </h2>
            <p className="mt-3 text-sm leading-relaxed sm:text-base">
              Dúvidas, solicitações ou reclamações relacionadas a esta
              política podem ser enviadas para:{' '}
              <a
                href="mailto:contato@rvestrategia.com.br"
                className="text-rv-salmon hover:underline"
              >
                contato@rvestrategia.com.br
              </a>
              . Você também pode registrar reclamação perante a{' '}
              <strong>ANPD</strong> (Autoridade Nacional de Proteção de Dados)
              em{' '}
              <a
                href="https://www.gov.br/anpd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rv-salmon hover:underline"
              >
                gov.br/anpd
              </a>
              .
            </p>
          </section>

        </div>
      </div>
    </main>
  )
}
